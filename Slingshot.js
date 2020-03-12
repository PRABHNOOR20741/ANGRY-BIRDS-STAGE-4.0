//renaming the file
class Slingshot{
    //constrainting a point and a body
    constructor(bodyA,pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
     //making the bird fly 
    fly()
    {
      this.sling.bodyA = null;
    }

    display(){
        //adding conditions to make the bird fly 
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}