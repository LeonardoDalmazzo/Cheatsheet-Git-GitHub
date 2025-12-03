/**
 * Class to handle Category Filtering
 * Responsável por filtrar os cards na home page
 */
class FilterManager {
    constructor() {
        this.filters = document.querySelectorAll('.cat-card');
        this.items = document.querySelectorAll('.card[data-category]');
        this.init();
    }

    init() {
        this.filters.forEach(filter => {
            filter.addEventListener('click', () => {
                // 1. Remove a classe 'active' de todos os botões
                this.filters.forEach(f => f.classList.remove('active'));
                
                // 2. Adiciona 'active' apenas no clicado
                filter.classList.add('active');

                // 3. Pega a categoria selecionada e filtra
                const selectedCategory = filter.getAttribute('data-filter');
                this.filterItems(selectedCategory);
            });
        });
    }

    filterItems(categoryToFilter) {
        this.items.forEach(item => {
            // Pega o valor do atributo, ex: "dev, favoritos"
            const itemCategoriesString = item.getAttribute('data-category');
            
            // Transforma em array e limpa espaços: ["dev", "favoritos"]
            const itemCategories = itemCategoriesString.split(',').map(c => c.trim());
            
            // Lógica de verificação:
            // 1. Se o filtro for 'all', mostra tudo.
            // 2. Se a lista de categorias do card INCLUIR a categoria clicada, mostra.
            if (categoryToFilter === 'all' || itemCategories.includes(categoryToFilter)) {
                item.classList.remove('hidden');
                
                // Pequena animação
                item.style.opacity = '0';
                setTimeout(() => item.style.opacity = '1', 50);
            } else {
                item.classList.add('hidden');
            }
        });
    }
}