class Ground {
    constructor(x,y,width,height){
        var options={
      isStatic:true
     // restitution:0,
     // friction:0,
      //density:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
       this.height=height;
       this.width=width;
       World.add(world,this.body);
     
    }
     display(){
        var pos=this.body.position;
        push();
        fill(173, 120, 13)
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop(); 
    }
    }
    