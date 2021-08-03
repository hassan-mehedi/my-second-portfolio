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

const all_btn = document.getElementById("all_btn");
const website_btn = document.getElementById("website_btn");
const games_btn = document.getElementById("games_btn");
const canvas_btn = document.getElementById("canvas_btn");
const animation_btn = document.getElementById("animation_btn");

const all_project_box = document.querySelector(".all_project_box");
const websites_project_box = document.querySelector(".websites_project_box");
const games_project_box = document.querySelector(".games_project_box");
const canvas_project_box = document.querySelector(".canvas_project_box");
const animation_project_box = document.querySelector(".animation_project_box");

all_btn.addEventListener("click", () => {
    all_project_box.style.display = "grid";
    websites_project_box.style.display = "none";
    games_project_box.style.display = "none";
    canvas_project_box.style.display = "none";
    animation_project_box.style.display = "none";
});

website_btn.addEventListener("click", () => {
    all_project_box.style.display = "none";
    websites_project_box.style.display = "grid";
    games_project_box.style.display = "none";
    canvas_project_box.style.display = "none";
    animation_project_box.style.display = "none";
});

games_btn.addEventListener("click", () => {
    all_project_box.style.display = "none";
    websites_project_box.style.display = "none";
    games_project_box.style.display = "grid";
    canvas_project_box.style.display = "none";
    animation_project_box.style.display = "none";
});

canvas_btn.addEventListener("click", () => {
    all_project_box.style.display = "none";
    websites_project_box.style.display = "none";
    games_project_box.style.display = "none";
    canvas_project_box.style.display = "grid";
    animation_project_box.style.display = "none";
});

animation_btn.addEventListener("click", () => {
    all_project_box.style.display = "none";
    websites_project_box.style.display = "none";
    games_project_box.style.display = "none";
    canvas_project_box.style.display = "none";
    animation_project_box.style.display = "grid";
});
