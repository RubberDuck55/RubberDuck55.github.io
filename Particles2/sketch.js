let particles = [];
var slider;
function setup() {
  createCanvas(400, 600);
  rectMode(CENTER);
  slider = createSlider(10, 400, 100);
  slider.position(410, 50);
  slider.style('width', '80px');
}
function draw() {
    for (let i = 0; i < 5; i++) {
  let p = new Particle();
  particles.push(p);
    }
  background(0);
    for (let i = particles.length - 1; i >= 0; i--){
  particles[i].update();
  particles[i].show();
    if (particles[i].finished() === true) {
     particles.splice(i , 1);
  }
  }
  let x = mouseX;
  let y = mouseY;
  fill(255);
  rect(x, y, 100, 20);
}
class Particle {
    constructor() {
        this.x = random(190,210);
        this.y = 550;
        this.xv = random(-1,1);
        this.yv = random(-1,-5);
        this.alpha = 100;
        this.pyv = this.yv;
    }
    update() {
        this.x += this.xv;
        this.y += this.yv;
        this.alpha -= 1;
        if(this.x > mouseX-100/2 && this.y < mouseY+10 && this.x < mouseX+100/2 && this.y > mouseY-10){
            this.yv = 0;
        }
        else {
            this.yv = this.pyv;
        }
    }
    finished() {
        if(this.alpha < 0) {
            return true;
        }
        else {
            return false;
        }
    }
    show() {
        noStroke();
        fill(255, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}