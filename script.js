window.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.querySelector('#theme-toggle');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.toggle('dark-theme', currentTheme === 'dark');
        themeToggleButton.checked = currentTheme === 'dark';
    }

    themeToggleButton.addEventListener('change', function() {
        let theme = 'light';

        if (this.checked) {
            theme = 'dark';
        }

        document.body.classList.toggle('dark-theme', theme === 'dark');
        localStorage.setItem('theme', theme);
    });
});