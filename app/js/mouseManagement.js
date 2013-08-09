
  var currentMousePos = { x: -1, y: -1 };
  jQuery(document).mousemove(function(event) {
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
  });

  function drawHoverMenu () {
    var targetPlanetLowercase = targetPlanet.toLowerCase();

    if(screenDepth >= 0.3 && gameData.planet[targetPlanetLowercase].terrafomed){
      for(var arr in planetSegments){
        for (var i = 0; i < planetSegments[arr].length; i++) {
          var location = planetSegments[arr][0],
              occupied = planetSegments[arr][1];

          var x = (Math.sin( planetPosition +location) * (stageX / 2.2)) + canvasWidth / 2;
          var y = (Math.cos( planetPosition+location) * (stageX / 2.2)) + stageY ;


          if(currentMousePos.y > y && currentMousePos.y < y + (unit*8)  && currentMousePos.x > x && currentMousePos.x < x + (unit*8) ){
           context.save();
            context.beginPath();
            context.translate(currentMousePos.x,currentMousePos.y);
            context.fillStyle = "rgba(150, 155, 160, 0.7)";
            context.rect(0, 0,100,60);
            context.closePath();
            context.fill(); 
            context.restore();
            context.beginPath();

            context.fillStyle="rgba(250, 255, 260, 1)";
            context.font="1em Arial";
            var locationText = "Location " + arr;
            context.fillText(locationText,currentMousePos.x+ (unit*2),currentMousePos.y + (unit*4))
            context.fill();

            context.fillStyle="rgba(50, 255, 60, 1)";
            context.font="1em Arial";
            var locationText;
            if(occupied){
              locationText = "Flats";
            }else{
              locationText = "Unoccupied";
            }
            context.fillText(locationText,currentMousePos.x+ (unit*2),currentMousePos.y + (unit*8))
            context.fill();

            break;

          }

        }
      }
    }else if(screenDepth <= 0.020000000000000087 ){
      
      for(var obj in planets){
          var x = canvasWidth / planets[obj].distance;
          var y = canvasHeight/2 ;
          var size = (10000 * planets[obj].size);

          if(currentMousePos.y > y - (unit*size) && currentMousePos.y < y + (unit*size)  && currentMousePos.x > x +((unit*size)*0.5)  && currentMousePos.x < x + ((unit*size)*2.5) ){
            console.log(planets[obj].name);
     
           context.save();
            context.beginPath();
            context.translate(currentMousePos.x,currentMousePos.y);
            context.fillStyle = "rgba(150, 155, 160, 0.9)";
            context.rect(0, 0,100,70);
            context.closePath();
            context.fill(); 
            context.restore();

            context.save();
            context.beginPath();
            context.translate(currentMousePos.x,currentMousePos.y);
            context.fillStyle=planets[obj].build[1][2];
            context.font="1.5em Arial";
            var locationText = planets[obj].name;
            context.fillText(locationText,(unit*100),(unit*300))
            context.fill();
            context.restore();

            //workforce
            context.save();
            context.beginPath();
            context.translate(currentMousePos.x,currentMousePos.y);
            context.fillStyle="rgba(0, 155, 0, 1)";
            context.font="1em Arial";
            var locationText = "Workforce: " + gameData.planet[obj].workforce.locations.length;
            context.fillText(locationText,(unit*100),(unit*500))
            context.fill();
            context.restore();

            //factory
            context.save();
            context.beginPath();
            context.translate(currentMousePos.x,currentMousePos.y);
            context.fillStyle="rgba(155, 0, 0, 1)";
            context.font="1em Arial";
            var locationText = "Production: " + gameData.planet[obj].production.locations.length;
            context.fillText(locationText,(unit*100),(unit*700))
            context.fill();
            context.restore();

            //teraformed
            context.save();
            context.beginPath();
            context.translate(currentMousePos.x,currentMousePos.y);
            context.fillStyle="rgba(5, 50, 50, 1)";
            context.font="1em Arial";
            var locationText = "Tera: " +gameData.planet[obj].terrafomed ;
            context.fillText(locationText,(unit*100),(unit*900))
            context.fill();
            context.restore();

            break;

          }
      }
    }
  }

  function mouseClick (e) {
    context.rect(canvasWidth-(canvasWidth/6),canvasHeight-(unit*15),canvasWidth/7,canvasHeight/15);
    //alert(e.y);
    if(e.x >= canvasWidth-(canvasWidth/6) && e.x <= (canvasWidth-(canvasWidth/6)) + canvasWidth/7  && e.y >= canvasHeight -(canvasHeight/10) && e.y <= (canvasHeight -(canvasHeight/10))+ canvasHeight/15){
      
    generation++;
    food+= 0.2;
      //alert('generation' + generation);
    }
   
  }