import "./styles.css";
import { fadeIn, hideSection } from "./animations";


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll<HTMLElement>(".animation-fade-in");
    fadeIn(elements);
});

const heroButton = document.getElementById("hero-button1");
// const servicesSection = document.getElementById("servicii");
const lastSection = document.getElementById("last-section");
const bottomStickyBar = document.getElementById("bottom-sticky-bar");

const homeLink = document.getElementById("home-link");
const serviciiLink = document.getElementById("servicii-link");

const homePageTitle = document.getElementById("home-title");
const serviciiPageTitle = document.getElementById("servicii-title");

const contactLink = document.getElementById("contact");
const contactFooter = document.getElementById("contact-footer");

function addScrollToElement(link : HTMLElement | null, element : HTMLElement | null)
{
    if (element != null)
    {
        if (link?.hasAttribute("href")) link?.removeAttribute("href");

        link?.addEventListener("click", () => {
            element?.scrollIntoView({
                behavior: "smooth"
            });
        })
    }
}

addScrollToElement(serviciiLink, serviciiPageTitle);
addScrollToElement(homeLink, homePageTitle);
// addScrollToElement(heroButton, servicesSection);
addScrollToElement(heroButton, lastSection);
addScrollToElement(contactLink, contactFooter);

hideSection(contactFooter, bottomStickyBar);

const footerYear = document.getElementById('year'); 
if (footerYear != null)
{
    footerYear.textContent = (new Date().getFullYear()).toString();
}