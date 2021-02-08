class Block{
    constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			'restitution':0.9,
        			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			var BlockPos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(BlockPos.x, BlockPos.y);
			rotate(angle);
			rectMode(CENTER);
            strokeWeight(1.5);
            stroke("black");
			rect(0,0,this.w, this.h);
			pop()
			
	}
}
