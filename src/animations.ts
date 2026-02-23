export function fadeIn(elements: NodeList) : void
{
    const options = {
        root: null,
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) =>
    {
        entries.forEach(entry => {
            if(entry.isIntersecting)
            {
                entry.target.classList.remove("opacity-0", "translate-y-12");
                entry.target.classList.add("opacity-100", "translate-y-0");
                if(!(entry.target instanceof HTMLButtonElement))
                {
                    observer.unobserve(entry.target);
                }
            }

            if(!entry.isIntersecting )
            {
                entry.target.classList.remove("opacity-100", "translate-y-0");
                entry.target.classList.add("opacity-0", "translate-y-12");
            }
        });
    }, options);

    elements.forEach(element => observer.observe(element as HTMLElement));
}

// Needs refactoring maybe
export function hideSection(conditionElem : HTMLElement | null, elemToHide : HTMLElement | null) : void
{
    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => 
    {
        entries.forEach(entry => {
            if (entry.isIntersecting)
            {
                if (elemToHide != null) 
                {
                    elemToHide.classList.replace("grid", "hidden");
                }
            }

            if (!entry.isIntersecting && window.innerWidth <= 1024)
            {
                if (elemToHide != null) elemToHide.classList.replace("hidden", "grid");
            }
        });
    }, options);

    observer.observe(conditionElem as Element);
}