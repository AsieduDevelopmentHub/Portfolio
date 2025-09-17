// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
  // Initialize header and footer components
  if (typeof initComponents === 'function') {
    initComponents();
  }
  
  // Initialize page-specific functionality
  initPageSpecificFunctions();
  new ScrollButtons();
});

// Page-specific functionality
function initPageSpecificFunctions() {
  // Add any page-specific JavaScript here
  console.log('Page loaded:', window.location.pathname);
}

// Scroll to Top/Bottom functionality
class ScrollButtons {
    constructor() {
        this.scrollToTopBtn = document.getElementById('scrollToTop');
        this.scrollToBottomBtn = document.getElementById('scrollToBottom');
        this.init();
    }

    init() {
        // Add event listeners
        this.scrollToTopBtn.addEventListener('click', () => this.scrollToTop());
        this.scrollToBottomBtn.addEventListener('click', () => this.scrollToBottom());

        // Show/hide buttons based on scroll position
        window.addEventListener('scroll', () => this.toggleButtons());
        
        // Initial check
        this.toggleButtons();
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    toggleButtons() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        // Show scroll-to-top button when scrolled down 200px
        if (scrollPosition > 200) {
            this.scrollToTopBtn.classList.add('visible');
        } else {
            this.scrollToTopBtn.classList.remove('visible');
        }

        // Show scroll-to-bottom button when not at the bottom
        if (scrollPosition + windowHeight < documentHeight - 100) {
            this.scrollToBottomBtn.classList.add('visible');
        } else {
            this.scrollToBottomBtn.classList.remove('visible');
        }
    }
}

// Initialize menu functionality
function initMenuFunctionality() {
  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav ul');
  const menuIcon = document.querySelector('.menu-btn i');
  
  if (menuBtn && nav && menuIcon) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event from bubbling to document
      
      // Toggle menu visibility with animation
      nav.classList.toggle('show');
      
      // Toggle icon between bars and times (close)
      if (nav.classList.contains('show')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
      } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on nav links (mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          nav.classList.remove('show');
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
          document.body.style.overflow = '';
        }
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('show') && 
          !nav.contains(e.target) && 
          !menuBtn.contains(e.target)) {
        nav.classList.remove('show');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('show')) {
        nav.classList.remove('show');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Set active page in navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage) {
      link.classList.add('active');
    }
  });
}