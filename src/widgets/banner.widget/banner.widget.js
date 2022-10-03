class Banner {
  constructor(element) {
    this.element = element;
    this.cursor = element.querySelector('.banner-content-cursor');
    this.dynamicTextElement = element.querySelector('.banner-content-text');
    this.text = ['fullstack developer', 'on Python', 'and JavaScript'];
    this.textIndex = 0;
    this.letterIndex = 0;
    this.status = 'write';

    this.run = this.run.bind(this);
    this.printText = this.printText.bind(this);
    this.deleteText = this.deleteText.bind(this);
  }

  run() {
    this.interval = setInterval(() => {
      if (this.textIndex === this.text.length) {
        this.textIndex = 0;
      }

      if (this.letterIndex === this.text[this.textIndex].length) {
        this.status = 'delete';
      }

      if (this.status === 'write') {
        this.printText();
      }

      if (this.status === 'delete') {
        this.deleteText();
      }
    }, 100);
  }

  printText() {
    this.dynamicTextElement.textContent += this.text[this.textIndex][this.letterIndex];
    this.letterIndex += 1;
    if (this.letterIndex === this.text[this.textIndex].length) {
      clearInterval(this.interval);
      setTimeout(this.run, 1000);
    }
  }

  deleteText() {
    this.letterIndex -= 1;
    this.dynamicTextElement.textContent = this.text[this.textIndex].slice(0, this.letterIndex);

    if (this.letterIndex === 0) {
      this.status = 'write';
      this.textIndex += 1;
      clearInterval(this.interval);
      setTimeout(this.run, 1000);
    }
  }
}

export default Banner;
