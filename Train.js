class Train {
    constructor(b1,b2) {
        var options = {
            bodyA : b1,
            bodyB : b2,
            stiffness : 0.04,
            length : 10
        }

        this.Train = Constraint.create(options);
        World.add(world, this.Train);
      }    
       
      display() {
          var pointA = this.Train.bodyA.position;
          var pointB = this.Train.bodyB.position;
        strokeWeight(3);
        line(pointA.x ,pointA.y, pointB.x , pointB.y  )
      }
   
}