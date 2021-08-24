class Ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true
        }

        this.ground = Bodies.rectangle(240,790,850,20,ground_options)
          World.add(world,this.ground);

        }
        display(){
            fill(188,67,67);
            rectMode(CENTER);
            rect(this.ground.position.x,this.ground.position.y,850,20);
        }
    }
    