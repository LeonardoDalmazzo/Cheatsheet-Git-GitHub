class FloatingMenu {
    constructor() {
        this.init();
    }

    init() {
        this.render();
        this.loadTheme();
        this.bindEvents();
    }

    render() {
        const body = document.body;

        const container = document.createElement('div');
        container.className = 'fab-container';
        container.id = 'fab-container';

        // Main Toggle Button (Plus icon)
        const mainBtn = document.createElement('button');
        mainBtn.className = 'fab-main';
        mainBtn.id = 'fab-main';
        mainBtn.innerHTML = '+'; // Simple text icon, could be SVG
        mainBtn.title = "Options";

        // Theme Toggle Option
        const themeBtn = document.createElement('button');
        themeBtn.className = 'fab-option';
        themeBtn.id = 'theme-toggle';
        themeBtn.innerHTML = '🌓';
        themeBtn.title = "Toggle Dark/Light Mode";

        // Scroll Top Option
        const topBtn = document.createElement('button');
        topBtn.className = 'fab-option';
        topBtn.id = 'scroll-top';
        topBtn.innerHTML = '↑';
        topBtn.title = "Scroll to Top";

        // Append in reverse order because flex-direction is column-reverse
        container.appendChild(mainBtn);
        container.appendChild(themeBtn); // Shows above main
        container.appendChild(topBtn);   // Shows above theme

        body.appendChild(container);
    }

    bindEvents() {
        const container = document.getElementById('fab-container');
        const mainBtn = document.getElementById('fab-main');
        const themeBtn = document.getElementById('theme-toggle');
        const topBtn = document.getElementById('scroll-top');

        // Toggle Menu
        mainBtn.addEventListener('click', () => {
            container.classList.toggle('active');
            mainBtn.classList.toggle('open');
            // Change icon logic if desired (e.g., to X) handled by CSS rotation
        });

        // Theme Toggle
        themeBtn.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Scroll Top
        topBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            // Close menu after action
            container.classList.remove('active');
            mainBtn.classList.remove('open');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                container.classList.remove('active');
                mainBtn.classList.remove('open');
            }
        });
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            // Default to light or detect system preference
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
}
