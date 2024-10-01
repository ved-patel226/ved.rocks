document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const skill = entry.target;
          const finalWidth = skill.getAttribute('data-width');
          
          if (skill.style.width !== finalWidth) {
            setTimeout(() => {
              skill.style.width = finalWidth;
            }, 300 * index);
          }
          observer.unobserve(skill);
        }
      });
    }, {
      threshold: 1.0
    });
    
    skills.forEach(skill => {
      observer.observe(skill);
    });
  });