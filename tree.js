class Tree {
constructor(x,y,width,height){
    var options={
  isStatic:true
 // restitution:0,
 // friction:0,
  //density:0
    }
    this.body=Bodies.rectangle(x,y,width/2,height/2,options)
   this.height=height;
   this.width=width;
   
   this.image=loadImage("sprites/tree.png")
   World.add(world,this.body);
 
}
 display(){
    var pos=this.body.position;
    imageMode(CENTER);
    image(this.image,550,460,this.width,this.height);
 }
}
