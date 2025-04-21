


let cogs = [];
let path = [];
let targe = [];


const NUM_COGS = 20;

function setup() {

  target = [createVector(177.675847039624,234.109985901763),
    createVector(123.633490686342,225.622218427494),
    createVector(74.8396995686437,200.864883974418),
    createVector(34.3156872955114,163.64669427392),
    createVector(-4.70433651995688,137.853755476714),
    createVector(-43.7081375222505,176.591205298454),
    createVector(-86.5334731445318,210.787360778809),
    createVector(-137.697947407708,230.337702151159),
    createVector(-192.349028554752,233.17340313144),
    createVector(-245.256809888599,219.116292791948),
    createVector(-291.382676518929,189.294404319153),
    createVector(-326.024784706858,146.907118545637),
    createVector(-345.943998981211,95.9258949946525),
    createVector(-348.758040130138,41.2698708252916),
    createVector(-330.617945542276,-10.4587079889174),
    createVector(-298.648669921875,-55.006287109375),
    createVector(-260.194809345484,-94.146733702898),
    createVector(-221.302827128679,-133.045361281893),
    createVector(-182.415050600816,-171.939782453332),
    createVector(-143.532713301144,-210.828763467194),
    createVector(-104.621117906184,-249.747007575592),
    createVector(-65.7579826049181,-288.616783310058),
    createVector(-26.7887863502503,-327.410958496093),
    createVector(24.6286549420349,-331.623610717773),
    createVector(64.275012365015,-293.738957696354),
    createVector(103.177271754095,-254.831699944252),
    createVector(142.019051362157,-215.984929743924),
    createVector(181.012296742018,-176.986674310693),
    createVector(219.905872342871,-138.088101462558),
    createVector(258.768215545311,-99.2207650257344),
    createVector(297.481962098162,-60.2238924064605),
    createVector(330.619821665376,-16.5637376813065),
    createVector(351.156232922166,34.2683756194942),
    createVector(350.983127342677,88.9307032836956),
    createVector(333.180388478196,140.641547471881),
    createVector(300.251681117392,184.437319510341),
    createVector(255.444952385701,216.061741771579),
    createVector(203.167327445637,232.286375089034),
    createVector(203.167327445637,232.286375089034)];
    


  createCanvas(800, 800);

  for(let k = -1*NUM_COGS; k<=NUM_COGS; k++){


    print(k);

    let outC = createVector(0,0);

    for(let n = 0; n<target.length; n++){

      let x = target[n].mag()*Math.cos(target[n].heading() - 2*Math.PI*(k/(NUM_COGS*2+1))*n)/(NUM_COGS*2+1);
      let y = target[n].mag()*Math.sin(target[n].heading() - 2*Math.PI*(k/(NUM_COGS*2+1))*n)/(NUM_COGS*2+1); //TODO: Refactor as array rotation.

      outC.add(createVector(x,y));
    
    }

    cogs.push({k:k, c:outC});

  }

  cogs.sort((a,b) => b.c.mag() - a.c.mag());
}

function draw() {

  background(220);
  translate(400, 400);
  scale(1, -1);

  let prevX = 0;
  let prevY = 0;

  for(let i=0; i<cogs.length; i++){

    noFill();
    stroke(150);
    ellipse(prevX, prevY, cogs[i].c.mag()*2);
    fill(255);
    stroke(0);
    nextX = prevX + cogs[i].c.x;
    nextY = prevY + cogs[i].c.y; // TODO: Refactor as array addition
    ellipse(nextX, nextY, 5);
    stroke(150);
    line(prevX, prevY, nextX, nextY);

    prevX = nextX;
    prevY = nextY;

    cogs[i].c.rotate(2*Math.PI*(cogs[i].k/(NUM_COGS*2+1))*0.1);

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
