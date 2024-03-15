let ball0 = new ball(100,100,0,50);

alert("Hello, World!");
const keyTracker = new KeyTracker();
setInterval(() => {
  if (keyTracker.isKeyPressed('ArrowUp')) {
    alert('YES');
  }
}, 2000);
