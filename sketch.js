const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;

function preload() {


backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750,700,1500,10);
  ground2 = new Ground(1600,350,10,10);

  hero = new Hero(700,400,350);
  fly = new Fly(hero.body,{x:700,y:60});

  block1 = new Block(1000,660,70,70);
  block2 = new Block(1000,590,70,70);
  block3 = new Block(1000,520,70,70);
  block4 = new Block(1000,450,70,70);
  block5 = new Block(1000,380,70,70);
  block6 = new Block(1000,310,70,70);
  block7 = new Block(1000,240,70,70);

  block8 = new Block(1100,660,70,70);
  block9 = new Block(1100,590,70,70);
  block10 = new Block(1100,520,70,70);
  block11 = new Block(1100,450,70,70);
  block12 = new Block(1100,380,70,70);
  block13 = new Block(1100,310,70,70);
  block14 = new Block(1100,240,70,70);
  block15 = new Block(1100,170,70,70);
  block16 = new Block(1100,100,70,70);

  block17 = new Block(1200,660,70,70);
  block18 = new Block(1200,590,70,70);
  block19 = new Block(1200,520,70,70);
  block20 = new Block(1200,450,70,70);
  block21 = new Block(1200,380,70,70);
  block22 = new Block(1200,310,70,70);
  block23 = new Block(1200,240,70,70);
  block24 = new Block(1200,170,70,70);

  block25 = new Block(1300,660,70,70);
  block26 = new Block(1300,590,70,70);
  block27 = new Block(1300,520,70,70);
  block28 = new Block(1300,450,70,70);
  block29 = new Block(1300,380,70,70);
  block30 = new Block(1300,310,70,70);

  monster = new Monster(1600,250,350)

}

function draw() {
  background(backgroundImg);


  Engine.update(engine);

  
  ground.display();
  hero.display();
  fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  monster.display();
  

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

