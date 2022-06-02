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

// const navbarItem = document.querySelectorAll('.navber__menu__item');
// navbarMenu.addEventListener('click', (event) => {
//   const target = event.target;

//   if (target.className === 'navbar__menu') {
//     return;
//   }
//   navbarItem.forEach((key) => {
//     key.classList.remove('active');
//   });
//   target.classList.add('active');
// });

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

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

// fillter project
workBtnContainer.addEventListener('click', (e) => {
  const fillter = e.target.dataset.fillter;

  projectContainer.classList.add('animation__out');

  // Remove click selected
  const selected = document.querySelector('.category__btn.selected');
  selected.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  setTimeout(() => {
    projects.forEach((project) => {
      if (fillter === 'all' || fillter === project.dataset.type) {
        project.classList.remove('hiddenProject');
      } else {
        project.classList.add('hiddenProject');
      }
    });

    projectContainer.classList.remove('animation__out');
  }, 300);
});

// Function

function scrollIntoView(selector) {
  const name = document.querySelector(selector);
  name.scrollIntoView({ behavior: 'smooth' });
}
