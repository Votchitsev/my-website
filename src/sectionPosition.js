export default function setSectionPosition(selector) {
  const element = document.querySelector(`.${selector}`);
  const elementHeight = element.offsetHeight;
  return element.getBoundingClientRect().y + window.scrollY - (elementHeight * 0.4);
}
