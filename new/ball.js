class ball {
  constructor(r,x,y) {
    this.r = r;
    this.x= x;
    this.y= y;
    this.vx=0;
    this.vy=0;
    this.bb=0.9;
  }

  // 定義一個物件方法
  lookdata() {
    console.log(`r:${this.r} x:${this.x} y:${this.y}`);
  }
}
