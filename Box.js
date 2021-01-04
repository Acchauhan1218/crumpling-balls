class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution: 0.7,
            friction: 0.4,
            density: 0.8
        }
        this.image=loadImage("dustbingreen.png")
        this.body=Bodies.rectangle(x,y,width,height, options)
        World.add(world, this.body)
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle
        push()
        translate(pos.x, pos.y)
        
translate(pos.x,pos.y)
imageMode(CENTER)
image(this.image,0,0,60,60)

   
        
        pop()
    }
}