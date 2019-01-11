

function setup(){
	createCanvas(windowWidth,windowHeight);

}


function draw(){
background(250);
if(frameCount%150==0){
	for (let i=0; i<20; i++){
		let q = new bubble(random(0,windowWidth), random(3*windowHeight/4,windowHeight), random(20,100),int(random(0,255)),0,int(random(0,255))); //,int(random(0,255)),int(random(0,255)),int(random(0,255))
			bubbles.push(q);
			console.log(bubbles);
	}
	for (let i=0; i<20; i++){
		let q = new bubble(random(0,windowWidth), random(3*windowHeight/4,windowHeight), random(20,100),0,int(random(0,150)),int(random(0,255))); //,int(random(0,255)),int(random(0,255)),int(random(0,255))
			bubbles.push(q);
			console.log(bubbles);
	}
}
for (let i = 0; i < bubbles.length; i++) {
bubbles[i].drawBubble();
bubbles[i].moveBubble();
}

}

class bubble {
	constructor(x,y,w,n,u,o){ //every ball needs an x value and a y value
		this.x = x;
  	this.y = y;
		this.w = w;
		this.n = n;
		this.u = u;
		this.o = o;
	}
	drawBubble(){  // draw a ball on the screen at x,y
		stroke(247, 246, 230);
		strokeWeight(3);
   //	fill('rgba(255,0,200, 0.35)');
		fill(this.n,this.u,this.o, 89);
		// print(n);
		// print(o);
		// print(u);
			ellipse(this.x,this.y,this.w);
	}
	moveBubble(){
		 if (frameCount % 10 == 0){
		this.x=this.x-random(0,10/3);
		this.y=this.y-random(0,100);
	   }

}
}
