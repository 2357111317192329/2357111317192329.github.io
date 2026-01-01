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
  collideVertical(grid,xEdge) {
    if (this.vx === 0) return null;
  
    const t = (xEdge - this.x + Math.sign(this.vx) * this.r) / this.vx;
    if (t < 0 || t > 1) return null;
  
    const y = this.y + this.vy * t;
    if (y >= grid.y && y <= grid.y + grid.h) return t;
  
    return null;
  }
  collideHorizontal(grid,yEdge) {
    console.log(`yEdge:${yEdge}`);
    if (this.vy === 0) return null;
  
    const t = (yEdge - this.y + Math.sign(this.vy) * this.r) / this.vy;
    if (t < 0 || t > 1) return null;
  
    const x = this.x + this.vx * t;
    if (x >= grid.x && x <= grid.x + grid.l) return t;
  
    return null;
  }
  collideCorner(cx, cy) {
    const dx = this.vx;
    const dy = this.vy;
  
    const fx = this.x - cx;
    const fy = this.y - cy;
  
    const a = dx*dx + dy*dy;
    const b = 2*(fx*dx + fy*dy);
    const c = fx*fx + fy*fy - this.r*this.r;
  
    const disc = b*b - 4*a*c;
    if (disc < 0) return null;
  
    const sqrtD = Math.sqrt(disc);
    const t1 = (-b - sqrtD) / (2*a);
    const t2 = (-b + sqrtD) / (2*a);
  
    if (t1 >= 0 && t1 <= 1) return t1;
    if (t2 >= 0 && t2 <= 1) return t2;
  
    return null;
  }
  checkCollision(grid) {
    console.log(`gridx:${grid.x}`);
    const times = [];
  
    times.push(this.collideVertical.call(grid, grid.x-grid.l/2));
    times.push(this.collideVertical.call(grid, grid.x + grid.l/2));
    times.push(this.collideHorizontal.call(grid, grid.y-grid.h/2));
    times.push(this.collideHorizontal.call(grid, grid.y + grid.h/2));
  
    times.push(this.collideCorner.call(grid, grid.x-grid.l/2, grid.y-grid.h/2));
    times.push(this.collideCorner.call(grid, grid.x + grid.l/2, grid.y-grid.h/2));
    times.push(this.collideCorner.call(grid, grid.x-grid.l/2, grid.y + grid.h/2));
    times.push(this.collideCorner.call(grid, grid.x + grid.l/2, grid.y + grid.h/2));
  
    const valid = times.filter(t => t !== null);
    if (valid.length === 0) return null;
  
    return Math.min(...valid);
  }
  update() {
    this.gravity();
    this.x=this.vx+this.x;
    this.y=this.vy+this.y;
  }
}
