            function setup()
            {
                createCanvas(300,500);
            }
            function draw()
            {
                background(100);
               
            // head
            strokeWeight(5);
            fill(172, 131, 91);
            ellipse(100,150,175,200);
           
            // eyes
            strokeWeight(10);
            fill(0);
            point(70,125);
            point(120,125);
        
            // hair
            strokeWeight(5);
            fill(110,72,35);
            triangle(100,40,30,70,10,170);
            triangle(140,48,170,50,200,200);
            triangle(150,50,200,150,200,120);
            triangle(10,225,20,60,55,45);
            triangle(20,100,60,55,150,50);

            // mole
            strokeWeight(2);
            point(105,135);

            // mouth
            strokeWeight(10);
            fill(10);
            circle(100, 190, 30);
        
            // nose
            line(95,150,95,130);

            // body
            fill(90, 74, 97);
            rect(50,255,100,150);
            
            // right arm
            fill(10, 24, 120);
            rect(150,270,60,10);
            // left arm
            rect(0,270,40,10);
            // left leg
            rect(50,415,10,50);
            // right leg
            rect(140,415,10,50);

            //shoes
            strokeWeight(0);
            fill(102,0,102);
            rect(25,455,40,20);
            rect(135,455,40,20);
            
            fill(221,190,222);
            textSize(22);
            text("Paige Childers",150,490);
            }
