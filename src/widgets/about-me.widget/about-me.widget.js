import config from '../../config';

function animateSkill(skill, percent) {
  let width = 0;
  const sk = skill;
  const interval = setInterval(() => {
    sk.style.width = `${width}%`;
    width += 1;
    if (width === percent) {
      clearInterval(interval);
    }
  }, 10);
}

class AboutMe {
  constructor(element) {
    this.element = element;
    this.textElement = element.querySelector('.about-me--info--text--content');
    this.text = config.aboutMeInfoText;
    this.skills = element.querySelectorAll('.skill-line');
    this.animateSkills = this.animateSkills.bind(this);
    this.animateSkill = this.animateSkill.bind(this);
  }

  run() {
    this.insertText();
  }

  insertText() {
    this.textElement.textContent = this.text;
  }

  animateSkills() {
    for (let i = 0; i < this.skills.length; i += 1) {
      const skillName = this.skills[i].parentNode.parentNode.querySelector('.skill-title').innerHTML;
      const { percent } = config.skills.find((el) => {
        if (el.name === skillName) {
          return el.percent;
        }
        return undefined;
      });
      animateSkill(this.skills[i], percent);
    }
  }
}

export default AboutMe;
