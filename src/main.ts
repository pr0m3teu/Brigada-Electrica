import "./styles.css";

let button = document.getElementById("hero-button1");
let servicesSection = document.getElementById("servicii");

button?.addEventListener("click", () => {
    servicesSection?.scrollIntoView({
        behavior: "smooth"
    });
});