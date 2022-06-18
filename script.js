/*Variables*/
const iconMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

/*Funciones*/
const desplegarMenu = () => {

    mobileMenu.style.display = 'block';
    iconMenu.style.opacity = '50%';
    iconMenu.style.transform = 'rotate(90deg)';
    
};

const replegarMenu = () => {

    mobileMenu.style.display = 'none';
    iconMenu.style.opacity = '100%';
    iconMenu.style.transform = 'rotate(0deg)';

};

const displayIconMenu = (e) => {

    e.preventDefault();

    if ( mobileMenu.style.display === 'block' )
    {
        replegarMenu();
    }
    else
    {
        desplegarMenu();
    }
    
};

const defaultPage = (e) => {

    e.preventDefault();

    if ( window.innerWidth >= 1024 )
    {
        replegarMenu();
    }

};

/*Eventos*/
iconMenu.addEventListener('click', displayIconMenu);

window.addEventListener("resize", defaultPage);

/*Funcion externa*/
//funcion que permite un scroll suavizado entre secciones
const links = document.querySelectorAll('a');

links.forEach((link) => {

    link.addEventListener('click', (e) => {
        
        const target = e.currentTarget.getAttribute('href');

        e.preventDefault();
        replegarMenu();
        document.querySelector(target).scrollIntoView(
        {
            behavior: 'smooth'
        });

    });

}); 
/*Fuente: https://www.kodetop.com/efecto-smooth-scroll-con-css-o-javascript/  */