class ball {
  constructor(x,y,id,r=20,vx=0,vy=0,bb=0.9) {
    this.r = r;
    this.x= x;
    this.y= y;
    this.id= id;
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
}
