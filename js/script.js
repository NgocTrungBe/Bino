//nav click handle 
const navItems = document.querySelectorAll('.header__nav ul li a');
navItems.forEach((item, index) => {
    item.addEventListener("click", function() {
        const navItemIsActive = document.querySelector('.header__nav ul li a.active');
        navItemIsActive.classList.remove("active");
        this.classList.add("active");
    });

});
//mobile menu handle
const menu_icon = document.querySelector('#menu-icon');
const nav = document.querySelector('.header__nav');


menu_icon.addEventListener('click', function() {
    menu_icon.classList.toggle('fa-times');
    nav.classList.toggle('menu-toggle');
});

const header = document.querySelector(".header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});