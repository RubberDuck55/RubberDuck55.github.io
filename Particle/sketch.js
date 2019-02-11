let particles = [];
function setup() {
  createCanvas(400, 600);
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
  
}
class Particle {
    constructor() {
        this.x = 200;
        this.y = 550;
        this.xv = random(-1,1);
        this.yv = random(-1,-5);
        this.alpha = 100;
        this.size = random(15,17);
    }
    update() {
        this.x += this.xv;
        this.y += this.yv;
        this.alpha -= 1;
        this.size+=0.2;
        //this.r = random(10,20);
        //this.r2 = random(10,20);
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
        ellipse(this.x, this.y, this.size);
    }
}