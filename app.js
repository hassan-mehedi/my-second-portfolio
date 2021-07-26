const navbar = document.querySelector("nav");
const height_of_navbar = navbar.getBoundingClientRect();

let flag_of_menu = true;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > height_of_navbar.height && flag_of_menu) {
        navbar.style.backgroundColor = "transparent";
    }
    if (window.pageYOffset <= height_of_navbar.height && flag_of_menu) {
        navbar.style.backgroundColor = "#252525";
    }
});

const menu = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
    menu.style.display = "flex";
    open.style.display = "none";
    close.style.display = "block";
    navbar.style.backgroundColor = "#252525";
    flag_of_menu = false;
});

close.addEventListener("click", () => {
    menu.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
    navbar.style.backgroundColor = "transparent";
    flag_of_menu = true;
});
