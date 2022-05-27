const menuLinks = document.querySelectorAll('. menu-top a[href^="#"]')
console.log(linksInternos);

function scrollSuave(event){
    event.preventDefault(); 
    const href = event.currentTarget.getAttribute('href'); 
    const section = document.querySelector(href); 

    section.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',
    });
    console.log(href);
    console.log(section);
}


linksInternos.forEach((item) => {
    item.addEventListener('click', scrollSuave);
});