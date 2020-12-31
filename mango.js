class Mango {
    constructor(x,y,width,height){
        var options={
      isStatic:true,
      restitution:0.2,
      friction:1
      //density:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
       this.height=height;
       this.width=width;
       
       this.image=loadImage("sprites/mango.png")
       World.add(world,this.body);
     
    }
     display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
     }
    }
    