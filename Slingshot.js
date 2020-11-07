class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 3
        }

        this.pointB= pointB;

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){

        if(this.sling.bodyA){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("brown")
            line(pointA.x-50, pointA.y-80, pointB.x-50, pointB.y-80);
        }
        
    }
   
    
fly(){

this.sling.bodyA=null;

}
attach(body){
    this.sling.bodyA=body;
}
}

