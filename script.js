document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(el => observer.observe(el));

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const iconContainer = themeToggle.querySelector('.icon');

    // Icons (SVG strings)
    const sunIcon = `
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;

    const moonIcon = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    `;

    // Check for saved preference (Default is now Dark, so we check for 'light')
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        iconContainer.innerHTML = moonIcon; // Show moon to switch back to dark
        themeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
    } else {
        // Default is dark
        iconContainer.innerHTML = sunIcon; // Show sun to switch to light
        themeToggle.setAttribute('aria-label', 'Toggle Light Mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');

        // Update icon
        iconContainer.innerHTML = isLight ? moonIcon : sunIcon;
        themeToggle.setAttribute('aria-label', isLight ? 'Toggle Dark Mode' : 'Toggle Light Mode');

        // Save preference
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
});
