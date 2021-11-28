class Bell{
    constructor(x,y){
        var options={
            density: 1,
            restitution: 1.5
        }
        this.body = Bodies.rectangle(x,y, 30,60, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate (pos.x, pos.y);
        rotate (angle);
        imageMode (CENTER);
        image(bellImg,0,0,30,60 );
        //rectMode(CENTER);
        //rect(0,0, 30,60);
        pop()
    }
}