let ball0 = new ball(100,100,0,50);

alert("Hello, World!");
const keyTracker = new KeyTracker();
setInterval(() => {
  if (keyTracker.isKeyPressed('ArrowUp')) {
    console.log('YES');
  }
}, 2000);
