var nd = true
var space = 10;
var letts = ["Hello World!"];
var fontSz = 30;
var check = false
var h = fontSz;
var c;
function setup() {
  c = createCanvas(windowWidth, windowHeight);
  c.drop(loadFile);
}

function loadFile(file) {
  let splitString = split(file.data, "");
  letts = splitString;
}

function draw() {
  space=0;
  h = fontSz;
  textSize(fontSz);
  background(220);
    if(keyIsPressed == false){
      nd = true;
    }
  if(keyIsPressed && nd == true){
    if(keyCode == 8){
        shorten(letts);
        nd = false
       }
    else if(keyCode == 13 || keyCode == 16 || keyCode == 17 || keyCode == 91 || keyCode == 13 || keyCode == 9 || keyCode == 18 || keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40 || keyCode == 27 || keyCode == 20){/*nothing*/}
    else if(keyCode != 8){
    letts.push(key);
      nd = false
  }
  }
  for(var i=0; i < letts.length; i++){
    text(letts[i], space, h);
    space+= textWidth(letts[i]);
  if(space >= width - textWidth("m")){
     h += fontSz;
     space = 0;
     }
  }
  fill(0);
  if(check){
  line(space+1,h+1, space+1, h-fontSz+5)
}
  if(frameCount % 40 === 0 ){
    check = true
  }
  if(frameCount % 80 === 0){
    check = false
  }

}
function mousePressed() {
  if(mouseButton == RIGHT){
    let sep = '';
    var savestring = join(letts, sep);
    // for(let f = 0; f < letts.length; f++){
    //   savestring += letts[f];
    // }
    saveStrings(savestring, "untitled.txt");
}
}
