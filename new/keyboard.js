class KeyTracker {
  constructor() {
    this.keys = {};
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onKeyDown(event) {
    const key = event.key;
    this.keys[key] = true; // Set all key states to true on keydown
  }

  onKeyUp(event) {
    const key = event.key;
    if (this.keys.hasOwnProperty(key)) {
      this.keys[key] = false; // Only update existing key states on keyup
    }
  }
  isKeyPressed(key) {
    return this.keys[key] || false;
  }
}
