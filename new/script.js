const keyTracker = new KeyTracker();
//Up is ArrowUp
//0 is 0
//A is A
//a is a
setInterval(() => {
  if (keyTracker.isKeyPressed('a') || keyTracker.isKeyPressed('A')) {
    console.log('A is pressed');
  }
  else{
    console.log('A is not pressed');
  }
  if (keyTracker.isKeyPressed('ArrowUp')) {
    console.log('up is pressed');
  }
  else{
    console.log('up is not pressed');
  }
}, 100);
