const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,ground,ball

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  ball = Bodies.circle(400,100,40,{restitution:1})
  World.add(world,ball)

  ground = Bodies.rectangle(400,390,800,10,{isStatic:true});
  World.add(world,ground)
}

function draw() {
  background(0);  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y , 40,40)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y , 800,10)
}