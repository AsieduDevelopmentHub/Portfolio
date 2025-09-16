// Skills Page Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Animate skill progress bars when they come into view
  const progressBars = document.querySelectorAll('.skill-progress-bar');
  
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
      }
    });
  }, {
    threshold: 0.5
  });
  
  progressBars.forEach(bar => {
    progressObserver.observe(bar);
  });
  
  // Animate timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  timelineItems.forEach(item => {
    item.style.opacity = 0;
    if (item.classList.contains('left')) {
      item.style.transform = 'translateX(-50px)';
    } else {
      item.style.transform = 'translateX(50px)';
    }
    item.style.transition = 'all 0.5s ease-in-out';
    timelineObserver.observe(item);
  });
  
  // Animate cards on scroll
  const cards = document.querySelectorAll('.tool-card, .certification-card, .path-item');
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });
  
  cards.forEach(card => {
    cardObserver.observe(card);
  });
});