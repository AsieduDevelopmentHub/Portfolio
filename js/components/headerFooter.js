// Dynamic Header Component
function createHeader() {
  return `
    <header>
      <div class="logo">
        <img src="assets/images/logo.png" alt="logo">        
        <span>Asiedu Dev. Hub</span>
      </div>
      <nav>
        <ul>
          <li><a href="index.html" data-page="index">Home</a></li>
          <li><a href="about.html" data-page="about">About</a></li>
          <li><a href="projects.html" data-page="projects">Projects</a></li>
          <li><a href="skills.html" data-page="skills">Skills</a></li>
          <li><a href="services.html" data-page="services">Services</a></li>
          <li><a href="contact.html" data-page="contact">Contact</a></li>
        </ul>
        <div class="menu-btn">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  `;
}

// Dynamic Footer Component
function createFooter() {
  return `
    <footer>
      <div class="footer-content">
        <div class="footer-about">
          <div class="footer-logo">Asiedu Development Hub</div>
          <p>Creating innovative solutions that connect the physical and digital worlds through web development and embedded systems.</p>
          <div class="social-links">
            <a href="https://github.com/AsieduDevelopmentHub" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://bitly.cx/SCZZT" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://youtube.com/@asiedudev-hub" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-links">
          <h3>Services</h3>
          <ul>
              <li><a href="services.html#web-development">Web Development</a></li>
              <li><a href="services.html#iot-solutions">IoT Solutions</a></li>
              <li><a href="services.html#embedded-systems">Embedded Systems</a></li>
              <li><a href="services.html#consultation">Consultation</a></li>
              <li><a href="services.html#project-guidance">Project Guidance</a></li>
          </ul>
        </div>
        
        <div class="footer-links">
          <h3>Contact Info</h3>
          <ul>
            <li><i class="fas fa-envelope"></i> asiedudev.hub@gmail.com</li>
            <li><i class="fas fa-phone"></i> +233 555 257 482</li>
            <li><i class="fas fa-map-marker-alt"></i> Ghana</li>
          </ul>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; 2025 Asiedu Development Hub. All rights reserved.</p>
      </div>
    </footer>
    <!-- Scroll to Top/Bottom Buttons -->
    <div class="scroll-buttons">
        <button id="scrollToTop" class="scroll-btn" title="Scroll to Top">
            <i class="fas fa-chevron-up"></i>
        </button>
        <button id="scrollToBottom" class="scroll-btn" title="Scroll to Bottom">
            <i class="fas fa-chevron-down"></i>
        </button>
    </div>
  `;
}

// Function to initialize header and footer
function initComponents() {
  // Add header to page
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = createHeader();
  }
  
  // Add footer to page
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
  }
  
  // Initialize mobile menu and active page highlighting
  initMenuFunctionality();
}

// Initialize menu functionality
// // Initialize menu functionality
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

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createHeader, createFooter, initComponents };
}