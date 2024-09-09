// Import Typed.js
import Typed from 'typed.js';

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Scroll event listener
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector('.navbar') as HTMLElement;
        const scrollUpBtn = document.querySelector('.scroll-up-btn') as HTMLElement;

        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    // Scroll-up button click listener
    const scrollUpBtn = document.querySelector('.scroll-up-btn') as HTMLElement;
    scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    });

    // Menu item click listener for smooth scroll behavior
    const menuLinks = document.querySelectorAll('.navbar .menu li a');
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // Menu button click listener for toggling classes
    const menuBtn = document.querySelector('.menu-btn') as HTMLElement;
    const menu = document.querySelector('.navbar .menu') as HTMLElement;
    const menuBtnIcon = document.querySelector('.menu-btn i') as HTMLElement;

    menuBtn.addEventListener("click", () => {
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
    const carouselElements = document.querySelectorAll('.carousel .item') as NodeListOf<HTMLElement>;
    let currentIndex = 0;
    const itemsPerPage = () => {
        if (window.innerWidth >= 1000) return 3;
        if (window.innerWidth >= 600) return 2;
        return 1;
    };
    const showItems = (startIndex: number) => {
        carouselElements.forEach((item, index) => {
            item.style.display = (index >= startIndex && index < startIndex + itemsPerPage()) ? 'block' : 'none';
        });
    };
    showItems(currentIndex);

    // Autoplay with interval tracking
    let intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselElements.length;
        showItems(currentIndex);
    }, 2000);

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel') as HTMLElement;
    carouselContainer.addEventListener('mouseover', () => {
        clearInterval(intervalId);
    });
    carouselContainer.addEventListener('mouseout', () => {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselElements.length;
            showItems(currentIndex);
        }, 2000);
    });
});
