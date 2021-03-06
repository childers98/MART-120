var x = 100;
            var y = 190;
            var diameter = 30;

            var rectX = 150;
            var rectY = 270;
            var leftrectX = 0;
            var w = 60;
            var h = 10;

            var size = 28;
            var count = 0;
            var sizeDirection= 2;

            var mouthX = 100;
            var mouthY= 190;
            var mouthDirection= 1;

            var legX = 50;
            var legY = 415;
            var legZ = 140
            var width = 10;
            var height = 50;

            var movement;
            function setup()
            {
                createCanvas(300,500);
                movement = Math.floor(Math.random() *10) + 1;
            }
            function draw()
            {
                background(100);
               

            // right arm
            fill(10);
            rect(rectX,rectY,w,h);
            rect(rectX,rectY,60,10);
            if(rectY >= 500 || rectY <= 0)
            {
            movement *= -1;
            }
            rectY += movement;

            // left arm
            fill(10);
            rect(leftrectX,rectY,w,h);
            rect(leftrectX,rectY,40,10);
            if(rectY >= 500 || rectY <= 0)
            {
              movement *=-1;
            }
            rectY += movement;
                         
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
            circle(mouthX, mouthY, 30);
            mouthX+=mouthDirection;
            if(mouthX >= 100 || mouthX <= 0)
            {
                mouthDirection *= -1;
            }
            mouthY+=mouthDirection
            if(mouthY >= 190 || mouthY <= 150)
            {
                mouthDirection *= -1;
            }

            // nose
            line(95,150,95,130);

            // body
            fill(90, 74, 97);
            rect(50,255,100,150);

            // right leg
            fill(10);
            rect(legX,legY,5,50);
            if(legX <= 0 || legX >= 500)
            {
                movement *= -1;
            }
             legX += movement;

             //left leg
             fill(10);
             rect(legZ,legY,5,50);
             if(legZ <= 0 || legZ >= 500)
             {
                 movement *= -1;
             }
             legZ += movement;

            //shoes
            strokeWeight(0);
            fill(102,0,102);
            rect(25,455,40,20);
            rect(135,455,40,20);

            //title
            fill(221,190,222);
            textSize(size);
            size+= sizeDirection;
            count++;
            if(count > 5)
            {
                sizeDirection *=-1
                count = 0;
            }
            text("Abstraction at its Finest",5,30)
            
            fill(221,190,222);
            textSize(22);
            text("Paige Childers",150,490);
            }
