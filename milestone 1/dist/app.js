// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Scroll event listener
    window.addEventListener("scroll", function () {
        var navbar = document.querySelector('.navbar');
        var scrollUpBtn = document.querySelector('.scroll-up-btn');
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        }
        else {
            navbar.classList.remove("sticky");
        }
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        }
        else {
            scrollUpBtn.classList.remove("show");
        }
    });
    // Scroll-up button click listener
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    scrollUpBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'auto' });
    });
    // Menu item click listener for smooth scroll behavior
    var menuLinks = document.querySelectorAll('.navbar .menu li a');
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });
    // Menu button click listener for toggling classes
    var menuBtn = document.querySelector('.menu-btn');
    var menu = document.querySelector('.navbar .menu');
    var menuBtnIcon = document.querySelector('.menu-btn ');
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuBtnIcon.classList.toggle("active");
    });
    // Typed.js initialization for typing effect
    new Typed(".typing", {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    new Typed(".typing-2", {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // OwlCarousel initialization (Vanilla JS version)
    var carouselElements = document.querySelectorAll('.carousel .item');
    var currentIndex = 0;
    var itemsPerPage = function () {
        if (window.innerWidth >= 1000)
            return 3;
        if (window.innerWidth >= 600)
            return 2;
        return 1;
    };
    var showItems = function (startIndex) {
        carouselElements.forEach(function (item, index) {
            item.style.display = (index >= startIndex && index < startIndex + itemsPerPage()) ? 'block' : 'none';
        });
    };
    showItems(currentIndex);
    // Autoplay
    setInterval(function () {
        currentIndex = (currentIndex + 1) % carouselElements.length;
        showItems(currentIndex);
    }, 2000);
    // Pause on hover
    var carouselContainer = document.querySelector('.carousel');
    carouselContainer.addEventListener('mouseover', function () {
        clearInterval();
    });
    carouselContainer.addEventListener('mouseout', function () {
        setInterval(function () {
            currentIndex = (currentIndex + 1) % carouselElements.length;
            showItems(currentIndex);
        }, 2000);
    });
});
