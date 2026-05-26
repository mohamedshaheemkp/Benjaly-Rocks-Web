/* ==========================================================================
   BENJALY ROCKS INTERACTIVE SCRIPTS
   --------------------------------------------------------------------------
   Handles sticky navigation, mobile overlay toggle, active section tracking,
   dynamic product filtering, scroll entrance animation, and WhatsApp lead form.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. STICKY HEADER & ACTIVE NAV SCROLL-SPY --- */
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  const handleActiveSectionHighlight = () => {
    let currentActiveId = '';
    const scrollPosition = window.scrollY + 160; // offset for nav height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentActiveId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const targetHref = link.getAttribute('href');
      if (targetHref === `#${currentActiveId}`) {
        link.classList.add('active');
      }
    });
  };

  const heroContent = document.querySelector('.hero-content');
  const handleHeroParallax = () => {
    const scrollVal = window.scrollY;
    if (scrollVal < window.innerHeight && heroContent) {
      heroContent.style.transform = `translateY(${scrollVal * 0.12}px)`;
      heroContent.style.opacity = `${1 - scrollVal * 0.0015}`;
    }
  };

  window.addEventListener('scroll', () => {
    handleHeaderScroll();
    handleActiveSectionHighlight();
    handleHeroParallax();
  });

  // Run once on load
  handleHeaderScroll();
  handleActiveSectionHighlight();
  handleHeroParallax();


  /* --- 2. MOBILE INTERACTIVE NAVIGATION NAVIGATION --- */
  const mobileToggleBtn = document.getElementById('mobile-nav-toggle-btn');
  const navigationMenu = document.getElementById('navigation-menu-element');

  const toggleMobileMenu = () => {
    mobileToggleBtn.classList.toggle('active');
    navigationMenu.classList.toggle('active');
    
    // Prevent document body scrolling when menu is active
    if (navigationMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    mobileToggleBtn.classList.remove('active');
    navigationMenu.classList.remove('active');
    document.body.style.overflow = '';
  };

  mobileToggleBtn.addEventListener('click', toggleMobileMenu);

  // Close mobile menu when links are clicked
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });


  /* --- 3. DYNAMIC CATALOGUE FILTERING --- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.catalogue-card');

  const filterCatalogue = (filterValue) => {
    productCards.forEach(card => {
      const categories = card.getAttribute('data-category');
      
      if (filterValue === 'all' || categories.includes(filterValue)) {
        card.classList.remove('hide');
        card.classList.add('show');
      } else {
        card.classList.remove('show');
        card.classList.add('hide');
      }
    });
  };

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button active states
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedFilter = btn.getAttribute('data-filter');
      filterCatalogue(selectedFilter);
    });
  });


  /* --- 4. INTEGRATED PRODUCT CATEGORY LINKS --- */
  // Links inside "Product Categories" cards automatically trigger the Catalogue filter
  const categoryLinks = document.querySelectorAll('.category-card-link');

  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const filterToSelect = link.getAttribute('data-filter');
      const targetFilterBtn = document.querySelector(`.filter-btn[data-filter="${filterToSelect}"]`);

      if (targetFilterBtn) {
        // Deactivate all, activate the target tag button
        filterButtons.forEach(b => b.classList.remove('active'));
        targetFilterBtn.classList.add('active');

        // Apply product filter
        filterCatalogue(filterToSelect);
      }
    });
  });


  /* --- 5. INTERSECTION OBSERVER ENTRANCE REVEAL --- */
  const revealElements = document.querySelectorAll('.animate-scroll-reveal');

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, no need to monitor it again
        observer.unobserve(entry.target);
      }
    });
  };

  const revealOptions = {
    root: null, // viewport
    threshold: 0.15, // trigger when 15% visible
    rootMargin: '0px 0px -50px 0px' // slightly negative margin to ensure pleasant visual timing
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* --- 6. INTERACTIVE WHATSAPP INQUIRY FORMS --- */
  const businessNumber = '919946452005'; // Real Benjaly Rocks number
  const enquiryForm = document.getElementById('whatsapp-enquiry-form');

  // Submit Handler: Core Enquiry Form
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve sanitized values
      const name = document.getElementById('input-name').value.trim();
      const productCat = document.getElementById('select-product-cat').value;
      const siteLocation = document.getElementById('input-site-location').value.trim();
      const details = document.getElementById('input-details').value.trim();

      // Pre-formatted Whatsapp message template
      let message = `*Benjaly Rocks - Website Quote Request*\n\n`;
      message += `• *Name:* ${name}\n`;
      message += `• *Product Interest:* ${productCat}\n`;
      message += `• *Delivery Location:* ${siteLocation}\n`;
      
      if (details) {
        message += `• *Requirement Details:* ${details}\n`;
      } else {
        message += `• *Requirement Details:* Pricing & Catalogue request.\n`;
      }

      message += `\n_Generated from Benjaly Rocks Showroom Website._`;

      // Construct and open WhatsApp direct URL
      const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // Inline "Enquire" buttons inside individual product cards
  const inlineEnquireBtns = document.querySelectorAll('.btn-inline-enquiry');

  inlineEnquireBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent card actions
      const productName = btn.getAttribute('data-product');

      // Pre-format quick product inquiry template
      let message = `Hi *Benjaly Rocks*,\n\n`;
      message += `I am viewing your website showroom and would like to make an enquiry regarding:\n`;
      message += `• *Product:* ${productName}\n\n`;
      message += `Please provide me details on pricing, delivery timelines, and availability. Thank you!`;

      // Open WhatsApp direct URL
      const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  });

  /* --- 7. INTERACTIVE BEFORE/AFTER SLIDER COMPARISON --- */
  const rangeSlider = document.getElementById('ba-range-slider-input-1');
  const beforeImage = document.querySelector('.before-image');
  const handleLine = document.getElementById('ba-handle-line-1');

  if (rangeSlider && beforeImage && handleLine) {
    const updateBAComparison = () => {
      const sliderVal = rangeSlider.value;
      // Set the CSS Custom Property on beforeImage to crop it
      beforeImage.style.setProperty('--clip-percent', `${sliderVal}%`);
      // Update the left position of the vertical brass handle line
      handleLine.style.left = `${sliderVal}%`;
    };

    // Attach drag and slide event listeners for real-time responsiveness
    rangeSlider.addEventListener('input', updateBAComparison);
    rangeSlider.addEventListener('change', updateBAComparison);

    // Run once on load to initialize layout at 50% split
    updateBAComparison();
  }

});
