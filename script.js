document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    function activateLink() {
        let len = sections.length;
        while (--len && window.scrollY + 50 < sections[len].offsetTop) {}
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[len].classList.add('active');
    }

    activateLink();
    window.addEventListener('scroll', activateLink);
});
