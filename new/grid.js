class grid {
  constructor(x,y,id,l,h,bb=1.0) {
    this.x= x;
    this.y= y;
    this.l= l;
    this.h= h;
    this.id= id;
    this.bb=bb;
  }
  // 定義一個物件方法
  lookdata() {
    console.log(`x:${this.x} y:${this.y} l:${this.l} h:${this.h}`);
  }
  max(a,b) {
    if(a>b){
      return a;
    }
    else{
      return b;
    }
  }
}
