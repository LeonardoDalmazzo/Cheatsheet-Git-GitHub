class App {
    constructor() {
        this.navbar = new Navbar();
        this.floatingMenu = new FloatingMenu();
        
        // Só inicia o filtro se existir a grade de categorias (home page)
        if (document.querySelector('.category-grid')) {
            this.filterManager = new FilterManager();
            console.log('Filter Manager Initialized');
        }

        console.log('App Initialized');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});