function blurProject(e) {
  e.target.querySelector('.pet-project--stack-container').classList.remove('focus');
  e.target.querySelector('.pet-project--link').classList.remove('show-link');
  e.target.querySelector('.opacity').classList.remove('opacity-active');
  e.target.querySelector('.pet-project--title').classList.remove('pet-project--title--active');
}

function focusProject(e) {
  e.target.querySelector('.pet-project--stack-container').classList.add('focus');
  e.target.querySelector('.pet-project--link').classList.add('show-link');
  e.target.querySelector('.opacity').classList.add('opacity-active');
  e.target.querySelector('.pet-project--title').classList.add('pet-project--title--active');
}

class PetProjects {
  constructor(container) {
    this.container = container;
    this.petProjects = this.container.querySelectorAll('.pet-project');
  }

  run() {
    for (let i = 0; i < this.petProjects.length; i += 1) {
      this.petProjects.item(i).addEventListener('mouseenter', focusProject);
      this.petProjects.item(i).addEventListener('mouseleave', blurProject);
    }
  }
}

export default PetProjects;
