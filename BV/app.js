const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

}

navSlide();

const carouselslide = document.querySelector('.carouselslide');
const carouselimages = document.querySelector('.carouselslide img');

const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');

let counter = 1;
const size = carouselimages.clientWidth;

carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextbtn.addEventListener('click' , () => {
    carouselslide.style.transform = "transform 0.4s ease-in-out";
    counter++;
    carouselslide.style.transform= 'translateX(' + (-size * counter) + 'px)';
});

prevbtn.addEventListener('click' , () => {
    carouselslide.style.transform = "transform 0.4s ease-in-out";
    counter--;
    carouselslide.style.transform= 'translateX(' + (-size * counter) + 'px)';
});

 
carouselslide.addEventListener("transitionend",   () => {
    if (carouselimages[counter].id === 'lastclone'){
        carouselslide.style.transition = "none";
        counter = carouselimages.images -2;
        carouselslide.style.transform ='translateX(' + (-size * counter) + 'px)';
    }
    if (carouselimages[counter].id === 'firstclone'){
        carouselslide.style.transition = "none";
        counter = carouselimages.images - 2;
        carouselslide.style.transform ='translateX(' + (-size * counter) + 'px)';
    }
});


