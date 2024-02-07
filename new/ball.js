class ball {
  constructor(r=20,x,y,vx=0,vy=0,bb=0.9) {
    this.r = r;
    this.x= x;
    this.y= y;
    this.vx=vx;
    this.vy=vy;
    this.bb=bb;
  }
  // 定義一個物件方法
  lookdata() {
    console.log(`r:${this.r} x:${this.x} y:${this.y} vx:${this.vx} vy:${this.vy} bb:${this.bb}`);
  }
  gravity(g=2) {
    this.vy=this.vy+g;
  }
  control(stepx=10,stepy=10) {
    //無效，下次新增鍵盤類別以儲存按鍵是否被按下
    window.addEventListener('keypress', function(event) {
      switch (event.key) {
        case "ArrowUp":
          this.vy-=stepy;
          break;
        case "ArrowDown":
          this.vy+=stepy;
          break;
        case "ArrowLeft":
          this.vx-=stepx;
          break;
        case "ArrowRight":
          this.vx+=stepx;
          break;
      }
    }
  }
}
