import "./styles.css";
import { fadeIn } from "./animations";


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll<HTMLElement>(".animation-fade-in");
    fadeIn(elements);
});

const heroButton = document.getElementById("hero-button1");
const servicesSection = document.getElementById("servicii");

const homeLink = document.getElementById("home-link");
const serviciiLink = document.getElementById("servicii-link");

const homePageTitle = document.getElementById("home-title");
const serviciiPageTitle = document.getElementById("servicii-title");

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
addScrollToElement(heroButton, servicesSection);

const footerYear = document.getElementById('year'); 
if (footerYear != null)
{
    footerYear.textContent = (new Date().getFullYear()).toString();
}