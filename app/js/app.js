jQuery(document).ready ( function () {
  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame       ||
      window.mozRequestAnimationFrame          ||
        function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
  })();

  //planetarrays - NAME , INNERGRAD , OUTERGRAD ,GRADRADIUS , RADIUS 
  var earth = [['sky',"rgba(102, 255, 255, 0.8)","rgba(102, 255, 255, 0.5)",2.2, 2],['grass',"rgba(102, 204, 102, 1)","green",2.25, 2.2],['mud',"rgba(102, 51, 0, 1)","rgba(51, 25, 0, 1)",30, 2.25],['core',"yellow","orange",55, 12]];
  var planetRes = [[ 'coal', 'black', 8 , 3 , [ 2 , 4 , 1 ] , [ 1.5 , 1.5 , 1 ]  , [ 3 , 3 , 0.5 ]  , [ 1 , 2 , 1 ]  ],[ 'gold', 'yellow', 5 , 6 , [ 2 , 4 , 0.5 ] , [ 1.5 , 1 , 1 ]  , [ 3 , 5 , 0.5 ]  , [ 1 , 2 , 1 ]  ]];
  //workforce array - POSITION , X , Y , WIDTH , HIEGHT
  var citizenArray = [[8,0,1.5,6]];
  var canvas, context, toggle, starSize,canvasHeight,canvasWidth,stageX,stageY;
  var cloudsArr = [];
  var starsArr = [];
  var planetSegments = [];
  var buildingLocations = [];
  var pulsate = 40;
  var planetPosition = 0;
  var gameTime = 12345678;
  var unit =0;
  var generation =0;
  var food =0;
  var screenDepth = 1;
  var drawmenu = false;

  init();

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

    
    unit = canvasWidth / 300;

    window.addEventListener("mousedown", mouseClick, true);
    window.addEventListener( "keydown", doKeyDown, true);
    canvas.addEventListener( "mousemove", mouseOver, true);

    context = canvas.getContext( '2d' );
    context.fillStyle = "black";
    context.rect(0, 0, canvasWidth, canvasHeight);
    context.fill();

    document.body.appendChild( canvas );
  }

  function mouseOver (e) {
    console.log(e);
    var location = planetSegments[8][0];
    var x = (Math.sin( planetPosition +location) * (stageX / 2.2)) + canvasWidth / 2;
    var y = (Math.cos( planetPosition+location) * (stageX / 2.2)) + stageY ;
      

    if(e.x > (x-(unit*2)) && e.x < (x+(unit*2)) && e.y < (y +(unit*2)) && e.y > (y-(unit*2)) ){
                drawmenu = true;
    }else{
      drawmenu = false;
    }
  }
  function drawMenu (draw, info) {
    var location = planetSegments[8][0];
    var x = (Math.sin( planetPosition +location) * (stageX / 2.2)) + canvasWidth / 2;
    var y = (Math.cos( planetPosition+location) * (stageX / 2.2)) + stageY ;
      var r = -(planetPosition + location);
    if(drawmenu){
      context.fillStyle = 'white';
      context.beginPath();
      context.rect(x, y, 20, 30);
      context.closePath();
      context.fill();
    }

      context.save();
        context.beginPath();
        context.translate(x,y);
        context.rotate(r);    
        context.fillStyle = "rgba(250, 0, 0, 0.5)";
        context.rect(-(unit*2),-(unit*2),unit*4,unit*4);
        context.closePath();
        context.fill(); 
        context.restore();
  }
  function doKeyDown (e) {
    //left
    if(e.keyCode == 37){
      planetPosition += 0.05;
    }
    //right
    if (e.keyCode == 39) {

      planetPosition -= 0.05;
    }
    //down 40
    if (e.keyCode == 40) {
      if(screenDepth  > 0.05)
      {
      screenDepth -= 0.05;
      }
    }
    //up 38
    if (e.keyCode == 38) {
      if(screenDepth  != 1)
      {
      screenDepth += 0.05;
    }

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
        drawPlanet(context,earth);
        drawResources();
        drawWorkforce();
        drawLab();
        drawFactory();
        drawClouds();
        drawSections();
      }else{
        drawPlanetTop();
        drawSun();
        drawMars();
      }
      drawMenu();
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

    pulsate += 0.2;
    
        
        context.beginPath();    
        context.fillStyle = "rgba(255, 255, 0, 0.3)";
        context.arc( -stageX / 8, canvasHeight /2, pulsate, 0, Math.PI * 5, true );
        context.closePath();
        context.fill(); 

        context.beginPath();    
        context.fillStyle = "rgba(255, 255, 0, 0.2)";
        context.arc( -stageX / 8, canvasHeight /2, pulsate /0.8, 0, Math.PI * 5, true );
        context.closePath();
        context.fill(); 
      
      if (pulsate >= 60) {
        pulsate = 40;
      }
      context.fillStyle = 'gold';
      context.beginPath();
      context.arc( -stageX / 8, canvasHeight /2, 40, 0, Math.PI * 5, true );
      context.closePath();
      context.fill(); 
    
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
  function drawPlanetTop() {
    var grd = context.createRadialGradient(canvasWidth/2, canvasHeight, canvasWidth/2.5, canvasWidth/2, canvasHeight, canvasWidth/2);
    grd.addColorStop(0,"rgba(102, 204, 102, 1)");
    grd.addColorStop(1,"green");
    context.beginPath();    
    context.fillStyle = grd;
    context.arc( canvasWidth / 2, stageY, stageX / 2.2, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 
    
    grd = context.createRadialGradient(canvasWidth/2, canvasHeight, canvasWidth/2.2, canvasWidth/2, canvasHeight, canvasWidth/2);
    grd.addColorStop(0,"rgba(102, 255, 255, 0.3)");
    grd.addColorStop(1,"rgba(102, 255, 255, 0.1)");
    context.beginPath();    
    context.fillStyle = grd;
    context.arc( canvasWidth / 2, stageY, stageX / 2, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 

    
  }
function drawMars() {
    var grd = context.createRadialGradient(canvasWidth/3, canvasHeight/2, canvasWidth/2.5, canvasWidth/2, canvasHeight, canvasWidth/2);
    grd.addColorStop(0,"rgba(255, 0, 0, 1)");
    grd.addColorStop(1,"brown");
    context.beginPath();    
    context.fillStyle = grd;
    context.arc( canvasWidth / 3, canvasHeight/2, canvasWidth / 50, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 
    
    grd = context.createRadialGradient(canvasWidth/3, canvasHeight/2, canvasWidth/2.2, canvasWidth/2, canvasHeight, canvasWidth/2);
    grd.addColorStop(0,"rgba(255, 0, 0, 0.3)");
    grd.addColorStop(1,"rgba(255, 0, 0, 0.1)");
    context.beginPath();    
    context.fillStyle = grd;
    context.arc( canvasWidth / 3, canvasHeight/2, canvasWidth / 52, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 

    
  }

  function drawPlanet(context,planetArr) {
    for(var arr in planetArr){
      var layerName = planetArr[arr][0],
          gradColour1 = planetArr[arr][1],
          gradColour2 = planetArr[arr][2],
          gradRadius = planetArr[arr][3],
          layerRadius = planetArr[arr][4];
      var grd = context.createRadialGradient(canvasWidth/2, stageY, stageX/gradRadius, canvasWidth/2, stageY, stageX/2);
      grd.addColorStop(0,gradColour1);
      grd.addColorStop(1,gradColour2);

      context.beginPath();
      context.fillStyle = grd;
      context.arc( canvasWidth / 2, stageY, stageX / layerRadius, 0, Math.PI * 5, true );
      context.fill();
      context.closePath();
    }
  }

  function drawClouds(){
    for(var arr in cloudsArr){
      for (var i = 0; i < cloudsArr[arr].length; i++) {
        var cloudSize = cloudsArr[arr][0],
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

        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.3)";
        context.arc( cloudx, cloudy, cloudSize*unit, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();

        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.2)";
        context.arc( cloud2x, cloud2y, cloudSize*unit / 2, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();

        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.4)";
        context.arc( cloud3x, cloud3y, cloudSize*unit /1.5, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();
      }
    }
  }

  function drawResources () {

    //coalResources array - NAME , COLOUR , position , depth , [ X , Y , SIZE ]
    for(var arr in planetRes){
      var resName = planetRes[arr][0],
          colour = planetRes[arr][1],
          position = planetRes[arr][2],
          depth = planetRes[arr][3];

      //check that the referenced property exists at each level of the array.
      if(planetSegments[position] && planetSegments[position][0]) {
        var location = planetSegments[position][0];
      }
      var r = -(planetPosition + location);
      var x = ((Math.sin( planetPosition + location ) * (stageX / depth)) + canvasWidth / 2) ;
      var y = ((Math.cos( planetPosition + location ) * (stageX / depth)) + stageY);
      for (var i = 4; i < planetRes[arr].length; i++) {
          context.save();
          context.beginPath();
          context.translate(x,y);
          context.rotate(r);
          context.rect((unit*planetRes[arr][i][0]),(unit*planetRes[arr][i][1]),(unit*planetRes[arr][i][2]),(unit*planetRes[arr][i][2]));
          context.fillStyle=colour;
          context.fill();
          context.restore();
      }

    }

  }

  function drawFactory () {
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
  }

  function drawWorkforce () {
    for(var arr in citizenArray){
      var position = citizenArray[arr][0],
          buildingPosition = citizenArray[arr][1],
          buildingWidth = citizenArray[arr][2],
          buildingHeight = citizenArray[arr][3];

      var location = position;
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

      if(food > 1){
        var ranPos = (Math.random()*10+ 1).toFixed(8);
        var ranHeight = (Math.random()*10+1).toFixed(8);
        var newCititzens = [position, ranPos, 1.5, ranHeight];
        citizenArray.push(newCititzens);
        food = 0;
      }

    }

  }

  function drawSections () {  
    for(var arr in planetSegments){
      for (var i = 0; i < planetSegments[arr].length; i++) {
        var location = planetSegments[arr][0],
            occupied = planetSegments[arr][1];

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

  function drawDashboard () {
    //dashboard
    context.beginPath();
    context.fillStyle="#333";
    context.fillRect(0,0,canvasWidth,50);
    context.fill();

    //timer
    context.beginPath();
    context.fillStyle="#fff";
    context.fillRect(canvasWidth / 2 - 75,5,250,40);
    context.fill();

    //generation
    context.beginPath();
    context.fillStyle="#000";
    context.font="30px Arial";
    var gameText = "Generation: " + generation;
    context.fillText(gameText,canvasWidth / 2 - 45,45)
    context.fill();

    //next turn
    context.save();
    context.beginPath();
    //context.translate(canvasWidth/2,canvasHeight-90);
    context.rect(canvasWidth-(unit*39),canvasHeight-(unit*15),unit*36,unit*12);
    context.fillStyle="red";
    context.fill();
    context.restore();

    context.beginPath();
    context.fillStyle="white";
    context.font="30px Arial";
    context.fillText("Next Gen",canvasWidth-(unit*36),canvasHeight-(unit*6))
    context.fill();
  }

  function mouseClick (e) {
    //alert(e.y);
    if(e.x >= canvasWidth-(unit*39) && e.x <= (canvasWidth-(unit*39)) + unit*36  && e.y >= canvasHeight-(unit*15) && e.y <= (canvasHeight-(unit*15))+ unit*12){
      
    generation++;
    food+= 0.2;
      //alert('generation' + generation);
    }
   
  }

  

});