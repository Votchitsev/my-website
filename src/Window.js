import setSectionPosition from './sectionPosition';

class Window {
  constructor(header, aboutMe) {
    this.header = header;
    this.aboutMe = aboutMe;

    this.sectionPositions = undefined;

    this.setSectionPositions();

    this.state = {
      scrollUnderTop: false,
    };

    this.switchScrollUnderTop = this.switchScrollUnderTop.bind(this);
    this.run = this.run.bind(this);
    this.switchHeaderActiveItem = this.switchHeaderActiveItem.bind(this);
    this.setSectionPositions = this.setSectionPositions.bind(this);
  }

  run() {
    window.addEventListener('scroll', this.switchScrollUnderTop);
    window.addEventListener('scroll', this.switchHeaderActiveItem);
    window.addEventListener('resize', this.setSectionPositions);
  }

  switchScrollUnderTop() {
    const fixedMenuControlPosition = document.querySelector('.banner-content--static-text--hello')
      .getBoundingClientRect().top;

    const skillsControlPosition = this.aboutMe.element.getBoundingClientRect()
      .top - window.outerHeight + this.aboutMe.element.getBoundingClientRect().height;

    if (fixedMenuControlPosition < 0 && !this.state.scrollUnderTop) {
      this.state.scrollUnderTop = true;
      this.header.holdElement();
    } else if (fixedMenuControlPosition >= 0 && this.state.scrollUnderTop) {
      this.state.scrollUnderTop = false;
      this.header.letElement();
    }

    if ((skillsControlPosition + 200) < 0 && !this.state.skillsIsAnimated) {
      this.state.skillsIsAnimated = true;
      this.aboutMe.animateSkills();
    }
  }

  switchHeaderActiveItem() {
    const currentActiveItem = this.header.element.querySelector('.header-menu-item--active');

    if (currentActiveItem) {
      currentActiveItem.classList.remove('header-menu-item--active');
    }

    if (window.scrollY < this.sectionPositions.about) {
      this.header.items.home.classList.add('header-menu-item--active');
    }

    if (window.scrollY >= this.sectionPositions.about
      && window.scrollY < this.sectionPositions.education) {
      this.header.items.about.classList.add('header-menu-item--active');
    }

    if (window.scrollY >= this.sectionPositions.education
      && window.scrollY < this.sectionPositions.projects) {
      this.header.items.education.classList.add('header-menu-item--active');
    }

    if (window.scrollY >= this.sectionPositions.projects
      && window.scrollY < this.sectionPositions.contact) {
      this.header.items.projects.classList.add('header-menu-item--active');
    }

    if (window.scrollY >= this.sectionPositions.contact) {
      this.header.items.contact.classList.add('header-menu-item--active');
    }
  }

  setSectionPositions() {
    this.sectionPositions = {
      about: setSectionPosition('about-me'),
      education: setSectionPosition('education'),
      projects: setSectionPosition('pet-projects'),
      contact: setSectionPosition('contact'),
    };
  }
}

export default Window;
