var canvas;
var music;
var ball,edges;
var box1,box2,box3,box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    box1=createSprite(0,580,360,30);
    box1.shapeColor="blue";
    box2=createSprite(295,580,200,30);
    box2.shapeColor="orange";
    box3=createSprite(515,580,200,30);
    box3.shapeColor="red";
    box4=createSprite(740,580,220,30);
    box4.shapeColor="green";

    ball=createSprite((random(20,750),100,5,5));
    ball.shapeColor=rgb(255,255,255);
    ball.velocityY = 7; 
    ball.velocityX = 9;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(box1.isTouching(ball)&&ball.bounceOff(box1)){
        ball.shapeColor="blue";
        
    }
    if(box3.isTouching(ball)&&ball.bounceOff(box3)){
        ball.shapeColor="red";
        music.play();
    }
    if(box2.isTouching(ball)){
        ball.shapeColor="orange";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }
   
    if(box4.isTouching(ball)&&ball.bounceOff(box4)){
        ball.shapeColor="green";
        
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
