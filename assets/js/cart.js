/**
 * Shawarma & Middle Eastern Grill - Add to Cart & Offcanvas Drawer Engine
 * Handles persistent shopping cart, quantity controls, subtotals, badge updates, and image fallbacks.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'sg_cart';
  const FALLBACK_IMG = 'assets/images/food/food-placeholder.svg';

  // 1. Storage Helpers
  function getCart() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to read cart from localStorage', e);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
      updateCartBadge();
      renderCartOffcanvas();
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }

  // 2. Global Badge & Count Update
  function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (parseInt(item.quantity, 10) || 1), 0);
  }

  function getCartSubtotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (parseFloat(item.price) * (parseInt(item.quantity, 10) || 1)), 0);
  }

  function updateCartBadge() {
    const totalCount = getCartItemCount();
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = totalCount;
      if (totalCount > 0) {
        badge.classList.add('badge-pop');
        setTimeout(() => badge.classList.remove('badge-pop'), 300);
      }
    });

    const cartBtns = document.querySelectorAll('.cart-btn');
    cartBtns.forEach(btn => {
      btn.setAttribute('aria-label', `View Shopping Cart (${totalCount} item${totalCount === 1 ? '' : 's'})`);
    });
  }

  // 3. Add Item to Cart
  function addToCart(itemToAdd) {
    if (!itemToAdd || !itemToAdd.name) return;

    let cart = getCart();
    const cleanPrice = typeof itemToAdd.price === 'number' ? itemToAdd.price : parseFloat(String(itemToAdd.price).replace(/[^0-9.]/g, '')) || 0;
    const qty = parseInt(itemToAdd.quantity, 10) || 1;
    const itemId = itemToAdd.id || itemToAdd.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const itemImg = itemToAdd.img || FALLBACK_IMG;

    // Check if item already exists (matching ID & customization options if any)
    const existingIndex = cart.findIndex(i => i.id === itemId && i.options === (itemToAdd.options || ''));

    if (existingIndex > -1) {
      cart[existingIndex].quantity += qty;
    } else {
      cart.push({
        id: itemId,
        name: itemToAdd.name,
        price: cleanPrice,
        img: itemImg,
        quantity: qty,
        options: itemToAdd.options || ''
      });
    }

    saveCart(cart);
    showToast(`Added "${itemToAdd.name}" to cart!`);
    openCartOffcanvas();
  }

  // 4. Quantity Adjust & Remove
  function updateItemQuantity(itemId, options, newQty) {
    let cart = getCart();
    const index = cart.findIndex(i => i.id === itemId && (i.options || '') === (options || ''));
    if (index > -1) {
      if (newQty <= 0) {
        cart.splice(index, 1);
      } else {
        cart[index].quantity = newQty;
      }
      saveCart(cart);
    }
  }

  function removeItem(itemId, options) {
    let cart = getCart();
    cart = cart.filter(i => !(i.id === itemId && (i.options || '') === (options || '')));
    saveCart(cart);
  }

  function clearCart() {
    saveCart([]);
  }

  // 5. Toast Notification System
  function showToast(message) {
    let container = document.getElementById('sgToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'sgToastContainer';
      container.className = 'position-fixed bottom-0 end-0 p-3 z-3';
      document.body.appendChild(container);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center text-white bg-spice border-0 show shadow-lg mb-2';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body font-heading fw-bold">
          🛒 ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>`;

    container.appendChild(toastEl);
    setTimeout(() => {
      toastEl.classList.remove('show');
      setTimeout(() => toastEl.remove(), 300);
    }, 3500);
  }

  // 6. Dynamic Offcanvas Markup Creation
  function ensureOffcanvasMarkup() {
    let offcanvas = document.getElementById('cartOffcanvas');
    if (!offcanvas) {
      offcanvas = document.createElement('div');
      offcanvas.className = 'offcanvas offcanvas-end text-body bg-surface';
      offcanvas.id = 'cartOffcanvas';
      offcanvas.setAttribute('tabindex', '-1');
      offcanvas.setAttribute('aria-labelledby', 'cartOffcanvasLabel');
      offcanvas.innerHTML = `
        <div class="offcanvas-header border-bottom border-color bg-surface-alt">
          <h4 class="offcanvas-title font-heading mb-0" id="cartOffcanvasLabel">🛒 Your Shopping Cart</h4>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-0 d-flex flex-column justify-content-between" id="cartOffcanvasBody">
          <!-- Item list rendered here dynamically -->
        </div>`;
      document.body.appendChild(offcanvas);
    }
  }

  function renderCartOffcanvas() {
    ensureOffcanvasMarkup();
    const bodyContainer = document.getElementById('cartOffcanvasBody');
    if (!bodyContainer) return;

    const cart = getCart();
    const subtotal = getCartSubtotal();
    const tax = subtotal * 0.08; // 8% estimated tax
    const total = subtotal + tax;

    if (cart.length === 0) {
      bodyContainer.innerHTML = `
        <div class="p-5 text-center my-auto">
          <div class="fs-1 mb-3">🛍️</div>
          <h4 class="font-heading mb-2">Your Cart is Empty</h4>
          <p class="text-muted small mb-4">Discover our authentic spit-roasted shawarma and sizzling charcoal platters.</p>
          <a href="menu.html" class="btn btn-gold btn-md" data-bs-dismiss="offcanvas">Explore Menu</a>
        </div>`;
      return;
    }

    let itemsHtml = cart.map(item => {
      const itemSub = (parseFloat(item.price) * item.quantity).toFixed(2);
      const safeImg = item.img || FALLBACK_IMG;
      return `
        <div class="p-3 border-bottom border-color d-flex align-items-center gap-3">
          <img src="${safeImg}" onerror="this.onerror=null; this.src='${FALLBACK_IMG}';" alt="${item.name}" class="rounded-3 object-fit-cover shadow-sm" style="width: 65px; height: 65px; flex-shrink: 0;">
          <div class="flex-grow-1 min-w-0">
            <h6 class="font-heading mb-1 text-truncate" title="${item.name}">${item.name}</h6>
            ${item.options ? `<small class="text-muted d-block text-truncate">${item.options}</small>` : ''}
            <div class="fw-bold text-spice small">₹${parseFloat(item.price).toFixed(2)}</div>
          </div>
          <div class="d-flex flex-column align-items-end gap-1">
            <button class="btn btn-link text-danger p-0 border-0 fs-5 lh-1 cart-remove-btn" data-id="${item.id}" data-options="${item.options || ''}" title="Remove item">&times;</button>
            <div class="d-flex align-items-center border border-color rounded-pill bg-card overflow-hidden">
              <button class="btn btn-sm px-2 py-0 border-0 text-muted cart-qty-minus" data-id="${item.id}" data-options="${item.options || ''}" data-qty="${item.quantity - 1}">-</button>
              <span class="px-2 small fw-bold">${item.quantity}</span>
              <button class="btn btn-sm px-2 py-0 border-0 text-muted cart-qty-plus" data-id="${item.id}" data-options="${item.options || ''}" data-qty="${item.quantity + 1}">+</button>
            </div>
            <small class="fw-bold text-main mt-1">₹${itemSub}</small>
          </div>
        </div>`;
    }).join('');

    bodyContainer.innerHTML = `
      <div class="flex-grow-1 overflow-auto">
        ${itemsHtml}
      </div>
      <div class="p-4 border-top border-color bg-surface-alt mt-auto">
        <div class="d-flex justify-content-between mb-2">
          <span class="text-muted">Subtotal:</span>
          <span class="fw-bold text-main">₹${subtotal.toFixed(2)}</span>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <span class="text-muted">Estimated Tax (8%):</span>
          <span class="text-muted">₹${tax.toFixed(2)}</span>
        </div>
        <div class="d-flex justify-content-between fs-5 fw-bold text-main border-top border-secondary pt-2 mb-4">
          <span>Total:</span>
          <span class="text-spice">₹${total.toFixed(2)}</span>
        </div>
        <div class="d-grid gap-2">
          <a href="contact.html#contactForm" class="btn btn-spice btn-lg" data-bs-dismiss="offcanvas">Proceed to Checkout</a>
          <button type="button" class="btn btn-outline-gold btn-sm" id="clearCartBtn">Clear Cart</button>
        </div>
      </div>`;

    // Attach event handlers inside Offcanvas
    bodyContainer.querySelectorAll('.cart-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const options = btn.getAttribute('data-options');
        const qty = parseInt(btn.getAttribute('data-qty'), 10);
        updateItemQuantity(id, options, qty);
      });
    });

    bodyContainer.querySelectorAll('.cart-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const options = btn.getAttribute('data-options');
        const qty = parseInt(btn.getAttribute('data-qty'), 10);
        updateItemQuantity(id, options, qty);
      });
    });

    bodyContainer.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const options = btn.getAttribute('data-options');
        removeItem(id, options);
      });
    });

    const clearBtn = document.getElementById('clearCartBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        clearCart();
      });
    }
  }

  function openCartOffcanvas() {
    ensureOffcanvasMarkup();
    const el = document.getElementById('cartOffcanvas');
    if (el && typeof bootstrap !== 'undefined' && bootstrap.Offcanvas) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(el) || new bootstrap.Offcanvas(el);
      bsOffcanvas.show();
    }
  }

  // 7. Auto Image Fallback Engine
  function initImageFallbacks() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.getAttribute('onerror')) {
        img.setAttribute('onerror', `this.onerror=null; this.src='${FALLBACK_IMG}';`);
      }
    });

    document.addEventListener('error', function (e) {
      if (e.target && e.target.tagName === 'IMG') {
        const img = e.target;
        if (img.src !== window.location.origin + '/' + FALLBACK_IMG && !img.src.includes('food-placeholder.svg')) {
          img.src = FALLBACK_IMG;
        }
      }
    }, true);
  }

  // 8. Event Delegation for Add to Cart Buttons
  function initAddButtons() {
    document.addEventListener('click', function (e) {
      const addBtn = e.target.closest('.add-to-cart-btn') || e.target.closest('[data-add-to-cart]');
      if (addBtn) {
        e.preventDefault();
        const card = addBtn.closest('.food-card');
        const cardTitle = card?.querySelector('.food-card-title')?.textContent?.trim();
        const name = addBtn.getAttribute('data-name') || cardTitle || 'Shawarma Dish';
        const id = addBtn.getAttribute('data-id') || name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const rawPrice = addBtn.getAttribute('data-price') || card?.querySelector('.text-spice, .food-card-price-badge')?.textContent || '12.99';
        const price = parseFloat(String(rawPrice).replace(/[^0-9.]/g, '')) || 12.99;
        const cardImg = card?.querySelector('img')?.src;
        const img = cardImg || addBtn.getAttribute('data-img') || FALLBACK_IMG;

        addToCart({ id, name, price, img, quantity: 1 });
      }

      const cartIconBtn = e.target.closest('.cart-btn');
      if (cartIconBtn) {
        e.preventDefault();
        openCartOffcanvas();
      }

      // Capture clicked card info when navigating to menu-item.html
      const detailsLink = e.target.closest('a[href*="menu-item.html"]');
      if (detailsLink) {
        const card = detailsLink.closest('.food-card');
        if (card) {
          const cardImg = card.querySelector('img')?.getAttribute('src');
          const cardTitle = card.querySelector('.food-card-title')?.textContent?.trim();
          const rawPrice = card.querySelector('.food-card-bottom-price, .food-card-price-badge, .food-card-price, .text-spice')?.textContent?.trim();
          const cardDesc = card.querySelector('.food-card-desc')?.textContent?.trim();
          const addBtn = card.querySelector('.add-to-cart-btn');

          // Extract dish slug from href (e.g., menu-item.html?dish=...)
          const href = detailsLink.getAttribute('href') || '';
          let dishSlug = '';
          const match = href.match(/[?&]dish=([^&#]+)/);
          if (match && match[1]) {
            dishSlug = decodeURIComponent(match[1]);
          }
          const id = dishSlug || (cardTitle ? cardTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : '') || addBtn?.getAttribute('data-id') || '';

          if (cardTitle || cardImg) {
            const payload = JSON.stringify({
              id: id,
              name: cardTitle,
              price: rawPrice,
              img: cardImg,
              desc: cardDesc
            });
            try {
              sessionStorage.setItem('sg_selected_dish', payload);
              if (id) sessionStorage.setItem('sg_selected_dish_id', id);
            } catch (err) {}
            try {
              localStorage.setItem('sg_selected_dish', payload);
              if (id) localStorage.setItem('sg_selected_dish_id', id);
            } catch (err) {}
          }
        }
      }
    });

    // Handle Custom Dish Form on menu-item.html
    const customForm = document.getElementById('dishCustomForm');
    if (customForm) {
      customForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const sideSelect = document.getElementById('sideChoice');
        const breadSelect = document.getElementById('breadChoice');
        const qtyInput = customForm.querySelector('input[type="number"]');

        const side = sideSelect ? sideSelect.options[sideSelect.selectedIndex].text : '';
        const bread = breadSelect ? breadSelect.options[breadSelect.selectedIndex].text : '';
        const qty = qtyInput ? parseInt(qtyInput.value, 10) : 1;

        addToCart({
          id: 'sultan-mixed-grill-custom',
          name: 'Sultan Mixed Grill Platter Feast',
          price: 28.99,
          img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
          quantity: qty,
          options: `${side} • ${bread}`
        });
      });
    }
  }

  // Expose global methods
  window.sgCart = {
    add: addToCart,
    open: openCartOffcanvas,
    getCart: getCart,
    clear: clearCart
  };

  document.addEventListener('DOMContentLoaded', function () {
    updateCartBadge();
    renderCartOffcanvas();
    initImageFallbacks();
    initAddButtons();
  });

})();
