import "../styles.css";
import { fadeIn, hideSection, addScrollToElement } from "./animations";


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll<HTMLElement>(".animation-fade-in");
    fadeIn(elements);
});

const heroButton = document.getElementById("hero-button1");
const lastSection = document.getElementById("smart-home-section");
const footer = document.getElementsByTagName("footer")[0];
const bottomStickyBar = document.getElementById("bottom-sticky-bar");

const homeLink = document.getElementById("home-link");
const serviciiLink = document.getElementById("servicii-link");

const homePageTitle = document.getElementById("home-title");
const serviciiPageTitle = document.getElementById("servicii-title");


const footerYear = document.getElementById('year'); 
if (footerYear != null)
{
    footerYear.textContent = (new Date().getFullYear()).toString();
}

addScrollToElement(serviciiLink, serviciiPageTitle);
addScrollToElement(homeLink, homePageTitle);
addScrollToElement(heroButton, lastSection);

hideSection(footer, bottomStickyBar);

