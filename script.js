const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuLinks = document.querySelectorAll(".menu");

// Open and close the menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        menuToggle.setAttribute("aria-label", "Close navigation menu");

    } else {

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

    }

});

// Close the menu after clicking a link
menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

        // Added to keep accessibility attributes in sync
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryLinks = document.querySelectorAll(".gallery-link");
const closeBtn = document.querySelector(".close");

galleryLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        lightbox.style.display = "flex";
        lightboxImg.src = this.href;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }
    });

    menuLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const topBtn = document.getElementById("topBtn");

// Show button after scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

// Scroll to top
topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(function (element) {
    observer.observe(element);
});

document.addEventListener("click", function (event) {

    if (
        !menuToggle.contains(event.target) &&
        !navMenu.contains(event.target)
    ) {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

      menuToggle.setAttribute("aria-label", "Open navigation menu");

    }

});

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    preloader.classList.add("hide");

    setTimeout(function () {
        preloader.remove();
    },600);

});

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});