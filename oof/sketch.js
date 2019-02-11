//James Wood 2/10/2019 7:42
//Writen in ES6
var i;
var click;
function setup() {
	createCanvas(1350, 650);
	click = 1;
	textAlign(CENTER);
}
var cricle = [];
function draw() {
	if(click === 1){
		text("Click To Make Bubbles", hight/2, width/2);
	}
	fill(255 ,255, 255);
	text("");
	if(mouseIsPressed){
	var newn = new ball();
	click = 0;
	//if (cricle.length === 20){
	//cricle.splice(1,1);
	//}
	cricle.push(newn);
}
	background(20);
	for(i = 0; i < cricle.length; i++){
	 cricle[i].Anime();
	}
}

class ball {
	constructor() {
		this.x = mouseX;
		this.y = mouseY;
		this.xd = random(-10, 10);
		this.yd = random(-10, 10);
		this.size = floor(random(10,20));
		this.thisx = 400-(size/2);
		this.thissx = size/2;
	}
	Anime() {
		fill(255,255,255,100);
		ellipse(this.x, this.y, this.size, this.size);
		if (this.x <= (width-10)) {
			this.xd *= -1;
		}
		if (this.x >= 10) {
			this.xd *= -1;
		}
		if (this.y <= (height-10)) {
			this.yd *= -1;
		} 
		if (this.y >= 10) {
			this.yd *= -1;
		}
		this.x+=this.xd
		this.y+=this.yd
	}
}
