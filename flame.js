let particles = [];
function setup() {
  createCanvas(1000, 400);
}

function draw() {
    background(10);
    for (let i = 0; i < 10; i++) {
    let p = new fire();
    particles.push(p);
    }
    for (i = particles.length - 1; i > 0; i--){
      particles[i].update();
      particles[i].show();
      if (particles[i].done()) {
          particles.splice(i, 1);
      }
  }
}
class fire {
    constructor() {
        this.x = random(990,1000);
        this.y = random(100,110);
        this.xv = random(-18,-20);
        this.yv = random(-2,-3);
        this.g = 0.3;
        this.life = 255;
        this.R = random(100, 255);
        this.G = random(100, 255);
        this.B = random(100, 255)
    }
    
    update() {
        this.yv += this.g;
        this.y += this.yv;
        this.x += this.xv;
        this.life -= 3;
    }
    
    show() {
        noStroke();
        fill(this.R, this.B, this.G, this.life);
        ellipse(this.x, this.y, 16);
    }
    
    done() {
        if(this.life < 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
