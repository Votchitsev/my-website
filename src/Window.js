class Window {
  constructor(header, aboutMe, petProjects) {
    this.header = header;
    this.aboutMe = aboutMe;
    this.education = {
      position: document.querySelector('.education').getBoundingClientRect().y + window.scrollY - 200,
    };
    this.projects = petProjects;
    this.contact = {
      position: document.querySelector('.contact').getBoundingClientRect().y + window.scrollY - 200,
    };

    this.state = {
      scrollUnderTop: false,
    };

    this.switchScrollUnderTop = this.switchScrollUnderTop.bind(this);
    this.run = this.run.bind(this);
    this.switchHeaderActiveItem = this.switchHeaderActiveItem.bind(this);
  }

  run() {
    window.addEventListener('scroll', this.switchScrollUnderTop);
    window.addEventListener('scroll', this.switchHeaderActiveItem);
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
    console.log(this.education.position, this.projects.position);
    if (currentActiveItem) {
      currentActiveItem.classList.remove('header-menu-item--active');
    }

    if (window.scrollY < this.aboutMe.position) {
      this.header.items.home.classList.add('header-menu-item--active');
    }

    if (window.scrollY >= this.aboutMe.position && window.scrollY < this.education.position) {
      this.header.items.about.classList.add('header-menu-item--active');
    }

    if (window.scrollY >= this.education.position && window.scrollY < this.projects.position) {
      this.header.items.education.classList.add('header-menu-item--active');
    }

    if (window.scrollY >= this.projects.position && window.scrollY < this.contact.position) {
      console.log(this.header);
      this.header.items.projects.classList.add('header-menu-item--active');
    }

    if (window.scrollY >= this.contact.position) {
      this.header.items.contact.classList.add('header-menu-item--active');
    }
  }
}

export default Window;
