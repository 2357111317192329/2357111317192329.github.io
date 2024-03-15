class KeyTracker {
  constructor() {
    this.keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
    };
    this.keyTimers = {};
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyDown(event) {
    const key = event.key;
    if (this.keys.hasOwnProperty(key)) {
      this.keys[key] = true;
      if (!this.keyTimers[key]) {
        this.keyTimers[key] = setInterval(() => {
          if (this.keys[key]) {
            // Key is still pressed
            console.log(key + ' is pressed');
          } else {
            clearInterval(this.keyTimers[key]);
            this.keyTimers[key] = null;
          }
        }, 100); // Check every 100 milliseconds
      }
    }
  }

  onKeyUp(event) {
    const key = event.key;
    if (this.keys.hasOwnProperty(key)) {
      this.keys[key] = false;
      if (this.keyTimers[key]) {
        clearInterval(this.keyTimers[key]);
        this.keyTimers[key] = null;
      }
    }
  }

  isKeyPressed(key) {
    return this.keys[key];
  }
}
