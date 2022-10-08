class Window {
  constructor(header, aboutMe) {
    this.header = header;
    this.aboutMe = aboutMe;

    this.state = {
      scrollUnderTop: false,
    };

    this.switchScrollUnderTop = this.switchScrollUnderTop.bind(this);
    this.run = this.run.bind(this);
  }

  run() {
    window.addEventListener('scroll', this.switchScrollUnderTop);
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
}

export default Window;
