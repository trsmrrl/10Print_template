function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
    
  fill ((255,0,255), random(255), random(255));
  
  let x = random(width);
  let y = random(height);
  
  // make height and width of rectangle random as well
  let rWidth = (100);
  let rHeight = (100);
  rect
  (x, y, rWidth, rHeight);
  
}