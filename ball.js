class Ball{
    constructor(x,y) {
     var options = {
       isStatic:false,
       restitution:0.9,
       friction:0.3,
       density:1.2
   }
 
     
     this.body = Bodies.circle(x,y,30, options);
     this.radius = 30;
     World.add(world,this.body)
    }
 
    
    display(){
 
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     rotate(angle);
     translate(pos.x,pos.y)
     fill("white")
     ellipseMode(RADIUS);
     ellipse(0,0,this.radius,this.radius);
     pop();
 }
 
 
 
 
 
 
 
 
 }