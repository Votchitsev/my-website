import config from '../../config';

class AboutMe {
  constructor(element) {
    this.element = element;
    this.textElement = element.querySelector('.about-me--info--text--content');
    this.text = config.aboutMeInfoText;
  }

  run() {
    this.insertText();
  }

  insertText() {
    this.textElement.textContent = this.text;
  }
}

export default AboutMe;
