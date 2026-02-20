import "./styles.css";

const heroButton = document.getElementById("hero-button1");
const serviciiLink = document.getElementById("servicii-link");
const servicesSection = document.getElementById("servicii");

const serviciiPageTitle = document.getElementById("servicii-title");

if (serviciiPageTitle != null)
{
    serviciiLink?.removeAttribute("href");
    serviciiLink?.addEventListener("click", () => {
        serviciiPageTitle?.scrollIntoView({
            behavior: "smooth"
        });
    });
    
}

heroButton?.addEventListener("click", () => {
    servicesSection?.scrollIntoView({
        behavior: "smooth"
    });
});


const footerYear = document.getElementById('year'); 
if (footerYear != null)
{
    footerYear.textContent = (new Date().getFullYear()).toString();
}