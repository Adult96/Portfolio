'use stric';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // navbar fixed scroll y
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

  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// toggle btn click
const navbarMenu_ul_tag = document.querySelector('.navbar__menu ul');

const navbarToggleMenu = document.querySelector('.navbar__toggle-btn');
navbarToggleMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// contact btn click

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => scrollIntoView('#contact'));

// Home fade out
const home = document.querySelector('.home__fade-out');
const homeSize = home.getBoundingClientRect();

document.addEventListener('scroll', () => {
  const fadeOutPos = 1 - window.scrollY / homeSize.height;
  home.style.opacity = fadeOutPos;
});

// up home btn

const arrowUp = document.querySelector('.arrow__up');

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

// fillter project
workBtnContainer.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
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

//1.모든 섹션 요소를 가져온다
//2.IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
//3.보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonials',
  '#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);
console.log(navItems);
let selectedNavItem = navItems[0];
let selectedNavIndex = 0;

function selectNavItem(selectedIndex) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selectedIndex;
  selectedNavItem.classList.add('active');
}

function scrollIntoView(selector) {
  const name = document.querySelector(selector);
  name.scrollIntoView({ behavior: 'smooth' });
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const bodyBtm = window.scrollbars;
console.log(bodyBtm);
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);

      //스크롤링이 아래로 되어서 페이지가 올라옴
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));

window.addEventListener('wheel', () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    window.scrollY + window.innerHeight ===
    document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }

  selectNavItem(navItems[selectedNavIndex]);
});
