let ship;
let ccanvas
function setup() {
  ccanvas = createCanvas(windowWidth, windowHeight);
	 ship = new Ship();
}

function keyPressed() {
 if(keyCode == RIGHT_ARROW) {
				 ship.turning(0.1);
				}
	
 else if(keyCode == LEFT_ARROW) {
				 ship.turning(-0.1);
				}
	else if(keyCode == UP_ARROW){
									 ship.boosting(true);
									}
}

function draw() {
	 ccanvas = createCanvas(windowWidth, windowHeight);
	 fill(0, 30);
	 noStroke();
	 rect(0,0,width,height);
	 noFill();
	 stroke(225);
  //background(220);
	 //print(ship.pos);
	 ship.update();
	 ship.draw();
	if(keyIsPressed === false) {
			ship.turning(0);
		        ship.boosting(false);
									}
}
class Ship {
constructor() {
        this.head = 0;
	this.pos = createVector(width/2,height/2);
	this.rotate = 0;
	this.size = 8;
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
}
update() {
	if(this.pos.x >= width+this.size){
	  this.pos.x=0
	}
	if(this.pos.x <= -this.size){
	  this.pos.x=width
	}
	if(this.pos.y >= height+this.size){
	  this.pos.y=0
	}
	if(this.pos.y <= -this.size){
	  this.pos.y=height
	}
	//text(this.pos,10,10);
	//text(this.acc,10,20);
	//text(this.vel,10,30);
	//text(this.rotate,10,40);
	translate(this.pos);
 this.turn();
	this.angle = p5.Vector.fromAngle(this.head,0.6);
	//this.angle.add(2,2);
	this.vel.mult(0.93, 0.93);
	this.boost();
	this.pos.add( this.vel );
}

draw() {
 triangle(this.size, -this.size, 0, this.size, -this.size, -this.size);
}

boosting(b){
	if(b === true) {
 this.acc.set(this.angle);
}
	else if (b === false) {
										 this.acc.set(0,0);
										}
}

boost(){
 this.vel.add(this.acc);
}
	
turning(angle){
 this.rotate = angle;
}
	
turn() {
	this.head+=this.rotate;
	rotate(this.head-PI/2);
}
}
