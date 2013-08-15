
  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame       ||
      window.mozRequestAnimationFrame          ||
        function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
  })();
  
  var canvas, context, toggle, starSize,canvasHeight,canvasWidth,stageX,stageY;
  var cloudsArr = [];
  var starsArr = [];
  var planetSegments = [];
  var buildingLocations = [];
  var pulsate;
  var planetPosition = 0;
  var gameTime = 12345678;
  var unit =0;
  var generation =0;
  var food =0;
  var screenDepth;
  var alpha = 1;
  var alpha2 = 0.8;
  var targetPlanet = "Earth";
  var drawmenu = false;
jQuery(document).ready ( function () {
  init();
});
  (function animloop(){
    requestAnimFrame(animloop);
    render();
  })();
  
  function init() {
    canvasWidth = jQuery('body').width();
    canvasHeight = jQuery('body').height();
    createBackgound();
    createPlanetSegments();
    canvas = document.createElement( 'canvas' );
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    screenDepth = planets[targetPlanet.toLowerCase()].size;

    unit = canvasWidth / 300;
    pulsate = canvasWidth/4.5;
    window.addEventListener("mousedown", mouseClick, true);
    window.addEventListener( "keydown", doKeyDown, true);

    context = canvas.getContext( '2d' );
    context.fillStyle = "black";
    context.rect(0, 0, canvasWidth, canvasHeight);
    context.fill();

    document.body.appendChild( canvas );
  }

  function doKeyDown (e) {
    switch(e.keyCode)
    {
    //Left Arrow
    case 37:
      planetPosition += 0.05;
      break;
    //Up arrow
    case 38:
      if(screenDepth  < 1.2){
        screenDepth += 0.05;
      }
      break;
    //right arrow
    case 39:
      planetPosition -= 0.05;
      break;
    //down arrow
    case 40:
      if(screenDepth  > 0.05){
      screenDepth -= 0.05;
      }
      break;
    //1 - mars
    case 49:
      if(screenDepth <= 0.3){
        targetPlanet = "Venus";
      }
      break;
    //2 - earth
    case 50:
      if(screenDepth <= 0.3){
        targetPlanet = "Earth";
      }
      break;
    //3 - jupiter
    case 51:
      if(screenDepth <= 0.3){
        targetPlanet = "Jupiter";
      }
      break;
    //4 - saturn
    case 52:
      if(screenDepth <= 0.3){
        targetPlanet = "Saturn";
      }
      break;
    default:
    }

  }

  function render() {
    if(context){
      context.clearRect(0,0,canvasWidth,canvasHeight);
      drawBackground();

      stageX = canvasWidth * screenDepth;
      unit = (stageX / 300 );

      stageY = canvasHeight * screenDepth;
      if(stageY > (canvasHeight/2))
      {
      stageY = stageY;
      }else{
        stageY = canvasHeight/2;
      }
      
      if(screenDepth >= 0.3){

        drawPlanet(context);
        drawWorkforce();
        //drawLab();
       // drawFactory();
        drawSections();
      }else{
        drawSun();
        drawSolarSystem();
      }
        
      drawHoverMenu();

      drawDashboard();
    }
  }
  
  function createBackgound () {
    for (i = 0; i <= 1000; i++) {
      var star = [];
      // Get random positions for stars.
      var x = Math.floor(Math.random() * (canvasWidth - 1));
      var y = Math.floor(Math.random() * (canvasHeight - 1));
      toggle = !toggle;

      starSize = toggle ? 0.8 :  0.2;
      starColour = toggle ? 'white' :  'aqua';

      star.push(x,y,starSize,starColour);
      starsArr.push(star);
    }
    for (i = 0; i <= 70; i++) {
      var cloud = [];
      // Get random positions for stars.
      var size = (Math.random() * 1 + 0.5).toFixed(3);
      var speed = (Math.random()*0.00001+0.000001).toFixed(8);
      toggle = !toggle;

      var direction = toggle;

      cloud.push(size,speed,direction);
      cloudsArr.push(cloud);
    }
  }

  function drawSun() {

    
    var colour = "rgba(255, 255, 0, " + alpha +")";
    var colour2 = "rgba(255, 255, 0, " + alpha2 +")";
    pulsate += 0.2;
    
        context.beginPath();    
        context.fillStyle = colour;
        context.arc( -(canvasHeight/4), canvasHeight /2, pulsate, 0, Math.PI * 5, true );
        context.closePath();
        context.fill(); 

        context.beginPath();    
        context.fillStyle = colour2;
        context.arc( -(canvasHeight/4), canvasHeight /2, pulsate /0.9, 0, Math.PI * 5, true );
        context.closePath();
        context.fill(); 
      
      if (pulsate >= canvasWidth/3.5) {
        pulsate = canvasWidth/4.5;
        alpha = 0.8;
        alpha2 = 0.8;
      }
      context.fillStyle = 'gold';
      context.beginPath();
      context.arc( -(canvasHeight/4) , canvasHeight /2, canvasWidth/4, 0, Math.PI * 5, true );
      context.closePath();
      context.fill(); 

      alpha  -= 0.00219;
      alpha2 -= 0.0029;
    
  }

  function createPlanetSegments () {
    
    for (var i = 0; i <= 17; i++) {
      var radians = (i / 90 * Math.PI) * 10;
      var planetSegment =[];
      planetSegment.push(radians, false);
      planetSegments.push(planetSegment);

    };
  }

  function drawBackground() {
    for (var arr in starsArr) {
      for (var i = 0; i < starsArr[arr].length; i++) {
        // Draw an individual star.
        context.fillStyle = starsArr[arr][3];
        context.beginPath();
        context.rect(starsArr[arr][0], starsArr[arr][1], starsArr[arr][2], starsArr[arr][2]);
        context.closePath();
        context.fill();
      }
    }
  }

  function drawSolarSystem () {
    var targetPlanetLowercase = targetPlanet.toLowerCase();

    //draw target planet last
    for(var obj in planets){
      if(obj != targetPlanetLowercase) {
        var grd = context.createRadialGradient(canvasWidth/planets[obj].distance, canvasHeight/2, canvasWidth / (2 / planets[obj].size), canvasWidth/planets[obj].distance, canvasHeight/2, canvasWidth / (3 / planets[obj].size));
        grd.addColorStop(0,planets[obj].build[0][1]);
        grd.addColorStop(1,planets[obj].build[0][2]);
        context.beginPath();    
        context.fillStyle = grd;
        context.arc( canvasWidth / planets[obj].distance , canvasHeight/2, canvasWidth / (2 / planets[obj].size), 0, Math.PI * 5, true );
        context.closePath();
        context.fill(); 

        grd = context.createRadialGradient(canvasWidth/planets[obj].distance, canvasHeight/2, canvasWidth / (2 / planets[obj].size), canvasWidth/planets[obj].distance, canvasHeight/2, canvasWidth / (3 / planets[obj].size));
        grd.addColorStop(0,planets[obj].build[1][1]);
        grd.addColorStop(1,planets[obj].build[1][2]);
        context.beginPath();    
        context.fillStyle = grd;
        context.arc( canvasWidth / planets[obj].distance , canvasHeight/2, canvasWidth / (2.3 / planets[obj].size), 0, Math.PI * 5, true );
        context.closePath();
        context.fill(); 
      }

      //draw target planet
      grd = context.createRadialGradient(canvasWidth/planets[targetPlanetLowercase].distance, stageY, stageX / planets[targetPlanetLowercase].build[0][3], canvasWidth/planets[targetPlanetLowercase].distance, stageY, stageX / planets[targetPlanetLowercase].build[1][3]);
      grd.addColorStop(0,planets[targetPlanetLowercase].build[0][1]);
      grd.addColorStop(1,planets[targetPlanetLowercase].build[0][2]);
      context.beginPath();    
      context.fillStyle = grd;
      context.arc( canvasWidth / planets[targetPlanetLowercase].distance , stageY, stageX / planets[targetPlanetLowercase].build[0][3], 0, Math.PI * 5, true );
      context.closePath();
      context.fill(); 

      grd = context.createRadialGradient(canvasWidth/planets[targetPlanetLowercase].distance, stageY, stageX/planets[targetPlanetLowercase].build[0][3], canvasWidth/2, canvasHeight, canvasWidth/2);
      grd.addColorStop(0,planets[targetPlanetLowercase].build[1][1]);
      grd.addColorStop(1,planets[targetPlanetLowercase].build[1][2]);
      context.beginPath();    
      context.fillStyle = grd;
      context.arc( canvasWidth / planets[targetPlanetLowercase].distance , stageY, stageX / planets[targetPlanetLowercase].build[1][3], 0, Math.PI * 5, true );
      context.closePath();
      context.fill(); 

    }
    
  }

  function drawPlanet(context) {

    //clear segments
    for (arr in planetSegments) {
      planetSegments[arr][1] = false;
    };

    var targetPlanetLowercase = targetPlanet.toLowerCase();
    var planetArr = planets[targetPlanetLowercase].build;
    for(var arr in planetArr){
      var layerName = planetArr[arr][0],
          gradColour1 = planetArr[arr][1],
          gradColour2 = planetArr[arr][2],
          gradRadius = planetArr[arr][3],
          layerRadius = planetArr[arr][4];
      var grd = context.createRadialGradient(canvasWidth/2, stageY, stageX/gradRadius, canvasWidth/2, stageY, stageX/(gradRadius*0.1));
      grd.addColorStop(0,gradColour1);
      grd.addColorStop(1,gradColour2);

      context.beginPath();
      context.fillStyle = grd;
      context.arc( canvasWidth / 2, stageY, stageX / layerRadius, 0, Math.PI * 5, true );
      context.fill();
      context.closePath();

      if(!gameData.planet[targetPlanetLowercase].terrafomed){
      var layerName = planetArr[1][0],
          gradColour1 = planetArr[1][1],
          gradColour2 = planetArr[1][2],
          gradRadius = planetArr[1][3],
          layerRadius = planetArr[1][4];
        var grd = context.createRadialGradient(canvasWidth/2, stageY, stageX/gradRadius, canvasWidth/2, stageY, stageX/(gradRadius*0.1));
        grd.addColorStop(0,gradColour1);
        grd.addColorStop(1,gradColour2);

        context.beginPath();
        context.fillStyle = grd;
        context.arc( canvasWidth / 2, stageY, stageX / layerRadius, 0, Math.PI * 5, true );
        context.fill();
        context.closePath();

        context.save();
        context.beginPath();
        context.fillStyle=planetArr[3][2];
        context.font= unit + "em Arial";
        context.textAlign = 'center';
        context.translate(canvasWidth / 2,stageY);
        context.fillText("Needs Terraforming",0,0);
        context.fill();
        context.restore();
      }else{
        drawResources(planets[targetPlanetLowercase].productionResources);
        drawResources(planets[targetPlanetLowercase].luxuryResources);
        drawClouds(planets[targetPlanetLowercase].atmosphere.colour,planets[targetPlanetLowercase].atmosphere.size);
      }
    }

    
  }

  function drawClouds(colour,size){
    for(var arr in cloudsArr){
      for (var i = 0; i < cloudsArr[arr].length; i++) {
        var cloudSize = size,
            cloudSpeed = cloudsArr[arr][1],
            antiClockwise = cloudsArr[arr][2];
        var time = (gameTime * cloudSpeed) + planetPosition;
        
        if(antiClockwise){
        	time = -time;
        }

        var cloudx = Math.sin( time ) * ((stageX / 2.12) + (cloudSize * (unit*3) ) )+ canvasWidth / 2;
        var cloudy = Math.cos( time ) * ((stageX / 2.12) + (cloudSize  * (unit*3) ) )+ stageY;

        var cloud2x = Math.sin( time - unit/2 ) * unit + cloudx;
        var cloud2y = Math.cos( time - unit/2 ) * unit + cloudy;

        var cloud3x = Math.sin( time + unit/2 ) * unit + cloudx;
        var cloud3y = Math.cos( time + unit/2 ) * unit + cloudy;

        context.fillStyle = colour;

        context.beginPath();
        context.arc( cloudx, cloudy, cloudSize*unit, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();

        context.beginPath();
        context.arc( cloud2x, cloud2y, cloudSize*unit / 2, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();

        context.beginPath();
        context.arc( cloud3x, cloud3y, cloudSize*unit /1.5, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();
      }
    }
  }

  function drawResources (resource) {
    
    var name = resource.name;
    var colour = resource.colour;
    var location = resource.location;
    var depth = resource.depth;

    for(var arr in resource.build){

     // check that the referenced property exists at each level of the array.
      //if(resource.build[arr] && resource.build[arr][0]) {
       // var location = resource.build[arr][0];
     // }
      var r = -(planetPosition + location);
      var x = ((Math.sin( planetPosition + location ) * (stageX / depth)) + canvasWidth / 2) ;
      var y = ((Math.cos( planetPosition + location ) * (stageX / depth)) + stageY);
          context.save();
          context.beginPath();
          context.translate(x,y);
          context.rotate(r);
          context.rect((unit*resource.build[arr][0]),(unit*resource.build[arr][1]),(unit*resource.build[arr][2]),(unit*resource.build[arr][2]));
          context.fillStyle=colour;
          context.fill();
          context.restore();
    }

  }

  /*function drawFactory () {
    var location = planetSegments[4][0];
    var x = (Math.sin( planetPosition+location) * (stageX / 2.2)) + canvasWidth / 2;
    var y = (Math.cos( planetPosition+location) * (stageX / 2.2)) + stageY ;
    var r = -(planetPosition +location);
    
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    //factory
    context.rect(-(unit*5),0,(unit*8),(unit*2));
    context.rect(-(unit*5),0,unit,(unit*6));
    //factory roof
    context.moveTo(-(unit*3),(unit*2));
    context.lineTo(-(unit*3),(unit*4));
    context.lineTo(0,(unit*2));
    context.moveTo(0,(unit*2));
    context.lineTo(0,(unit*4));
    context.lineTo((unit*3),(unit*2));
    //mine
    if(generation>1){ context.rect(0,-(unit*10),(unit/2),(unit*10)); }
    if(generation>3){ context.rect(-(unit*5),-(unit*10),(unit*14),(unit/2)); }
    if(generation>5){ context.rect(-(unit*7),-(unit*10),(unit*6),(unit/2)); }
    if(generation>7){ context.rect(-(unit*3),-(unit*30),(unit/2),(unit*20)); }
    if(generation>9){ context.rect(-(unit*3),-(unit*30),(unit*4),(unit/2)); }

    context.fillStyle="#FF0000";
    context.fill();
    context.restore();
  }

  function drawLab () {
    var location = planetSegments[3][0];
    var x = (Math.sin( planetPosition+location) * (stageX / 2.2)) + canvasWidth / 2;
    var y = (Math.cos( planetPosition+location) * (stageX / 2.2)) + stageY ;
    var r = -(planetPosition +location);
    
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    if(generation==1){
    context.rect(-(unit*5),0,(unit*10),unit);
    //roof
    }
    if(generation==2){
    context.rect(-(unit*5),0,(unit*10),(unit*2));
    //roof
    }
    if(generation==3){
    context.rect(-(unit*5),0,(unit*10),(unit*3));
    //roof
    }
    if(generation>3){
    context.rect(-(unit*5),0,(unit*10),(unit*4));
    //roof
    }
  if(generation>9){
    context.moveTo(-(unit*5),(unit*4));
    context.lineTo((unit*4),(unit*5));
    context.lineTo((unit*5),(unit*4));
    }
    context.fillStyle="blue";
    context.fill();
    context.restore();
  }*/

  function drawWorkforce () {
    var targetPlanetLowercase = targetPlanet.toLowerCase();
    var citizenArray = gameData.planet[targetPlanetLowercase].workforce.locations;
    for(var arr in citizenArray){
      var position = citizenArray[arr][0],
          buildingPosition = citizenArray[arr][1],
          buildingWidth = citizenArray[arr][2],
          buildingHeight = citizenArray[arr][3],
          location = planetSegments[  citizenArray[arr][0]  ][0];

      var x = (Math.sin( planetPosition+location) * (stageX / 2.2)) + canvasWidth / 2;
      var y = (Math.cos( planetPosition+location) * (stageX / 2.2)) + stageY ;
      var r = -(planetPosition +location);

      context.save();
      context.beginPath();
      context.translate(x,y);
      context.rotate(r);

      context.rect(unit*buildingPosition,-((unit*buildingPosition)/16),(unit*buildingWidth),(unit*buildingHeight));

      context.fillStyle="green";
      context.fill();
      context.restore();

      planetSegments[position][1] = true;
      if(food > 1){
        for (var i = 0; i < gameData.planet[targetPlanetLowercase].workforce.locations[0].length; i++) { 
          var ranPos = (Math.random()*10+ 1).toFixed(8);
          var ranHeight = (Math.random()*10+1).toFixed(8);
          var newCititzens = [gameData.planet[targetPlanetLowercase].workforce.locations[i][0], ranPos, 1.5, ranHeight];
          citizenArray.push(newCititzens);
        };
        food = 0;
      }

    }

  }

  function drawSections () {  
    var targetPlanetLowercase = targetPlanet.toLowerCase();
    if(gameData.planet[targetPlanetLowercase].terrafomed){
    for(var arr in planetSegments){
      for (var i = 0; i < planetSegments[arr].length; i++) {
        var location = planetSegments[arr][0],
            occupied = planetSegments[arr][1];

        if(!occupied){
          var x = (Math.sin( planetPosition +location) * (stageX / 2.2)) + canvasWidth / 2;
          var y = (Math.cos( planetPosition+location) * (stageX / 2.2)) + stageY ;
          var r = -(planetPosition +location);

          context.save();
          context.beginPath();
          context.translate(x,y);
          context.rotate(r);    
          context.fillStyle = "rgba(50, 0, 60, 0.3)";
          context.rect(-(unit*2),-(unit*2),unit*4,(unit*4));
          context.closePath();
          context.fill(); 
          context.restore();

          context.save();
          context.beginPath();
          context.translate(x,y);
          context.rotate(r);    
          context.fillStyle = "rgba(50, 0, 60, 1)";
          context.rect(-unit,-unit,unit*2,(unit*2));
          context.closePath();
          context.fill(); 
          context.restore();
        }
        
      }
    }
}
  }

  

  

  
