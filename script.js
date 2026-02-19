/* Basic Interactivity for FinePro */

document.addEventListener('DOMContentLoaded', () => {

    // Sticky Navbar shadow effect on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle (Placeholder for future implementation if needed)
    console.log('FinePro script loaded.');

    // Product Filtering Logic
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        const productCards = document.querySelectorAll('.shop-product-card');
        let visibleCount = 0;

        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update results text
        const resultsText = document.querySelector('.text-center');
        if (resultsText) {
            resultsText.textContent = `Showing ${visibleCount} result${visibleCount !== 1 ? 's' : ''} for "${category.charAt(0).toUpperCase() + category.slice(1)}"`;
        }
    }
});
