class Ground
{
 constructor(x, y, w, h)
{
 let options = {
   isStatic: true 
 };
  this.h = h;
  this.w = w;
  this.x = x;
  this.y = y;
  this.body = Bodies.rectangle(x,y,w,h,options);
  World.add(world,this.body);
  }

}

display()
{
 var pos = this.body.position;
 push();
 translate(pos.x,pos.y);
 rectMode(CENTER)
 rect(0,0,this.w,this.h);
 pop();
}




