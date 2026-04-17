document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Function to set theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            htmlElement.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        // Save to localStorage
        localStorage.setItem('selected-theme', theme);
    };

    // Initialize theme from localStorage or default to dark (since original image is dark)
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to dark mode based on the design provided
        setTheme('dark');
    }

    // Toggle button click event
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });
});
