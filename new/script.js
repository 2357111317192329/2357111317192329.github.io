const keyTracker = new KeyTracker();
setInterval(() => {
  if (keyTracker.isKeyPressed('KeyA')) {
    console.log('A is pressed');
  }
  else{
    console.log('A is not pressed');
  }
}, 100);
