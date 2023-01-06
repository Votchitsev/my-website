import Banner from './widgets/banner.widget/banner.widget';
import AboutMe from './widgets/about-me.widget/about-me.widget';
import Window from './Window';
import Header from './widgets/header.widget/header.widget';
import Img from './widgets/about-me.widget/img/dmitrii.votchitsev_2215405451567359885_0.jpg';
import PetProjects from './widgets/pet-projects.widget/pet-projects.widget';

function initElements() {
  document.querySelector('.about-me--info--photo').src = Img;

  const header = new Header(document.querySelector('.header'));

  const banner = new Banner(document.querySelector('.banner'));
  banner.run();

  const aboutMe = new AboutMe(document.querySelector('.about-me'));
  aboutMe.run();

  const petProjects = new PetProjects(document.querySelector('.pet-projects--container'));
  petProjects.run();

  const appWindow = new Window(header, aboutMe, petProjects);
  appWindow.run();
}

document.addEventListener('DOMContentLoaded', initElements);
