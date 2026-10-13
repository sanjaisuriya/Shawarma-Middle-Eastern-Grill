/**
 * Shawarma & Middle Eastern Grill - Form Validation & Demo Feedback Engine
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Helper to validate email format
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Helper to validate name format (letters, spaces, hyphens, apostrophes ONLY, no numbers)
  function isValidName(name) {
    if (!name || name.trim().length === 0) return false;
    // Must not contain any numeric digits
    if (/[0-9]/.test(name)) return false;
    // Must contain valid alphabetic characters and spaces
    return /^[A-Za-z\s'\-]+$/.test(name.trim());
  }

  // Helper to check if an element is a phone field
  function isPhoneField(element) {
    if (!element) return false;
    const id = (element.id || '').toLowerCase();
    const name = (element.name || '').toLowerCase();
    const type = (element.type || '').toLowerCase();
    return (
      type === 'tel' ||
      element.classList.contains('phone-input') ||
      id.includes('phone') ||
      name.includes('phone')
    );
  }

  // Helper to validate phone format (digits only, 7 to 15 digits)
  function isValidPhone(phone) {
    if (!phone || phone.trim().length === 0) return false;
    // Strictly digits only, 7 to 15 digits
    return /^\d{7,15}$/.test(phone.trim());
  }

  // Live Input Filtering for Name Fields (Prevent numbers on keydown and input)
  const nameInputs = document.querySelectorAll('input[id*="Name"], input[name="name"], .name-input');
  nameInputs.forEach(input => {
    // Automatically strip digits on input / paste
    input.addEventListener('input', function () {
      if (/[0-9]/.test(this.value)) {
        this.value = this.value.replace(/[0-9]/g, '');
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        const feedback = this.parentElement.querySelector('.invalid-feedback-custom');
        if (feedback) {
          feedback.textContent = 'Numbers are not allowed in name fields. Please use letters only.';
        }
      } else if (this.value.trim().length > 0 && isValidName(this.value)) {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
      } else if (this.value.trim().length === 0) {
        this.classList.remove('is-valid');
      }
    });

    // Block digit keys on keydown
    input.addEventListener('keydown', function (e) {
      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        this.classList.add('is-invalid');
        const feedback = this.parentElement.querySelector('.invalid-feedback-custom');
        if (feedback) {
          feedback.textContent = 'Numbers are not allowed in name fields. Please use letters only.';
        }
      }
    });
  });

  // Live Input Filtering for Phone Fields (Digits only - block letters and symbols on keydown, paste, and input)
  const phoneInputs = document.querySelectorAll('input[type="tel"], input[id*="phone" i], input[name*="phone" i], .phone-input');
  phoneInputs.forEach(input => {
    // Ensure mobile numeric keypad and digit pattern
    input.setAttribute('inputmode', 'numeric');
    if (!input.hasAttribute('pattern')) {
      input.setAttribute('pattern', '[0-9]+');
    }

    // Intercept paste event: filter pasted text to digits only or strip invalid characters
    input.addEventListener('paste', function (e) {
      const pasteData = (e.clipboardData || window.clipboardData).getData('text');
      if (pasteData && /\D/.test(pasteData)) {
        e.preventDefault();
        const digitsOnly = pasteData.replace(/\D/g, '');
        // Insert clean digits at current selection
        const start = this.selectionStart;
        const end = this.selectionEnd;
        const currentVal = this.value;
        this.value = currentVal.substring(0, start) + digitsOnly + currentVal.substring(end);
        this.setSelectionRange(start + digitsOnly.length, start + digitsOnly.length);

        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        const feedback = this.parentElement.querySelector('.invalid-feedback-custom');
        if (feedback) {
          feedback.textContent = 'Only numbers are allowed in phone number (letters and special characters removed).';
        }
      }
    });

    // Block non-digit keys on keydown
    input.addEventListener('keydown', function (e) {
      // Allow control keys: Backspace, Delete, Tab, Escape, Enter, Arrow keys, Home, End
      const allowedSpecialKeys = [
        'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
        'Home', 'End'
      ];
      if (allowedSpecialKeys.includes(e.key)) {
        return;
      }
      // Allow Ctrl/Cmd key combos (Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z, etc.)
      if (e.ctrlKey || e.metaKey) {
        return;
      }
      // Allow F-keys
      if (e.key.startsWith('F') && e.key.length > 1) {
        return;
      }
      // If key is not a digit (0-9), prevent it
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        this.classList.add('is-invalid');
        const feedback = this.parentElement.querySelector('.invalid-feedback-custom');
        if (feedback) {
          feedback.textContent = 'Only numbers are allowed. Letters and special characters are not permitted.';
        }
      }
    });

    // Automatically strip any non-digit characters on input (safety catch)
    input.addEventListener('input', function () {
      if (/\D/.test(this.value)) {
        this.value = this.value.replace(/\D/g, '');
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        const feedback = this.parentElement.querySelector('.invalid-feedback-custom');
        if (feedback) {
          feedback.textContent = 'Only numbers are allowed in phone number.';
        }
      } else if (this.value.length > 0 && isValidPhone(this.value)) {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
      } else if (this.value.length === 0) {
        this.classList.remove('is-valid');
      }
    });
  });

  // Generic Form Handler with Front-End Demo Simulation
  function setupFormValidation(formId, successAlertId) {
    const form = document.getElementById(formId);
    const successAlert = document.getElementById(successAlertId);

    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      // Prevent accidental duplicate submissions while processing
      if (submitBtn && submitBtn.disabled) {
        return;
      }

      let isValid = true;
      let firstInvalidInput = null;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

      inputs.forEach(input => {
        const rawValue = input.value;
        const value = rawValue ? rawValue.trim() : '';
        let fieldValid = true;
        let errorMessage = '';

        if (!value) {
          fieldValid = false;
          if (input.tagName.toLowerCase() === 'select') {
            errorMessage = 'Please select an option from the list.';
          } else if (input.tagName.toLowerCase() === 'textarea') {
            errorMessage = 'Please enter your message or request details.';
          } else {
            errorMessage = 'This field is required.';
          }
        } else if (isPhoneField(input)) {
          if (/\D/.test(value)) {
            fieldValid = false;
            errorMessage = 'Phone number must contain digits only (no letters or symbols).';
          } else if (!isValidPhone(value)) {
            fieldValid = false;
            errorMessage = 'Please enter a valid phone number (minimum 7 digits).';
          }
        } else if (input.id.toLowerCase().includes('name') || input.name === 'name' || input.classList.contains('name-input')) {
          if (!isValidName(value)) {
            fieldValid = false;
            errorMessage = 'Please enter a valid name using letters and spaces only (no numbers allowed).';
          }
        } else if (input.type === 'email' && !isValidEmail(value)) {
          fieldValid = false;
          errorMessage = 'Please enter a valid email address.';
        } else if (input.type === 'checkbox' && !input.checked) {
          fieldValid = false;
          errorMessage = 'Please check this box to proceed.';
        }

        const feedback = input.parentElement.querySelector('.invalid-feedback-custom');

        if (!fieldValid) {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          if (feedback && errorMessage) {
            feedback.textContent = errorMessage;
          }
          if (!firstInvalidInput) {
            firstInvalidInput = input;
          }
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        }
      });

      if (!isValid) {
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        return;
      }

      // Valid submission: Prevent duplicate clicks and show submitting state
      let originalBtnContent = '';
      if (submitBtn) {
        originalBtnContent = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
        submitBtn.innerHTML = `
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          <span>Sending Request...</span>
        `;
      }

      // Simulate front-end async demo processing (700ms)
      setTimeout(() => {
        // Generate dynamic reference number if reference ID element exists
        const refIdEl = document.getElementById('demoConfId');
        if (refIdEl) {
          const randomNum = Math.floor(1000 + Math.random() * 9000);
          refIdEl.textContent = 'SG-' + new Date().getFullYear() + '-' + randomNum;
        }

        // Show confirmation alert
        if (successAlert) {
          successAlert.style.display = 'block';
          successAlert.classList.remove('d-none');
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Clear the form
        form.reset();

        // Remove validation state badges/borders
        const allFormControls = form.querySelectorAll('input, select, textarea');
        allFormControls.forEach(ctrl => {
          ctrl.classList.remove('is-valid');
          ctrl.classList.remove('is-invalid');
        });

        // Restore submit button to normal state
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.removeAttribute('aria-busy');
          submitBtn.innerHTML = originalBtnContent;
        }

        // Auto-hide success alert after 8 seconds (or keep available)
        setTimeout(() => {
          if (successAlert) {
            successAlert.style.display = 'none';
          }
        }, 8000);
      }, 700);
    });

    // Remove invalid styling on live input/change
    const allInputs = form.querySelectorAll('input, select, textarea');
    allInputs.forEach(input => {
      const clearInvalid = () => {
        if (input.classList.contains('is-invalid')) {
          if (input.id.toLowerCase().includes('name')) {
            if (isValidName(input.value)) {
              input.classList.remove('is-invalid');
              input.classList.add('is-valid');
            }
          } else if (isPhoneField(input)) {
            if (isValidPhone(input.value)) {
              input.classList.remove('is-invalid');
              input.classList.add('is-valid');
            }
          } else if (input.value.trim().length > 0) {
            input.classList.remove('is-invalid');
          }
        }
      };

      input.addEventListener('input', clearInvalid);
      input.addEventListener('change', clearInvalid);
    });
  }

  // Initialize validation for forms
  setupFormValidation('cateringForm', 'cateringSuccessAlert');
  setupFormValidation('homeCateringEnquiryForm', 'h2FormAlert');
  setupFormValidation('contactForm', 'contactSuccessAlert');
  setupFormValidation('newsletterForm', 'newsletterSuccessAlert');
  setupFormValidation('quickOrderForm', 'quickOrderSuccessAlert');
});
