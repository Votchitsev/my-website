import Banner from './widgets/banner.widget/banner.widget';

function initElements() {
  const banner = new Banner(document.querySelector('.banner'));
  banner.run();
}

document.addEventListener('DOMContentLoaded', initElements);
