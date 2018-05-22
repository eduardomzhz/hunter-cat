class Game {
  constructor(container, options) {
    options = options || {};
    this.container = document.getElementById(container);
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.context.imageSmoothingEnabled = false;

    this.isActive = false;
    this.isPlaying = false;
    this.timer = 0;
    this.canvas.style.backgroundColor = '#000000';
    this.container.appendChild(this.canvas);

    this.resize();

    let step = 1 / 60;
    let lastTime = 0;
    let deltaTime = 0;
    let counter = 0;
    this.loop = (currentTime = 0) => {
      if (this.isPlaying && this.isActive) {
        deltaTime += (currentTime - lastTime) / 1000;
        lastTime = currentTime;
        while (deltaTime > step) {
          this.update(step);
          deltaTime -= step;
        }
        counter += step;
        this.timer = Math.floor(counter);
        this.render();
      }
      requestAnimationFrame(this.loop);
    };
  }

  render() {
  }

  resize() {
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
  }

  start() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.isActive = true;
      requestAnimationFrame(this.loop);
    }
  }

  update(step) {
  }
}
