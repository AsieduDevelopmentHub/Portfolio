// Animation for About Page
document.addEventListener('DOMContentLoaded', function() {
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
  
  // Animate skill categories
  const skillCategories = document.querySelectorAll('.skill-category');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });
  
  skillCategories.forEach(category => {
    skillObserver.observe(category);
  });

  // Animation for project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });
  
  projectCards.forEach(card => {
    projectObserver.observe(card);
  });
});
