class ball {
  controlkey=['ArrowLeft', 'ArrowRight', 'ArrowUp','ArrowDown','0'];
  constructor(x,y,id,r=20,vx=0,vy=0,bb=0.9,d=1.0) {
    this.r = r;
    this.x= x;
    this.y= y;
    this.id= id;
    this.vx=vx;
    this.vy=vy;
    this.bb=bb;// 恢復係數
    this.d=d;
    this.gdc=0; // 增重冷卻
  }
  // 定義一個物件方法
  lookdata() {
    console.log(`r:${this.r} x:${this.x} y:${this.y} vx:${this.vx} vy:${this.vy} d:${this.d} gdc:${this.gdc}`);
  }
  gravity(g=2) {
    this.vy=this.vy-g;
  }
  move(delvx,delvy) {
    this.vx=this.vx+delvx;
    this.vy=this.vy+delvy;
  }
  max(a,b) {
    if(a>b){
      return a;
    }
    else{
      return b;
    }
  }
  gain_dense(p) {
    if(p==1){
      if(this.gdc==0){
        this.d=3;
        this.gdc=50;
      }
      else{
        let tmpt=Math.floor(10*(3-2*(this.gdc/50)))/10;
        this.d=this.max(this.d,tmpt);
        this.gdc=50;
        if(this.d>=1.1){
          this.d=(10*this.d-1)/10;
        }
      }
    }
    else{
      if(this.d>=1.1){
        this.d=(10*this.d-1)/10;
      }
      if(this.gdc>0){
        this.gdc=this.gdc-1;
      }
    }
  }
  update() {
    this.gravity();
    this.x=this.vx+this.x;
    this.y=this.vy+this.y;
  }
}
