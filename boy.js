class Boy {
    constructor(x,y,width,height){
        var options={
      isStatic:true
     // restitution:0,
     // friction:0,
      //density:0
        }
        this.body=Bodies.rectangle(x,y,width/4,height/4,options)
       this.height=height;
       this.width=width;
       
       this.image=loadImage("sprites/boy.png")
       World.add(world,this.body);
     
    }
     display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
     }
    }
    