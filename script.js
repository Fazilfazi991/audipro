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
});
