import getSectionPosition from '../../sectionPosition';

function softScrollTo(position) {
  if (((window.scrollY - position) < 20
  && (window.scrollY - position) > 0)
  || ((window.scrollY - position) > -20
  && (window.scrollY - position) < 0)) {
    return;
  }

  if (window.scrollY < position) {
    const interval = setInterval(() => {
      window.scrollBy(0, 20);
      if (window.scrollY > position) {
        clearInterval(interval);
      }
    }, 1);
  }

  if (window.scrollY > position) {
    const interval = setInterval(() => {
      window.scrollBy(0, -20);
      if (window.scrollY < position + 19) {
        clearInterval(interval);
      }
    }, 1);
  }
}

export default function scrollToSection(e) {
  if (e.target.classList.contains('header-menu-item--home')
    || e.target.classList.contains('header-logo')) {
    softScrollTo(0);
  }

  if (e.target.classList.contains('header-menu-item--about')) {
    softScrollTo(getSectionPosition('about-me'));
  }

  if (e.target.classList.contains('header-menu-item--education')) {
    softScrollTo(getSectionPosition('education'));
  }

  if (e.target.classList.contains('header-menu-item--pet-projects')) {
    softScrollTo(getSectionPosition('pet-projects'));
  }

  if (e.target.classList.contains('header-menu-item--contact')) {
    softScrollTo(getSectionPosition('contact'));
  }
}
