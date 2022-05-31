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

document.addEventListener('click', (y) => {
  const navbarHeight = navbar.getBoundingClientRect();
});
