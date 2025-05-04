
let cogs = [];
let path = [];
let target = [];
let drawnTarget = [];
let state = 0;
let cogsSlider;
let speedSlider;

const SHOW = 0;
const DRAW = 1;


let N = 0;

function setup() {

  target = [createVector(179.705315490567, 240.09998718342),
    createVector(169.754540870338, 239.791125702709),
    createVector(159.902790890932, 238.876700934172),
    createVector(149.987549673318, 237.328958829641),
    createVector(140.163398208972, 235.152680393998),
    createVector(130.575900623947, 232.383834934086),
    createVector(121.131929321289, 228.998178100586),
    createVector(111.972504961341, 225.047491307408),
    createVector(103.118763264417, 220.553033515215),
    createVector(94.388127183914, 215.407350263596),
    createVector(86.217908698767, 209.877167249471),
    createVector(78.231832176595, 203.715120922178),
    createVector(70.744011828433, 197.154588767458),
    createVector(63.616040649414, 190.186380615235),
    createVector(56.524247761964, 183.14151314497),
    createVector(49.377897541374, 176.042449339927),
    createVector(42.304448439329, 169.015804276765),
    createVector(35.180442228317, 161.938936634064),
    createVector(28.107994927614, 154.913286743463),
    createVector(20.998096313476, 147.85043334961),
    createVector(13.905148618221, 152.594323160649),
    createVector(6.78687751531498, 159.663984644413),
    createVector(-0.304809112549016, 166.707243194581),
    createVector(-7.41865598678601, 173.772510662079),
    createVector(-14.462379953862, 180.768134081364),
    createVector(-21.552852292955, 187.810186634958),
    createVector(-28.641183830351, 194.839492113237),
    createVector(-35.984522560835, 201.553244249374),
    createVector(-43.832627536059, 207.877928820103),
    createVector(-51.976435526759, 213.640689965244),
    createVector(-60.484975585938, 218.897600708008),
    createVector(-69.227670131922, 223.572867455333),
    createVector(-78.395993442685, 227.758695666995),
    createVector(-87.747608778924, 231.332746478636),
    createVector(-97.251023025513, 234.294560804367),
    createVector(-106.998134007007, 236.670638319235),
    createVector(-116.844140769989, 238.422417096179),
    createVector(-126.761556930542, 239.552697267532),
    createVector(-136.724446953536, 240.065454742461),
    createVector(-146.773540803269, 239.962420238257),
    createVector(-156.680935049775, 239.248548301309),
    createVector(-176.434043329927, 235.948862882704),
    createVector(-186.102175303231, 233.377332915608),
    createVector(-195.520208866373, 230.227103127241),
    createVector(-204.778918080544, 226.469357083589),
    createVector(-213.846622607155, 222.10468774138),
    createVector(-222.586727090106, 217.197351104021),
    createVector(-230.977301101055, 211.769265618194),
    createVector(-238.996414211663, 205.842349730581),
    createVector(-246.711524108117, 199.358549381048),
    createVector(-253.916786553717, 192.494379810077),
    createVector(-260.684532591924, 185.197399255038),
    createVector(-267.065944628716, 177.394244766236),
    createVector(-272.819753732802, 169.392678979487),
    createVector(-278.204349733507, 160.824653223306),
    createVector(-282.941744104028, 152.119736127854),
    createVector(-287.192951680169, 142.987477352713),
    createVector(-290.834171015566, 133.669282364306),
    createVector(-293.864958972065, 124.196664132029),
    createVector(-296.312726346556, 114.478086358775),
    createVector(-298.138081288397, 104.657981409599),
    createVector(-299.343822424812, 94.763864452988),
    createVector(-299.933917817697, 84.821702958346),
    createVector(-299.858098997399, 74.761683782712),
    createVector(-298.870945572853, 64.790791659356),
    createVector(-297.005976028517, 54.960127638802),
    createVector(-294.337519363761, 45.294538767934),
    createVector(-290.98776634532, 35.939049007381),
    createVector(-286.998938405886, 26.792546451018),
    createVector(-282.379950492978, 17.764810919166),
    createVector(-277.39008450985, 9.22211731433901),
    createVector(-271.913071926152, 0.845997915761991),
    createVector(-266.083011167273, -7.22551991514798),
    createVector(-259.89050113678, -15.06682483673),
    createVector(-253.31697265625, -22.73298828125),
    createVector(-246.597921104431, -29.991604728698),
    createVector(-239.570111029148, -37.100394718647),
    createVector(-232.471015625, -44.200703125),
    createVector(-225.316068059504, -51.356873236),
    createVector(-218.358917586803, -58.31521245718),
    createVector(-211.201142267995, -65.474210804663),
    createVector(-204.135285719596, -72.541274675838),
    createVector(-197.115589791276, -79.562170039601),
    createVector(-189.993390530646, -86.685586250126),
    createVector(-183.002570116981, -93.677601165357),
    createVector(-175.916122967792, -100.765259155579),
    createVector(-168.780616424345, -107.901984922699),
    createVector(-161.802193975677, -114.881599754528),
    createVector(-154.693764096797, -121.991244230568),
    createVector(-147.650046000742, -129.036165866665),
    createVector(-140.531332485676, -136.156095736026),
    createVector(-133.532959223581, -143.155664790221),
    createVector(-126.337292991481, -150.352560525308),
    createVector(-119.309984422029, -157.381069830954),
    createVector(-112.302466637404, -164.389784970176),
    createVector(-105.168115341287, -171.525355292572),
    createVector(-98.102413697956, -178.592264232211),
    createVector(-91.047238506684, -185.648644921166),
    createVector(-83.950747498493, -192.746348486556),
    createVector(-76.928289005622, -199.770006886902),
    createVector(-69.784074584437, -206.915442019649),
    createVector(-62.725654296875, -213.975068359375),
    createVector(-55.662755061728, -221.03917441199),
    createVector(-48.673224687875, -228.029899066984),
    createVector(-41.598166004471, -235.106166645507),
    createVector(-34.489936542879, -242.215610670014),
    createVector(-27.389088291415, -249.317672223188),
    createVector(-20.360895149708, -256.347066252231),
    createVector(-13.319511203766, -263.389653339386),
    createVector(-6.17162395477301, -270.373598632812),
    createVector(2.23423147134401, -275.919168167114),
    createVector(11.732828373909, -279.168428955078),
    createVector(21.516497073769, -279.959963684082),
    createVector(31.44944982469, -278.278220520019),
    createVector(40.571504492759, -274.203282470703),
    createVector(48.363728827238, -268.016237287521),
    createVector(55.473528783451, -260.905523827523),
    createVector(62.529639656562, -253.848506348878),
    createVector(69.543554406587, -246.833690414894),
    createVector(76.613647604559, -239.762688814867),
    createVector(83.689103556878, -232.686323771458),
    createVector(90.789840117928, -225.584674871135),
    createVector(97.903073191549, -218.470527852624),
    createVector(104.919509054776, -211.453190481513),
    createVector(111.979337958268, -204.392454494775),
    createVector(119.105692298058, -197.265184524208),
    createVector(126.173410022985, -190.196558702439),
    createVector(133.221029460651, -183.148033750262),
    createVector(140.213822691228, -176.154342049527),
    createVector(147.29004669287, -169.077208858113),
    createVector(154.425535311198, -161.940803435389),
    createVector(161.425171237141, -154.940268160104),
    createVector(168.606711175162, -147.757805500775),
    createVector(175.605237104569, -140.758380364645),
    createVector(182.738451583653, -133.624249373357),
    createVector(189.811250676794, -126.550541530493),
    createVector(196.799468229615, -119.561426095422),
    createVector(203.841210850477, -112.518778715133),
    createVector(210.980949990913, -105.378122224172),
    createVector(218.096247584428, -98.261910420507),
    createVector(225.068584108352, -91.288678054809),
    createVector(232.215497840892, -84.140846049916),
    createVector(239.306722452491, -77.048710321188),
    createVector(246.381381760221, -69.973142024725),
    createVector(253.425650495737, -62.927968205213),
    createVector(260.457509972304, -55.895205239057),
    createVector(267.509974133316, -48.841834941059),
    createVector(274.602108085304, -41.748789755105),
    createVector(281.674844237677, -34.675207186089),
    createVector(288.619965543784, -27.476265824055),
    createVector(295.314956849254, -20.005480890935),
    createVector(301.685032945387, -12.325221775071),
    createVector(307.744286765158, -4.38740534268302),
    createVector(313.428242022693, 3.76764497153498),
    createVector(318.745292423069, 12.214783926085),
    createVector(323.623516899049, 20.92798551403),
    createVector(328.044735105522, 30.00051304956),
    createVector(331.866879608631, 39.292368596197),
    createVector(334.978902645111, 48.652197546959),
    createVector(337.414757201969, 58.425796017722),
    createVector(339.005617702007, 68.341132737995),
    createVector(339.673734367787, 78.370072471127),
    createVector(339.488308341741, 88.281561909151),
    createVector(338.675513923959, 98.291814009995),
    createVector(337.257388493343, 108.118821166996),
    createVector(335.194648869382, 117.984561829418),
    createVector(332.572180445911, 127.499999068827),
    createVector(329.301234736442, 136.997027359009),
    createVector(325.461152308015, 146.213632749469),
    createVector(321.073080434724, 155.128679519892),
    createVector(316.031887099146, 163.926392068863),
    createVector(310.599208320221, 172.1662642999),
    createVector(304.532319162534, 180.227969589085),
    createVector(297.98023160058, 187.883427554518),
    createVector(291.137891924902, 194.943017736674),
    createVector(283.693811253905, 201.728838777542),
    createVector(275.832188973203, 208.040792664289),
    createVector(267.77675363441, 213.723642957062),
    createVector(259.156840957729, 219.032330254465),
    createVector(250.404502168819, 223.692492519617),
    createVector(241.339888673136, 227.815510209054),
    createVector(231.984147744774, 231.380247602463),
    createVector(222.358426657831, 234.365568979532),
    createVector(212.727510310104, 236.699484278709),
    createVector(202.879388586943, 238.44215917185),
    createVector(192.833698834618, 239.573967041522),
    createVector(182.867679881453, 240.070590028763)];

    N = target.length;

    cogsSlider = createSlider(1,300,150,1);
    cogsSlider.position(40,45);
    cogsSlider.size(150);

    speedSlider = createSlider(0.01, 1, 0.1, 0.01);
    speedSlider.position(40,95);
    speedSlider.size(150);
  
    calculateCogs();

    createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(220);
  noStroke();
  textAlign(LEFT);
  fill(100);
  translate(0,0);
  scale(1,1);
  textSize(16);
  textStyle(BOLD);
  text("No. of epicircles", 40, 40);
  text(cogsSlider.value(),200,60);
  text("Animation speed", 40,90);
  text(speedSlider.value(), 200, 110);

  fill(150);
  textStyle(NORMAL);
  textSize(24);
  textAlign(CENTER);
  text("draw something...", width/2, 50);

  translate(width/2, height/2);
  scale(1, -1);

  noFill();
  stroke(200);
  strokeWeight(4);
  beginShape();

  for(let i = 0; i<target.length; i++){
    vertex(target[i].x, target[i].y);
  }

  endShape(CLOSE);

  let drawingSpeed = speedSlider.value();

  let numCogs = cogsSlider.value();


  switch(state){

    case SHOW:

      if(target.length < numCogs){

        numCogs = target.length;

        cogsSlider.value(target.length);

      }

      let prevX = 0;
      let prevY = 0;

      for(let i=0; i<numCogs; i++){

        noFill();
        stroke(150);
        strokeWeight(1);
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

        cogs[i].c.rotate(2*Math.PI*(cogs[i].k/N)*drawingSpeed);

      }

      path.push({x: nextX, y: nextY});

  case DRAW:


    
  }

  noFill();
  stroke(0);
  strokeWeight(1);
  beginShape();
  
  for(let i = 0; i<path.length; i++){
    vertex(path[i].x, path[i].y);
  }
  endShape();

  if(path.length>1000){
    path.shift();
  }

}

function mousePressed(){

  if(mouseX>200 || mouseY>120){
    target = [];
    path = [];
  
    state = DRAW;
  }
}


function mouseDragged(){

  if(state==DRAW){

    let mx = mouseX - width/2;
    let my = height/2 - mouseY;
    target.push(createVector(mx, my));
    path.push({x: mx, y:my});
  
  }

}

function mouseReleased(){

  if(state==DRAW){

    path = [];

    calculateCogs();
  
    state = SHOW;

  }

}

function calculateCogs(){

  N = target.length;

  cogs = [];

  let k = 0;

  for(let i = 0; i<N; i++){

    const j = i % 2 == 0 ? i / 2 : N - ((i+1) / 2);
    
    k = ((j + N / 2) % N) - N / 2;

    let outC = createVector(0,0);
    
    for(let n = 0; n< N; n++){
      
      outC.add(p5.Vector.rotate(target[n],-2*Math.PI*(k/N)*n));

    }

    outC.div(N);

    cogs.push({k:k, c:outC});

  }

  //cogs.sort((a,b) => Math.abs(a.k) - Math.abs(b.k)); //b.c.mag() - a.c.mag());

}