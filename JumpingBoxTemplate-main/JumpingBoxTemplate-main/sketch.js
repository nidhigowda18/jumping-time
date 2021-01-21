var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    line1=createSprite(3,600,5,1500);
    line1.shapeColor="grey";
    line1.visible=false;

    line2=createSprite(798,600,5,1500);
    line2.shapeColor="grey";
    line2.visible=false;

    line3=createSprite(5,2,1595,5);
    line3.shapeColor="grey";
    line3.visible=false;

    line4=createSprite(50,550,165,5);
    line4.shapeColor="blue";
    //line4.visible=false;

    line5=createSprite(220,550,165,5);
    line5.shapeColor="blue";
    //lin5.visible=false;

    line6=createSprite(390,550,165,5);
    line6.shapeColor="blue";
    //line6.visible=false;

    line7=createSprite(560,550,165,5);
    line7.shapeColor="blue";
    //line7.visible=false;

    line8=createSprite(730,550,165,5);
    line8.shapeColor="blue";
    //line8.visible=false;

    box=createSprite(random(20,750),50,25,25);
    box.shapeColor="white";
    box.velocityX=5;
    box.velocityY=-5;
   
    rect1=createSprite(50,600,170,100);
    rect1.shapeColor="violet";

    rect2=createSprite(220,600,170,100);
    rect2=shapeColor="grey";

    rect3=createSprite(390,600,170,100);
    rect3.shapeColor="yellow";

    rect4=createSprite(560,600,170,100);
    rect4.shapeColor="turquoise";

    rect5=createSprite(730,600,170,100);
    rect5.shapeColor="orange";

   

}

function draw() {
    background("black");
    createEdgeSprites();
    box.bounceOff(line1);
    box.bounceOff(line2);
    box.bounceOff(line3);
   
     if(box.isTouching(line4))
    {
        box.shapeColor="violet";
        box.bounceOff(line4);
    }

    if(box.isTouching(line5))
    {
        box.shapeColor="grey";
        box.bounceOff(line5);
        box.velocityX=0;
        box.velocityY=0;
        
    }

    if(box.isTouching(line6))
    {
        box.shapeColor="yellow";
        box.bounceOff(line6);
    }

    if(box.isTouching(line7))
    {
        box.shapeColor="turquoise";
        box.bounceOff(line7);
    }

    if(box.isTouching(line8))
    {
        box.shapeColor="orange";
        box.bounceOff(line8);
    }

     drawSprites();
    
}









