

var umgedreht = false;

 background(129, 222, 188);
 
 draw= function() {
     
    
    
        
       
        
        //1
        
        
        fill(255, 255, 255);
        noStroke();
        rect(15,80,100,100,0);
        
        textSize(44);
        fill(214, 47, 47);
        text("1",49,124,70,69);
        
        
        //2
        fill(255, 255, 255);
        noStroke();
        rect(139,80,100,100,0);
        
        textSize(44);
        fill(214, 47, 47);
        text("2",171,124,70,69);
        
        
        //3
        fill(255, 255, 255);
        noStroke();
        rect(262,80,100,100,0);
        
        textSize(44);
        fill(214, 47, 47);
        text("3",296,124,70,69);
        
        //4
        fill(255, 255, 255);
        noStroke();
        rect(15,203,100,100,0);
        
        textSize(44);
        fill(214, 47, 47);
        text("2",47,231,70,69);
        
        //5 
        fill(255, 255, 255);
        noStroke();
        rect(141,201,100,100,0);
        
        textSize(44);
        fill(214, 47, 47);
        text("1",178,231,70,69);
        
        //6
        fill(255, 255, 255);
        noStroke();
        rect(264,201,100,100,0);
        
        textSize(44);
        fill(214, 47, 47);
        text("3",294,230,70,69);
        
    
    
    
    
    fill(255, 0, 0);
    textSize(16);
    
    
 };
 
 var mouseClicked = function() {
     if(mouseX>39 && mouseX<180 && mouseY>76 && mouseY<150) {
        println(umgedreht);
        fill(158,32,158);
        fill(112, 95, 95);
        ellipse(75,118,20,20);
        if (umgedreht) {
            umgedreht = false;
            // male karte richtig herum
        } else {
            umgedreht = true;
            // male die karte falsch herum
        }
      
    }
 };
 
