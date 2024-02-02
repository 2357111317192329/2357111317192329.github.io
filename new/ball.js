class ball {
  constructor(r,x,y) {
    this.r = r;
    this.x= x;
    this.y= y;
  }

  // 定義一個物件方法
  lookdata() {
    console.log(`r:${this.r} x:${this.x} y:${this.y}`);
  }
}
