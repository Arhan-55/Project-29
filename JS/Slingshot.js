class slingshot{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.010, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.slingshot = Constraint.create(options)
		World.add(world,this.slingshot)
	}

	attach(body){
		this.slingshot.bodyA=body;
	}

	fly()
	{
		this.slingshot.bodyA=null;
	}

	display()
	{
		if(this.slingshot.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(4);
			stroke("#31CBD1")		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}
