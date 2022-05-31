'use stric';
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('scrolly');
  } else {
    navbar.classList.remove('scrolly');
  }
});

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  console.log(link);
  if (link == null) {
    return;
  }
  const scrollto = document.querySelector(link);
  scrollto.scrollIntoView({ behavior: 'smooth' });
});
