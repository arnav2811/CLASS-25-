class Log extends Base {
    constructor(x, y, height, angle) {
      super(x, y, 20, height, angle)
      this.image = loadImage("sprites/wood2.png")
      Matter.Body.setAngle(this.body, angle)
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      super.display()
    }
  };
  