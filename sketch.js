


let cogs = [];
let path = [];

const NUM_COGS = 6;

let target = [createVector(50,50), createVector(50,100), createVector(50,150), createVector(50,200),  createVector(50,350), createVector(100,350), createVector(150,350), createVector(200, 350), createVector(250, 350), createVector(300, 350), createVector(350, 350), createVector(350, 300), createVector(350, 150), createVector(350, 100), createVector(350, 50), createVector(300, 50), createVector(250, 50), createVector(200, 50), createVector(150, 50), createVector(100, 50)];

function setup() {

  createCanvas(400, 400);


  for(let i = 0; i<NUM_COGS; i++){

    for(let j = 0; i<target.length; i++){

    //Calculate vector

    
    }

    //push vector to the array

    //cogs.push(createVector(Math.floor(random(-50,50)), Math.floor(random(-50,50))));
}

function draw() {
  background(220);

  translate(200, 200);


  let prevX = 0;
  let prevY = 0;



  for(let i=0; i<cogs.length; i++){
    noFill();
    stroke(150);
    ellipse(prevX, prevY, cogs[i].mag()*2);
    fill(255);
    stroke(0);
    nextX = prevX + cogs[i].x;
    nextY = prevY + cogs[i].y;
    ellipse(nextX, nextY, 5);
    stroke(150);
    line(prevX, prevY, nextX, nextY);

    prevX = nextX;
    prevY = nextY;

    let half = Math.floor(cogs.length/2);

    let coef = map(i, 0,cogs.length, -1*half, half);

    cogs[i].rotate(coef*0.005);

    print(coef);

  }

  path.push({x: nextX, y: nextY});

  noFill();
  stroke(0);
  beginShape();
  
  for(let i = 0; i<path.length; i++){
    vertex(path[i].x, path[i].y);
  }
  endShape();


  if(path.length>250){
    path.slice(-1);
  }


}
