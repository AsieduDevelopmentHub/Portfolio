// Animation for page elements
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe elements for animation
  document.querySelectorAll('.skill-item, .project-card').forEach(item => {
    observer.observe(item);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initAnimations();
});