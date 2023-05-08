const menu = document.querySelector('.nav__list');
const boton = document.querySelector('.box-model');
const hamburger = document.querySelector('.icon-hamburger')



boton.addEventListener('click', (e) => {

    menu.classList.toggle('nav__list--active');

    if(menu.classList.contains("nav__list--active")){
        hamburger.setAttribute('src', 'images/icon-close.svg');
    }else{
        hamburger.setAttribute('src', 'images/icon-hamburger.svg');
    }
});