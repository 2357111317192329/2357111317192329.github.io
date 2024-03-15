const keyTracker = new KeyTracker();
setInterval(() => {
  if (keyTracker.isKeyPressed('ArrowUp')) {
    alert('ArrowUp is pressed');
  }
}, 100);
