'use stric';

// navbar scroll y
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('scrolly');
  } else {
    navbar.classList.remove('scrolly');
  }
});

// navbar menu click
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  console.log(link);
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// contact btn

const navbarToggle = document.querySelector('.home__contact');
navbarToggle.addEventListener('click', () => scrollIntoView('#contact'));

function scrollIntoView(selector) {
  const name = document.querySelector(selector);
  name.scrollIntoView({ behavior: 'smooth' });
}
