import Banner from './widgets/banner.widget/banner.widget';
import AboutMe from './widgets/about-me.widget/about-me.widget';

function initElements() {
  const banner = new Banner(document.querySelector('.banner'));
  banner.run();

  const aboutMe = new AboutMe(document.querySelector('.about-me'));
  aboutMe.run();
}

document.addEventListener('DOMContentLoaded', initElements);
