/**
 * Shawarma & Middle Eastern Grill - Menu & Content Filter Engine
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 1. Category Filter Tabs & Combined Filter Engine ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const foodItems = document.querySelectorAll('.food-item-col');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const dietaryCheckboxes = document.querySelectorAll('.dietary-filter-checkbox');
  const resetBtn = document.getElementById('resetMenuFiltersBtn');

  if (filterBtns.length > 0 && foodItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        applyCombinedFilters();

        const filterValue = this.getAttribute('data-filter');
        if (filterValue !== 'all') {
          const target = document.getElementById(`category-${filterValue}`);
          if (target && target.style.display !== 'none') {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  // --- 2. Menu Search Input & Dietary Checkboxes ---
  if (menuSearchInput || dietaryCheckboxes.length > 0) {
    if (menuSearchInput) {
      menuSearchInput.addEventListener('input', applyCombinedFilters);
    }
    dietaryCheckboxes.forEach(cb => {
      cb.addEventListener('change', applyCombinedFilters);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (menuSearchInput) menuSearchInput.value = '';
      dietaryCheckboxes.forEach(cb => { cb.checked = false; });
      const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
      if (allBtn) {
        filterBtns.forEach(b => b.classList.remove('active'));
        allBtn.classList.add('active');
      }
      applyCombinedFilters();
    });
  }

  function applyCombinedFilters() {
    const searchTerm = menuSearchInput ? menuSearchInput.value.toLowerCase().trim() : '';
    const activeDietary = Array.from(dietaryCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());

    const activeTab = document.querySelector('.filter-btn.active');
    const activeCategory = activeTab ? activeTab.getAttribute('data-filter') : 'all';

    foodItems.forEach(item => {
      const category = item.getAttribute('data-category') || '';
      const title = (item.querySelector('.food-card-title')?.textContent || '').toLowerCase();
      const desc = (item.querySelector('.food-card-desc')?.textContent || '').toLowerCase();
      const ingredients = (item.querySelector('.food-card-ingredients')?.textContent || '').toLowerCase();
      const itemTags = (item.getAttribute('data-dietary') || '').toLowerCase().split(' ');

      const matchesCategory = activeCategory === 'all' || category.split(' ').includes(activeCategory);
      const matchesSearch = !searchTerm || title.includes(searchTerm) || desc.includes(searchTerm) || ingredients.includes(searchTerm) || category.includes(searchTerm);
      const matchesDietary = activeDietary.length === 0 || activeDietary.every(tag => itemTags.includes(tag));

      if (matchesCategory && matchesSearch && matchesDietary) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Toggle category sections based on whether they contain visible dishes
    const categorySections = document.querySelectorAll('.menu-category-section');
    categorySections.forEach(section => {
      const visibleInSection = section.querySelectorAll('.food-item-col:not([style*="display: none"])');
      if (visibleInSection.length === 0) {
        section.style.display = 'none';
      } else {
        section.style.display = 'block';
      }
    });

    // Update results counter
    const countEl = document.getElementById('menuResultsCount');
    if (countEl) {
      const visibleCount = Array.from(foodItems).filter(item => item.style.display !== 'none').length;
      if (visibleCount === foodItems.length) {
        countEl.textContent = `Showing all ${visibleCount} authentic dishes across 5 categories`;
      } else {
        countEl.textContent = `Showing ${visibleCount} of ${foodItems.length} dishes`;
      }
    }

    checkEmptyResults();
  }

  function checkEmptyResults() {
    const noResultsEl = document.getElementById('noResultsMessage');
    if (!noResultsEl) return;

    const visibleItems = Array.from(foodItems).filter(item => item.style.display !== 'none');
    if (visibleItems.length === 0) {
      noResultsEl.style.display = 'block';
    } else {
      noResultsEl.style.display = 'none';
    }
  }

  // --- 2.5 Ensure Card Click Saves Selected Dish Info For Details Page ---
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href*="menu-item.html"]');
    if (link) {
      const card = link.closest('.food-card');
      if (card) {
        const img = card.querySelector('img')?.getAttribute('src');
        const title = card.querySelector('.food-card-title')?.textContent?.trim();
        const price = card.querySelector('.food-card-bottom-price, .food-card-price, .text-spice')?.textContent?.trim();
        const desc = card.querySelector('.food-card-desc')?.textContent?.trim();
        const href = link.getAttribute('href') || '';
        let dishId = '';
        const match = href.match(/[?&]dish=([^&#]+)/);
        if (match && match[1]) {
          dishId = decodeURIComponent(match[1]);
        }
        if (title || img) {
          const payload = JSON.stringify({
            id: dishId || (title ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : ''),
            name: title,
            price: price,
            img: img,
            desc: desc
          });
          try { sessionStorage.setItem('sg_selected_dish', payload); } catch (err) {}
          try { localStorage.setItem('sg_selected_dish', payload); } catch (err) {}
        }
      }
    }
  });

  // --- 3. Blog Category & Search Journal Filter Engine ---
  const blogSearchInput = document.getElementById('blogSearchInput');
  const sidebarBlogSearchInput = document.getElementById('sidebarBlogSearchInput');
  const blogSearchBtn = document.getElementById('blogSearchBtn');
  const sidebarBlogSearchBtn = document.getElementById('sidebarBlogSearchBtn');
  const blogSearchForm = document.getElementById('blogSearchForm');
  const sidebarBlogSearchForm = document.getElementById('sidebarBlogSearchForm');
  const blogItems = document.querySelectorAll('.blog-item-col');
  const blogCategoryLinks = document.querySelectorAll('.blog-cat-link');
  const blogNoResults = document.getElementById('blogNoResultsMessage');
  const clearBlogSearchBtn = document.getElementById('clearBlogSearchBtn');
  const blogPagination = document.querySelector('nav[aria-label="Blog pagination"]');

  if (blogItems.length > 0 || blogSearchInput || sidebarBlogSearchInput) {
    let currentBlogSearchTerm = '';

    function syncBlogInputs(term) {
      if (blogSearchInput && blogSearchInput.value !== term) {
        blogSearchInput.value = term;
      }
      if (sidebarBlogSearchInput && sidebarBlogSearchInput.value !== term) {
        sidebarBlogSearchInput.value = term;
      }
    }

    function executeBlogSearch(term) {
      currentBlogSearchTerm = (term !== undefined ? term : (blogSearchInput ? blogSearchInput.value : '')).trim();
      syncBlogInputs(currentBlogSearchTerm);
      applyCombinedBlogFilters();
    }

    function clearBlogSearchAndFilters() {
      currentBlogSearchTerm = '';
      syncBlogInputs('');

      // Reset category links to "all"
      blogCategoryLinks.forEach(link => {
        if (link.getAttribute('data-blog-cat') === 'all') {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      applyCombinedBlogFilters();
      if (blogSearchInput) {
        blogSearchInput.focus();
      }
    }

    // Bind Search Buttons
    if (blogSearchBtn) {
      blogSearchBtn.addEventListener('click', function (e) {
        e.preventDefault();
        executeBlogSearch(blogSearchInput ? blogSearchInput.value : '');
      });
    }

    if (sidebarBlogSearchBtn) {
      sidebarBlogSearchBtn.addEventListener('click', function (e) {
        e.preventDefault();
        executeBlogSearch(sidebarBlogSearchInput ? sidebarBlogSearchInput.value : '');
      });
    }

    // Bind Search Forms (prevent reload on Enter/submit)
    if (blogSearchForm) {
      blogSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        executeBlogSearch(blogSearchInput ? blogSearchInput.value : '');
      });
    }

    if (sidebarBlogSearchForm) {
      sidebarBlogSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        executeBlogSearch(sidebarBlogSearchInput ? sidebarBlogSearchInput.value : '');
      });
    }

    // Bind Enter key and live input on search inputs
    if (blogSearchInput) {
      blogSearchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeBlogSearch(this.value);
        }
      });
      blogSearchInput.addEventListener('input', function () {
        if (sidebarBlogSearchInput) {
          sidebarBlogSearchInput.value = this.value;
        }
        currentBlogSearchTerm = this.value.trim();
        applyCombinedBlogFilters();
      });
    }

    if (sidebarBlogSearchInput) {
      sidebarBlogSearchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeBlogSearch(this.value);
        }
      });
      sidebarBlogSearchInput.addEventListener('input', function () {
        if (blogSearchInput) {
          blogSearchInput.value = this.value;
        }
        currentBlogSearchTerm = this.value.trim();
        applyCombinedBlogFilters();
      });
    }

    // Bind Category Links
    blogCategoryLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetCat = this.getAttribute('data-blog-cat') || 'all';

        // Synchronize active class across category links
        blogCategoryLinks.forEach(l => {
          if (l.getAttribute('data-blog-cat') === targetCat) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });

        applyCombinedBlogFilters();
      });
    });

    // Bind Clear Search Button
    if (clearBlogSearchBtn) {
      clearBlogSearchBtn.addEventListener('click', function (e) {
        e.preventDefault();
        clearBlogSearchAndFilters();
      });
    }

    function applyCombinedBlogFilters() {
      const term = (currentBlogSearchTerm || '').toLowerCase().trim();
      const activeLink = document.querySelector('.blog-cat-link.active');
      const activeCat = activeLink ? (activeLink.getAttribute('data-blog-cat') || 'all') : 'all';

      let visibleCount = 0;
      blogItems.forEach(item => {
        const itemCat = (item.getAttribute('data-blog-cat') || '').toLowerCase();
        const title = (item.querySelector('.blog-title')?.textContent || '').toLowerCase();
        const badge = (item.querySelector('.blog-badge')?.textContent || '').toLowerCase();
        const excerpt = (
          item.querySelector('.blog-snippet')?.textContent || 
          item.querySelector('.blog-excerpt')?.textContent || 
          item.querySelector('p')?.textContent || ''
        ).toLowerCase();

        // 1. Category matching
        const matchesCat = (activeCat === 'all' || itemCat === activeCat);

        // 2. Search matching: check title, category (badge & data-attribute), and excerpt
        const matchesSearch = !term || 
          title.includes(term) || 
          badge.includes(term) || 
          itemCat.includes(term) || 
          excerpt.includes(term);

        if (matchesCat && matchesSearch) {
          item.style.display = 'block';
          item.classList.add('animate-fadeIn');
          visibleCount++;
        } else {
          item.style.display = 'none';
          item.classList.remove('animate-fadeIn');
        }
      });

      // Show / hide "No articles found" message
      if (blogNoResults) {
        if (visibleCount === 0) {
          blogNoResults.style.display = 'block';
        } else {
          blogNoResults.style.display = 'none';
        }
      }

      // Toggle pagination visibility
      if (blogPagination) {
        blogPagination.style.display = visibleCount === 0 ? 'none' : '';
      }
    }

    // Support URL search/category parameters (e.g. blog.html?search=garlic)
    const urlParams = new URLSearchParams(window.location.search);
    const initialSearch = urlParams.get('search') || urlParams.get('q');
    const initialCat = urlParams.get('cat') || urlParams.get('category');

    if (initialCat) {
      blogCategoryLinks.forEach(l => {
        if (l.getAttribute('data-blog-cat') === initialCat) {
          l.classList.add('active');
        } else {
          l.classList.remove('active');
        }
      });
    }

    if (initialSearch) {
      executeBlogSearch(initialSearch);
    }
  }
});
