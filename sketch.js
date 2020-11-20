//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {isStatic : true};
  ground = Bodies.rectangle(200,390,400,20, options);
  console.log(ground);
  console.log(ground.position);
  console.log(ground.position.x);
  console.log(ground.position.y);
  World.add(myWorld, ground);
  var balloptions = {restitution: 0.8}
  ball = Bodies.circle (200,100,30,balloptions)
  World.add(myWorld, ball)
}

function draw() {
  background("cornflowerblue");
  
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode (RADIUS)
  ellipse (ball.position.x,ball.position.y, 30, 30 )
  
}