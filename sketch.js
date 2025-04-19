


let cogs = [];
let path = [];
let targe = [];


const NUM_COGS = 60;

function setup() {

  target = [createVector(150,0), 
    createVector(150,10),
    createVector(150,20),
    createVector(150,30),
    createVector(150,40),
    createVector(150,50), 
    createVector(150,60),
    createVector(150,70),
    createVector(150,80),
    createVector(150,90),
    createVector(150,100),
    createVector(150,110),
    createVector(150,120),
    createVector(150,130),
    createVector(150,140),
    createVector(150,150),  
    createVector(100,150),
    createVector(90,150),
    createVector(80,150),
    createVector(70,150),
    createVector(60,150), 
    createVector(50,150),
    createVector(40,150),
    createVector(30,150),
    createVector(20,150),
    createVector(10,150), 
    createVector(0,150),
    createVector(-10,150),
    createVector(-20,150),
    createVector(-30,150),
    createVector(-40,150),
    createVector(-50, 150),
    createVector(-60,150),
    createVector(-70,150),
    createVector(-80,150),
    createVector(-90,150), 
    createVector(-100, 150),
    createVector(-110, 150),
    createVector(-120, 150),
    createVector(-130, 150),
    createVector(-140, 150), 
    createVector(-150, 150),
    createVector(-150, 140),
    createVector(-150, 130),
    createVector(-150, 120),
    createVector(-150, 110),
    createVector(-150, 100),
    createVector(-150, 90),
    createVector(-150, 80),
    createVector(-150, 70),
    createVector(-150, 60), 
    createVector(-150, 50),
    createVector(-150, 40),
    createVector(-150, 30),
    createVector(-150, 20),
    createVector(-150, 10), 
    createVector(-150, 0),
    createVector(-150, -10),
    createVector(-150, -20),
    createVector(-150, -30),
    createVector(-150, -40),
    createVector(-150, -50),
    createVector(-150, -60),
    createVector(-150, -70),
    createVector(-150, -80),
    createVector(-150, -90),
    createVector(-150, -100),
    createVector(-150, -110),
    createVector(-150, -120),
    createVector(-150, -130),
    createVector(-150, -140), 
    createVector(-150, -150),
    createVector(-140, -150),
    createVector(-130, -150),
    createVector(-120, -150),
    createVector(-110, -150),
    createVector(-100, -150),
    createVector(-90, -150),
    createVector(-80, -150),
    createVector(-70, -150),
    createVector(-60, -150),
    createVector(-50, -150),
    createVector(-40, -150),
    createVector(-30, -150),
    createVector(-20, -150),
    createVector(-10, -150), 
    createVector(0, -150),
    createVector(10, -150),
    createVector(20, -150),
    createVector(30, -150),
    createVector(40, -150),
    createVector(50, -150),
    createVector(60, -150),
    createVector(70, -150),
    createVector(80, -150),
    createVector(90, -150),
    createVector(100, -150),
    createVector(110, -150),
    createVector(120, -150),
    createVector(130, -150),
    createVector(140, -150),
    createVector(150, -150),
    createVector(150, -140),
    createVector(150, -130),
    createVector(150, -120),
    createVector(150, -110),
    createVector(150, -100),
    createVector(150, -90),
    createVector(150, -80),
    createVector(150, -70),
    createVector(150, -60),
    createVector(150, -50),
    createVector(150, -40),
    createVector(150, -30),
    createVector(150, -20),
    createVector(150, -10)];
    


  createCanvas(800, 800);

  for(let k = -1*NUM_COGS; k<=NUM_COGS; k++){


    print(k);

    let outC = createVector(0,0);

    for(let n = 0; n<target.length; n++){

      let x = target[n].mag()*Math.cos(target[n].heading() - 2*Math.PI*(k/(NUM_COGS*2+1))*n)/NUM_COGS;
      let y = target[n].mag()*Math.sin(target[n].heading() - 2*Math.PI*(k/(NUM_COGS*2+1))*n)/NUM_COGS;

      outC.add(createVector(x,y));
    
    }

    cogs[k]=outC;

  }
}

function draw() {

  background(220);
  translate(400, 400);

  let prevX = 0;
  let prevY = 0;

  for(let k=-1*NUM_COGS; k<=NUM_COGS; k++){

    let shp = createVector(0,0);

    shp = cogs[k];

    noFill();
    stroke(150);
    ellipse(prevX, prevY, cogs[k].mag()*2);
    fill(255);
    stroke(0);
    nextX = prevX + cogs[k].x;
    nextY = prevY + cogs[k].y;
    ellipse(nextX, nextY, 5);
    stroke(150);
    line(prevX, prevY, nextX, nextY);

    prevX = nextX;
    prevY = nextY;

    cogs[k].rotate(2*Math.PI*(k/(NUM_COGS*2+1))*0.1);

  }

  path.push({x: nextX, y: nextY});

  noFill();
  stroke(0);
  beginShape();
  
  for(let i = 0; i<path.length; i++){
    vertex(path[i].x, path[i].y);
  }
  endShape();


  if(path.length>1000){
    path.shift();
  }

  console.log(path.length);

}
