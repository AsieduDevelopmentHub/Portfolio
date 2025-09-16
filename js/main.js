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

// // Initialize when DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     new ScrollButtons();
// });