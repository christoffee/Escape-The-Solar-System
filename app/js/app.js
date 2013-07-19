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

  var canvas, context, toggle, starSize;
  var cloudsArr = [];
  var starsArr = [];
  var planetSegments = [];
  var pulsate = 40;
  var expAlpha = 0.5;
  var expSize = 0;
  var canvasHeight;
  var canvasWidth;
  var planetPosition = 3;
  var gameTime = 12345678;
  var unit =0;
  var generation =0;
  var screenDepth = 1;
  var stageX;
  var stageY;

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

    context = canvas.getContext( '2d' );
    context.fillStyle = "black";
    context.rect(0, 0, canvasWidth, canvasHeight);
    context.fill();

    document.body.appendChild( canvas );
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

      screenDepth -= 0.05;
    }
    //up 38
    if (e.keyCode == 38) {
      if(screenDepth  != 1)
      {
      screenDepth += 0.05;
    }

    }
    console.log(e.keyCode);
  }

  function render() {
    if(context){
      context.clearRect(0,0,canvasWidth,canvasHeight);
      stageX = canvasWidth * screenDepth;
      stageY = canvasHeight * screenDepth;
      unit = (stageX / 300 );
      drawBackground();
      drawPlanet();
      drawResources();
      drawClouds();
      drawFactory();
      drawLab();
      drawFlats();
      drawRocket();
      drawSections();
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
    for (i = 0; i <= 120; i++) {
      var cloud = [];
      // Get random positions for stars.
      var size = Math.floor(Math.random() * 2) + 1;
      var speed = (Math.random()*0.00001+0.000001).toFixed(8);
      toggle = !toggle;

      var direction = toggle;

      cloud.push(size,speed,direction);
      cloudsArr.push(cloud);
    }
  }

  function createPlanetSegments () {
    
    for (var i = 0; i <= 17; i++) {
      var radians = (i / 90 * Math.PI) * 10;

      planetSegments.push(radians);

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

  function drawPlanet() {
    var grd = context.createRadialGradient(canvasWidth/2, canvasHeight, canvasWidth/2.2, canvasWidth/2, canvasHeight, canvasWidth/2);
    grd.addColorStop(0,"rgba(102, 255, 255, 0.8)");
    grd.addColorStop(1,"rgba(102, 255, 255, 0.5)");
    context.beginPath();    
    context.fillStyle = grd;
    context.arc( canvasWidth / 2, canvasHeight, stageX / 2, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 

    grd = context.createRadialGradient(canvasWidth/2, canvasHeight, canvasWidth/2.5, canvasWidth/2, canvasHeight, canvasWidth/2);
    grd.addColorStop(0,"rgba(102, 204, 102, 1)");
    grd.addColorStop(1,"green");
    context.beginPath();    
    context.fillStyle = grd;
    context.arc( canvasWidth / 2, canvasHeight, stageX / 2.2, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 


    grd = context.createRadialGradient(canvasWidth/2, canvasHeight, canvasWidth/30, canvasWidth/2, canvasHeight, canvasWidth/2.1);
    grd.addColorStop(0,"rgba(102, 51, 0, 1)");
    grd.addColorStop(1,"rgba(51, 25, 0, 1)");
    context.fillStyle = grd;
    context.beginPath();
    context.arc( canvasWidth / 2, canvasHeight, stageX / 2.25, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 


    grd = context.createRadialGradient(canvasWidth/2, canvasHeight, canvasWidth/55, canvasWidth/2, canvasHeight, canvasWidth/12);
    grd.addColorStop(0,"yellow");
    grd.addColorStop(1,"orange");
    context.fillStyle = grd;
    context.beginPath();
    context.arc( canvasWidth / 2, canvasHeight, stageX / 12, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 
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

        var cloudx = Math.sin( time ) * ((stageX / 2.18) + cloudSize*unit *4) + canvasWidth / 2;
        var cloudy = Math.cos( time ) * ((stageX / 2.18) + cloudSize*unit *4) + canvasHeight;

        var cloud2x = Math.sin( time - 2 ) * 5 + cloudx;
        var cloud2y = Math.cos( time - 2 ) * 5 + cloudy;

        var cloud3x = Math.sin( time + 2 ) * 5 + cloudx;
        var cloud3y = Math.cos( time + 2 ) * 5 + cloudy;

        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.5)";
        context.arc( cloudx, cloudy, cloudSize*unit, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();

        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.4)";
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

    var x = ((Math.sin( planetPosition ) * (stageX / 8)) + canvasWidth / 2) ;
    var y = ((Math.cos( planetPosition ) * (stageX / 8)) + canvasHeight);
    var r = -(planetPosition*57) * Math.PI/180;
    //gold

    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    context.rect(-2.5,-17.5,5,5);
    context.fillStyle="yellow";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    context.rect(-7.5,-1.5,3,3);
    context.fillStyle="yellow";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    context.rect(-16,-1,2,2);
    context.fillStyle="yellow";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    context.rect(-5.5,-8.5,5,5);
    context.fillStyle="yellow";
    context.fill();
    context.restore();
    
    //coal
    x = ((Math.sin( planetPosition +0.5 ) * (stageX / 4)) + canvasWidth / 2) ;
    y = ((Math.cos( planetPosition +0.5) * (stageX / 4)) + canvasHeight);
    
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r +1);
    context.rect(-2.5,-7.5,5,5);
    context.fillStyle="black";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r +1);
    context.rect(-12.5,-2.5,3,3);
    context.fillStyle="black";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r +1);
    context.rect(-1,-4,2,2);
    context.fillStyle="black";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r +1);
    context.rect(-15.5,-8.5,5,5);
    context.fillStyle="black";
    context.fill();
    context.restore();

    //jewles
    x = ((Math.sin( planetPosition -1.5 ) * (stageX / 6)) + canvasWidth / 2) ;
    y = ((Math.cos( planetPosition -1.5) * (stageX / 6)) + canvasHeight);
    
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    context.rect(-(unit/2),-(unit/2),unit,unit);
    context.fillStyle="white";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    context.rect(-(unit*1.5),-(unit*1.5),unit,unit);
    context.fillStyle="aqua";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    context.rect(-(unit*3),-(unit*2),(unit/2),(unit/2));
    context.fillStyle="aqua";
    context.fill();
    context.restore();
 
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    context.rect(-unit,-(unit*2),unit,unit);
    context.fillStyle="white";
    context.fill();
    context.restore();

  }

  function drawFactory () {
    var segDeg = planetSegments[4];
    var x = (Math.sin( planetPosition+segDeg) * (stageX / 2.2)) + canvasWidth / 2;
    var y = (Math.cos( planetPosition+segDeg) * (stageX / 2.2)) + canvasHeight ;
    var r = -(planetPosition +segDeg);
    
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
    if(generation>5){ context.rect(-35,-50,30,2); }
    if(generation>7){ context.rect(-15,-150,2,100); }
    if(generation>9){ context.rect(-12,-150,20,2); }

    context.fillStyle="#FF0000";
    context.fill();
    context.restore();
  }

  function drawLab () {
    var segDeg = planetSegments[3];
    var x = (Math.sin( planetPosition+segDeg) * (stageX / 2.2)) + canvasWidth / 2;
    var y = (Math.cos( planetPosition+segDeg) * (stageX / 2.2)) + canvasHeight ;
    var r = -(planetPosition +segDeg);
    
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

  function drawRocket() {
    var segDeg = planetSegments[17];
    var x = (Math.sin( planetPosition+segDeg) * (stageX / 2.2)) + canvasWidth / 2;
    var y = (Math.cos( planetPosition+segDeg) * (stageX / 2.2)) + canvasHeight ;
    var r = -((planetPosition*57) * Math.PI/180) -(segDeg);
    
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(r);
    //body
    context.rect(0,3,5,20);
    //wings
    context.moveTo(5,0);
    context.lineTo(5,10);
    context.lineTo(15,0);
    context.moveTo(0,0);
    context.lineTo(0,10);
    context.lineTo(-10,0);
    //head
    context.moveTo(7,25);
    context.lineTo(-2,25);
    context.lineTo(2,30);
    context.fillStyle="orange";
    context.fill();
    context.restore();
  }

  function drawFlats () {
    var segDeg = planetSegments[0];
    var x = (Math.sin( planetPosition+segDeg) * (stageX / 2.2)) + canvasWidth / 2;
    var y = (Math.cos( planetPosition+segDeg) * (stageX / 2.2)) + canvasHeight ;
    var r = -(planetPosition +segDeg);
    
    context.save();
    context.beginPath();
    context.translate(x,y);

    context.rotate(r);
    if(generation>9){ context.rect(-(unit*11),-((unit*11)/16),(unit*1.5),(unit*3)); }
    if(generation>5){ context.rect(-(unit*7),-((unit*7)/16),(unit*1.5),(unit*5)); }
    context.rect(-(unit*5),-((unit*5)/16),(unit*1.5),(unit*6));
    context.rect(-unit,-((unit)/16),(unit*1.5),(unit*6));
    context.rect(0,0,(unit*1.5),(unit*4));
    if(generation>1){ context.rect((unit*8),-((unit*8)/16),(unit*1.5),(unit*6)); }
    
    context.rect((unit*9),-((unit*9)/16),(unit*1.5),(unit*2));
    if(generation>4){ context.rect((unit*11),-((unit*11)/16),(unit*1.5),(unit*8)); }

    context.fillStyle="green";
    context.fill();
    context.restore();
  }

  function drawSections () {
    for (var arr in planetSegments) {
        var segDeg = planetSegments[arr];

        var x = (Math.sin( planetPosition +segDeg) * (canvasWidth / 2.25)) + canvasWidth / 2;
        var y = (Math.cos( planetPosition+segDeg) * (canvasWidth / 2.25)) + canvasHeight ;
        context.beginPath();

        context.strokeStyle = 'rgba(255, 205, 0, 0.05)';
        context.moveTo(canvasWidth/2,canvasHeight);
        context.lineTo(x,y);

        context.closePath();
        context.stroke();
      
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
      //alert('generation' + generation);
    }
  }

  

});