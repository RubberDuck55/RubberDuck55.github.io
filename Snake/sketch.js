//James Wood 1/16/2019
//Writen in ES6
var snakes, i, appple, score = 0;
function setup() {
  createCanvas(400, 400);
  snakes = new snake();
  appple = new apple();
}
function keyPressed() {
    snakes.keys();
}
function draw() {
  fill(51);
  rect(0,0, 10, 400);
  rect(0,0, 400, 10);
  rect(0,390, 400, 10);
  rect(390,0, 10, 400);
}
  var mm = setInterval(function(){ 
  background(250);
  snakes.show();
  snakes.move(); 
  appple.draw();
  fill('black');
  text("score: "+score, 12, 20);
  }, 100);
  
class Block {
    constructor(col, row) {
        this.row = row;
        this.col = col;
    }
    
    drawblock(color){
        this.x = this.col * 10;
        this.y = this.row * 10;
        fill(color);
        rect(this.x, this.y, 10, 10);
    }
    
    equal(pos) {
        return this.col === pos.col && this.row === pos.row;
    }
}
class snake {
    constructor() {
        this.segs = [
            
            new Block(4,20),
            new Block(3,20),
            new Block(2,20)
            
        ];
        this.nextDir = 'right';
    }
    show() {
        for(i = 0; i < this.segs.length; i++) {
            this.segs[i].drawblock('blue');
        }
    }
    
    keys(){
        if (keyCode === UP_ARROW) {
            this.nextDir = 'up';
        }
        if (keyCode === DOWN_ARROW) {
            this.nextDir = 'down';
        }
        if (keyCode === RIGHT_ARROW) {
            this.nextDir = 'right';
        }
        if (keyCode === LEFT_ARROW) {
            this.nextDir = 'left';
        }
    }
    
    move() {
        this.head = this.segs[0];
        
        this.dir = this.nextDir;
        
        if (this.dir === 'up') {
            this.newHead = new Block(this.head.col, this.head.row - 1);
        }
        else if (this.dir === 'down') {
            this.newHead = new Block(this.head.col, this.head.row + 1);
        }
        else if (this.dir === 'right') {
            this.newHead = new Block(this.head.col + 1, this.head.row);
        }
        else if (this.dir === 'left') {
            this.newHead = new Block(this.head.col - 1, this.head.row);
        }
        if(this.checkCollide(this.newHead) === true) {
            console.log("ded");
            clearInterval(mm);
        }
        this.segs.unshift(this.newHead);
        if(this.head.equal(appple.pos)){
            score++;
            appple.move();
        }
        else{
        this.segs.pop();
        }
    }
    checkCollide(pos) {
        let LC = (pos.col === 0);
        let TC = (pos.row === 0);
        let RC = (pos.col === 39);
        let BC = (pos.row === 39);
        
        let WC = LC || TC || RC || BC;
        
        var selfC = false;
        
        for (let i = 0; i < this.segs.length; i++) {
            if (pos.equal(this.segs[i])){
                selfC = true;
            }
        }
        
        return WC || selfC;
    }
    
}
class apple {
    constructor() {
    this.pos = new Block(10,10);
    }
    
    draw() {
        this.pos.drawblock("LimeGreen");
    }
    
    move() {
        this.pos = new Block(floor(random(2,39)),floor(random(2,39)));
    }
}




