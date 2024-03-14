class KeyTracker {
  constructor() {
    this.keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
    };
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyDown(event) {
    const key = event.key;
    if (this.keys.hasOwnProperty(key)) {
      this.keys[key] = true;
    }
  }

  onKeyUp(event) {
    const key = event.key;
    if (this.keys.hasOwnProperty(key)) {
      this.keys[key] = false;
    }
  }

  isKeyPressed(key) {
    if (this.keys.hasOwnProperty(key)) {
      return this.keys[key];
    }
    return false;
  }
}
