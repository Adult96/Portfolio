'use stric';

// navbar fixed scroll y
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('scrolly');
    arrowUp.classList.add('up__to__home');
  } else {
    navbar.classList.remove('scrolly');
    arrowUp.classList.remove('up__to__home');
  }
});

// navbar menu click
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

const navbarItem = document.querySelectorAll('.navber__menu__item');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  navbarItem.forEach((key, value) => {
    key.classList.remove('active');
  });
  target.classList.add('active');
});

// contact btn click

const navbarToggle = document.querySelector('.home__contact');
navbarToggle.addEventListener('click', () => scrollIntoView('#contact'));

// Home fade out
const home = document.querySelector('.home__fade-out');
const homeSize = home.getBoundingClientRect();

document.addEventListener('scroll', () => {
  const fadeOutPos = 1 - window.scrollY / homeSize.height;
  home.style.opacity = fadeOutPos;
});

// up home btn

const arrowUp = document.querySelector('#arrow__up');

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Function

function scrollIntoView(selector) {
  const name = document.querySelector(selector);
  name.scrollIntoView({ behavior: 'smooth' });
}
