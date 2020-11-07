class Stand{

    constructor(x,y,width,height)
    {
    var stand_options={isStatic:true};
    this.body=Bodies.rectangle(x,y,width,height,stand_options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);  
    }
    display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x,pos.y,this.width,this.height);
    }
    }