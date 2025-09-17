// Animation for About Page
document.addEventListener('DOMContentLoaded', function() {

  new StatsCounter();
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


// Animated Counter Functionality
class StatsCounter {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        // Listen for scroll events
        window.addEventListener('scroll', () => this.checkScroll());
        // Initial check
        this.checkScroll();
    }

    checkScroll() {
        if (this.hasAnimated) return;

        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const sectionPosition = statsSection.getBoundingClientRect();
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition.top < screenPosition && sectionPosition.bottom > 0) {
            this.animateCounters();
            this.hasAnimated = true;
        }
    }

    animateCounters() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current > target) {
                    counter.textContent = target + '+';
                    return;
                }

                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            };

            updateCounter();
        });
    }
}

