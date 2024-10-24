window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.page-hero-header__nav'),
    menuItem = document.querySelectorAll('.header-nav__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('page-hero-header__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('page-hero-header__nav_active');
        })
    })
})