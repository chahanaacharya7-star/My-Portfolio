document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main, section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= (sectionTop - 250)) {
        current = section.getAttribute('id');
      }
    });

    // If reached the bottom of the page, force the last section to be active
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      if (sections.length > 0) {
        current = sections[sections.length - 1].getAttribute('id');
      }
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      // Adding a check to ensure we only target the actual links, and avoid null values
      if (current && href && href.includes(current)) {
        link.classList.add('active');
      }
    });
  });
});
