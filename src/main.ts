import "./styles.css";

let heroButton = document.getElementById("hero-button1");
let serviciiLink = document.getElementById("servicii-link");

let servicesSection = document.getElementById("servicii");

heroButton?.addEventListener("click", () => {
    servicesSection?.scrollIntoView({
        behavior: "smooth"
    });
});

serviciiLink?.addEventListener("click", () => {
    servicesSection?.scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById('year')!.textContent = (new Date().getFullYear()).toString();