import Banner from './widgets/banner.widget/banner.widget';
import AboutMe from './widgets/about-me.widget/about-me.widget';
import Window from './Window';
import Header from './widgets/header.widget/header.widget';

function initElements() {
  const header = new Header(document.querySelector('.header'));

  const banner = new Banner(document.querySelector('.banner'));
  banner.run();

  const aboutMe = new AboutMe(document.querySelector('.about-me'));
  aboutMe.run();

  const appWindow = new Window(header, aboutMe);
  appWindow.run();
}

document.addEventListener('DOMContentLoaded', initElements);
