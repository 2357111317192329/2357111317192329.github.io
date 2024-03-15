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
      // 觸發事件或執行相應的操作
      console.log(key + ' pd');
    }
  }

  onKeyUp(event) {
    const key = event.key;
    if (this.keys.hasOwnProperty(key)) {
      this.keys[key] = false;
      // 觸發事件或執行相應的操作
      console.log(key + ' rd');
    }
  }

  isKeyPressed(key) {
    return this.keys[key];
  }
}
