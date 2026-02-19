import "./styles.css";

const heroButton = document.getElementById("hero-button1");
const serviciiLink = document.getElementById("servicii-link");

const servicesSection = document.getElementById("servicii");

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

const footerYear = document.getElementById('year'); 
if (footerYear != null)
{
    footerYear.textContent = (new Date().getFullYear()).toString();
}