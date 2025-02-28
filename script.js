// JavaScript para controlar el comportamiento del menú
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-buttom');
    const mainNav = document.querySelector('.main-nav');

    menuButton.addEventListener('click', function () {
        menuButton.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace del menú
    const navLinks = document.querySelectorAll('.main-nav');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuButton.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
});




