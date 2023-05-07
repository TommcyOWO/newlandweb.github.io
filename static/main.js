const toggleTheme = () => {
    const theme = localStorage.getItem('theme');
    const htmlClassList = document.documentElement.classList;
    const isDark = theme === 'dark';
    htmlClassList.toggle('dark', !isDark);
    htmlClassList.toggle('light', isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
};
document.getElementById('DMButton')
        .addEventListener('click', toggleTheme, { passive: true })