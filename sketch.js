var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground();

	divisionObj1 = new Divisions(0,50,20,100);
	divisionObj2 = new Divisions(80,50,20,100);
	divisionObj3 = new Divisions(160,50,20,100);
	divisionObj4 = new Divisions(240,50,20,100);
	divisionObj5 = new Divisions(320,50,20,100);
	divisionObj6 = new Divisions(400,50,20,100);
	divisionObj7 = new Divisions(480,50,20,100);


}

function draw() {
  background(255,255,255); 
  
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));

  }




  ground.display();

  divisionObj1.display();
	divisionObj2.display();
	divisionObj3.display();
	divisionObj4.display();
	divisionObj5.display();
	divisionObj6.display();
	divisionObj7.display();



  drawSprites();
}

for (var k = 0; k<=width; k = k + 80) { 
    Divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
}

for (var j = 40; j<=width; j=j+50){

  plinkos.push(new Plinko(j,75))
}
for (var j = 15; j<=width-10; j=j+50){

  plinkos.push(new Plinko(j,175))
}
for (var j = 40; j<=width; j=j+50){

  plinkos.push(new Plinko(j,275))
}
for (var j = 15; j<=width-10; j=j+50){

  plinkos.push(new Plinko(j,375))
}

for (var j = 0; j < Particle.length; j++){

  Particle[j].display();
}

for (var k = 0; k < Divisions.length; k++){

  Divisions[k].display();
}





