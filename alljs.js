
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggleButton = document.getElementById('theme-toggle');
        const bodyElement = document.body;
    
        // Function to toggle theme
        function toggleTheme() {
            bodyElement.classList.toggle('dark-theme');
            localStorage.setItem('theme', bodyElement.classList.contains('dark-theme') ? 'dark' : 'light');
        }
    
        // Event listener for button
        themeToggleButton.addEventListener('click', toggleTheme);
    
        // Check local storage for theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            bodyElement.classList.add('dark-theme');
        }
    });
    
  
   