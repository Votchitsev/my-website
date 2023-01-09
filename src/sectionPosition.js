function getSectionPosition(selector) {
  const element = document.querySelector(`.${selector}`);
  return element.getBoundingClientRect().y + window.scrollY - (window.innerHeight * 0.2);
}

export default getSectionPosition;
