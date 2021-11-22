const navItems = document.querySelectorAll('.header__nav ul li a');


//nav click handle 

navItems.forEach((item, index) => {
    item.addEventListener("click", function() {
        const navItemIsActive = document.querySelector('.header__nav ul li a.active');
        navItemIsActive.classList.remove("active");
        this.classList.add("active")
    });

})