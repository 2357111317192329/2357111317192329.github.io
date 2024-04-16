class KeyTracker {
  constructor() {
    this.keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
      KeyW: false,
      KeyA: false,
      KeyS: false,
      KeyD: false,
      KeyF: false,
    };
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyDown(event) {
    const key = event.key;
    if (this.keys.hasOwnProperty(key)) {
      this.keys[key] = true;
      console.log('A is pressed');
    }
  }

  onKeyUp(event) {
    const key = event.key;
    if (this.keys.hasOwnProperty(key)) {
      this.keys[key] = false;
    }
  }

  isKeyPressed(key) {
    return this.keys[key];
  }
}
