const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,height,1000,20)
    box1 = new Box(400,650,70,70);
    box2 = new Box(600,650,70,70);
    pig1 = new pig(500,650);
    log1 = new log(500,580,300,PI/2);
    box3 = new Box(400,520,70,70);
    box4 = new Box(600,520,70,70);
    pig2 = new pig(500,520);
    log2 = new log(500,480,300,PI/2)
    box5 = new Box(500,450,70,70);
    log3 = new log(430,450,150,PI/4);
    log4 = new log(570,450,150,-PI/4);
    bird1 = new Bird(100,100,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}