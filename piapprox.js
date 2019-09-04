let r = 200;
let total = 0;
let circle = 0;
let record_pi = 0;

function setup() {
  createCanvas(405,405);
  background(0);
  translate(width/2, height/2);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(0,0,r*2,r*2);
  rectMode(CENTER);
  rect(0,0,r*2,r*2);
  
}

function draw() {
  
  translate(width/2, height/2);
  var pi = 0;
  
  for(var i=0; i<100; i++){
    
  var x = random(-r,r);
  var y = random(-r,r);
  total++;
  
  var d = sqrt(x*x + y*y);
  
  if(d < r){
    circle++;
    stroke(0,255,0,100);
  } else {
    stroke(255,0,0,100);
  }
