
var x= width/2; //BallX
var y= height/2; //BallY
var w=50;
var h=50;
var speedX=2; //RichtungX
var speedY=2; //RichtungY
var score=0; //Punktezahl
 
//Ende des Spiels
var gameEnde=function(){      
  fill(255, 255, 255);
  textSize(50);
  text("GAMEOVER",100,249);
  fill(255, 0, 0);
  textSize(35);
  text("Punktezahl: " ,140, 300);
  fill(0, 255, 9);
  textSize(35);
  text(score, 325, 300);
};
 
//Punkteanzahl
var points=function(x,y){
  fill(255, 0, 0);
  textSize(18);
  text("Points:", 10,25);
  text(score, 70, 25);
};
 
rectMode(CENTER);
 
//DRAW
draw = function(){
  background(36, 32, 32); //Hintergrundfarbe
     
  //Zwischenlinie
  noStroke();
  fill(102, 255, 168);
  rect(238,272,5,536);
 
  //Ball springt
  fill(247, 235, 0);
  ellipse(x,y,30,30);
 
  //RotesPaddle
  if(x<28 && x>25){
      if(y<(pmouseY+60) && y>(pmouseY-60)){
         speedX=-speedX; //Richtungsänderung
         score++; //Erhöhung
      }    
  }
  //LilaPaddle
  if(x<458 && x>455){
      if(y<(pmouseY+60) && y>(pmouseY-60)){
         speedX=-speedX; //Richtungsänderung
         score++; //Erhöhung
      }    
  }
  //KeinPaddle/GAMEOVER
  if (x>485 || x<10){
      gameEnde(); //Beenden
  }
  //UntereSeite
  if(y>525){
      speedY=-speedY; //Richtungsänderung
  }
  //ObereSeite
  else if(y<8){
      speedY=-speedY; //Richtungsänderung
  }
 
  //Bewegung des Balls
  x=x+speedX;
  y=y+speedY;
 
  //blauesPaddle
  fill(13, 128, 252);
  rect(10,pmouseY,17,114);
  //LilaPaddle
  fill(138, 17, 186);
  rect(487,pmouseY,17,114);
 
  points(100, -10);//ScoreUpdaten
};
    
