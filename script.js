const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }


});

const menuLinks = document.querySelectorAll(".nav-link");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuButton.textContent = "☰";
    });
});

const contactForm = document.querySelector("#contactForm");
const successMessage = document.querySelector("#successMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.textContent = "Message sent successfully!";
    successMessage.style.display = "block";

    setTimeout(function () {
        successMessage.style.display = "none";
    }, 3000);
});

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});