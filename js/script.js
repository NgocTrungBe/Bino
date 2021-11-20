const header = document.querySelector("#header");
const menu = document.querySelector("#menu");
const nav = document.querySelector(".header-top__menu");


window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});

menu.addEventListener("click", function() {
    this.classList.toggle("fa-times");
    nav.classList.toggle("menu-toggle");
})

const banner = document.querySelector(".banner");
const banner__single_item = document.querySelectorAll(".banner__single-item img");
console.log(banner__single_item[0].clientWidth)