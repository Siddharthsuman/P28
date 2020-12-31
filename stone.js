class Stone {
    constructor(x,y,width,height){
        var options={
      isStatic:false,
      restitution:0,
      friction:1,
      density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
       this.height=height;
       this.width=width;
       
       this.image=loadImage("sprites/stone.png")
       World.add(world,this.body);
     
    }
     display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
     }
    }
    