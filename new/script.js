const keyTracker = new KeyTracker();
setInterval(() => {
  if (keyTracker.isKeyPressed('ArrowUp')) {
    console.log('ArrowUp is pressed');
  }
}, 100);
