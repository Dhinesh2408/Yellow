document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    function activateLink() {
        let len = sections.length;
        // Check if sections exist
        if (len === 0) return;

        // Find the active section index
        while (--len && window.scrollY + 50 < sections[len].offsetTop) {}

        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Ensure len is within bounds
        if (len >= 0 && len < navLinks.length) {
            navLinks[len].classList.add('active');
        }
    }

    activateLink();
    window.addEventListener('scroll', activateLink);
});

document.getElementById("hamburger").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  });
  
  const checkbox = document.querySelector('.input');
  const themeStylesheet = document.getElementById('themeStylesheet');
  
  checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
          themeStylesheet.setAttribute('href', 'dark-theme.css'); // Path to your dark theme CSS
      } else {
          themeStylesheet.setAttribute('href', 'light-theme.css'); // Path to your light theme CSS
      }
  });
  