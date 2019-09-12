var PI = 3.14159265358979323;
var L1 = 100;
var L2 = 100;
var a1 = PI;
var a2 = PI^2;
var acc1 = 0;
var acc2 = 0;
var v1 = 0;
var v2 = 0;
var m1 = 20;
var m2 = 20;
var g  = 1;
function setup() {
	createCanvas(500, 500);
	fill(255);
	strokeWeight(1);
}

function draw() {
	//Acceration Calculation 
	acc1 = (-g*(2*m1+m2)*sin(a1)-m2*g*sin(a1 - 2*a2)-2*sin(a1-a2)*m2*(v2*v2*L1+v1*v1*L1*cos(a1-a2)))/(L1*(2*m1+m2-m2*cos(2*a1-2*a2)))
	acc2 = (2*sin(a1-a2)  *  (v1*v1 * L1 * (m1+m2)+ g*(m1+m2) * cos(a1)+v2*v2*L2*m2*cos(a1-a2)))/(L2*(2*m1+m2-m2*cos(2*a1-2*a2)))
	
	//Physics
	v1 += acc1;
	v2 += acc2;
	a1 += v1;
	a2 += v2;
	
	//Drawing
	background(255);
	strokeWeight(3);
	translate(width/2, 30);
	fill(0);
	line(0, 0, L1 * sin(a1), L1 * cos(a1));
	ellipse(L1 * sin(a1), L1 * cos(a1), m1);
	line(L1 * sin(a1), L1 * cos(a1), L2 * sin(a2) + L1 * sin(a1), L2 * cos(a2) + L1 * cos(a1));
	ellipse(L2 * sin(a2) + L1 * sin(a1), L2 * cos(a2) + L1 * cos(a1), m2);
	text("acc2 = " + acc2,width - (width - 10), height- 50, 1000, 1000);
	text("acc1 = " + acc1,width - (width + 190), height-50, 1000, 1000);
	text("v2     = "+ v2,width - (width - 10), height- 80, 1000, 1000);
	text("v1     = "+ v1,width -(width + 190), height- 80, 1000, 1000);
	text("a2     = "+ a2,width - (width - 10), height-110, 1000, 1000);
	text("a1     = "+ a1,width - (width + 190), height - 110, 1000, 1000);
}








