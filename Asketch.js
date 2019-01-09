let obstacles=[];
let players=[];
let gameOver=false;
let winning=false;
let lineWidth = 50;

function setup(){
createCanvas(windowWidth,windowHeight);
	let j = new player(windowWidth/16-100,windowHeight/2,100);
		players.push(j);
		console.log(players);
for (let i=0; i<15; i++){
	let z = new obstacle(random(windowWidth/16,3*windowWidth/4),random(0,windowHeight),
	random(0,windowWidth/8),random(windowWidth/16,windowWidth/4));
	obstacles.push(z);
}

}

function draw(){
background(250);
if(gameOver==false && winning == false){

finishLine();
	for (let i = 0; i < players.length; i++) {
		players[i].drawPlayer();
    players[i].movePlayer();
	 	players[i].diePlayer();
  }
	for (let i = 0; i < obstacles.length; i++) {
		obstacles[i].drawObstacle();
  }
}

if (winning==true){
	noStroke();
	fill(255);
		rect(0,0,windowWidth,windowHeight);
		textSize(100);
		fill(0);
			text('YOU WIN!',windowWidth/2,windowHeight/2);
			print("winning!")
}

if (gameOver==true){
	noStroke();
	fill(255);
		 rect(0,0,windowWidth,windowHeight);
	 fill(0);
	 textSize(100);
		 text('YOU LOSE!',windowWidth/2,windowHeight/2);
	print("game over!")
}

}



class obstacle {
	constructor(x,y,w,h){ //every ball needs an x value and a y value
		this.x = x;
  	this.y = y;
		this.w = w;
		this.h = h
	}

	drawObstacle(){  // draw a ball on the screen at x,y
		stroke(0);
		strokeWeight(1);
    fill('rgba(230,0,50, 0.25)');
		rect(this.x,this.y,this.w,this.h);
	}
}

class player {
	constructor(x,y,w,h){ //every ball needs an x value and a y value
		this.x = x;
  	this.y = y;
		this.w = w;
	}

	drawPlayer(){  // draw a ball on the screen at x,y
		stroke(0);
		strokeWeight(1);
    fill('rgba(0,50,230, 0.25)');;
		rect(this.x,this.y,this.w,this.w);
		rect(this.x+10,this.y+10,this.w-this.w/5,this.w-this.w/5);
		rect(this.x+20,this.y+20,this.w-2*this.w/5,this.w-2*this.w/5);
		rect(this.x+30,this.y+30,this.w-3*this.w/5,this.w-3*this.w/5);
		if (this.w >= 25 && keyIsDown(189)){
			this.w = .95*this.w;
		}
		if (this.w <= 200 && keyIsDown(187)){
			this.w = 1.05*this.w;

		}
	}

	movePlayer(){
		if (keyIsDown(RIGHT_ARROW)) {
			this.x = this.x +5;
		}

		if (keyIsDown(LEFT_ARROW)) {
			this.x = this.x -5;
		}

		if(keyIsDown(UP_ARROW)){
			this.y = this.y -5;
		}

		if(keyIsDown(DOWN_ARROW)){
			this.y = this.y +5;
		}
  }
 diePlayer(){ //this is not working. I want it to create a white screen that says "you loose" when the player comes into contact with a line, right now it is not reacting at all.
	for(let i=0;i<obstacles.length;i++){
		if(this.x+this.w >= obstacles[i].x && this.x<= obstacles[i].x+obstacles[i].w
			&& this.y+this.w>= obstacles[i].y && this.y<= obstacles[i].y+obstacles[i].h){
						gameOver = true;
			}
	}
	}
}
function finishLine(){
	noFill();
	stroke('rgba(0,200,100, 0.25)');
	strokeWeight(lineWidth);
		ellipse(15*windowWidth/16,windowHeight/2,windowWidth/8,windowHeight/2);
	stroke(0,200,150);
	strokeWeight(lineWidth-20);
		ellipse(15*windowWidth/16,windowHeight/2,windowWidth/8,windowHeight/2);

	for (let i = 0; i < players.length; i++) {
		if (players[i].x >= 7*windowWidth/8 && players[i].y >=windowHeight/4 && players[i].y
			+players[i].w<=3*windowHeight/4) {
			winning=true;

		}
	}
}
