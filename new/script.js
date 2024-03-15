const keyTracker = new KeyTracker();
setInterval(() => {
  if (keyTracker.isKeyPressed('ArrowUp')) {
    console.log('ArrowUp is pressed');
  }
  else{
    console.log('ArrowUp is not pressed');
  }
}, 100);
