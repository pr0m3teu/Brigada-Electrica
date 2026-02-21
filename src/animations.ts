export function fadeIn(elements: NodeList) : void
{
    const options = {
        root: null,
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) =>
    {
        entries.forEach(entry => {
            if(entry.isIntersecting)
            {
                entry.target.classList.remove("opacity-0", "translate-y-8");
                entry.target.classList.add("opacity-100", "translate-y-0");
            }

            if(!entry.isIntersecting)
            {
                entry.target.classList.remove("opacity-100", "translate-y-0");
                entry.target.classList.add("opacity-0", "translate-y-8");
            }
        });
    }, options);

    elements.forEach(element => observer.observe(element as HTMLElement));
}