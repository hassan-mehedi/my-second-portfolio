const navbar = document.querySelector("nav");
const height_of_navbar = navbar.getBoundingClientRect();
console.log(window.pageYOffset, height_of_navbar.height);

window.addEventListener("scroll", () => {
    if (window.pageYOffset > height_of_navbar.height) {
        navbar.style.backgroundColor = "transparent";
    }
    if (window.pageYOffset <= height_of_navbar.height) {
        navbar.style.backgroundColor = "#252525";
    }
});
