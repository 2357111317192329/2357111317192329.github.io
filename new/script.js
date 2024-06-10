const keyTracker = new KeyTracker();
const ball1 = new ball(100,0,1);
//Up is ArrowUp
//0 is 0
//A is A
//a is a
setInterval(() => {
  let tmpleft=ball1.controlkey[0];
  let tmpright=ball1.controlkey[1];
  if (keyTracker.isKeyPressed(tmpleft)) {
    ball1.move(-1,0);
  }
  else{
  }
  if (keyTracker.isKeyPressed(tmpright)) {
    ball1.move(1,0);
  }
  else{
  }
  ball1.update();
  ball1.lookdata();
}, 100);
