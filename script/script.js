/* =================================
   MOBILE NAVIGATION
================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =================================
   CLOSE MOBILE MENU
================================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =================================
   ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =================================
   CURRENT YEAR
================================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =================================
   SCROLL REVEAL
================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .detail-card, .organization-card, .timeline-item"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});


/* =================================
   ADD REVEAL STYLES
================================= */

const style = document.createElement("style");

style.textContent = `

    .hidden {
        opacity: 0;
        transform: translateY(25px);
    }

    .reveal {
        opacity: 1;
        transform: translateY(0);
        transition:
            opacity 0.7s ease,
            transform 0.7s ease;
    }

`;

document.head.appendChild(style);
