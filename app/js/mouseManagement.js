
  var currentMousePos = { x: -1, y: -1 };
  jQuery(document).mousemove(function(event) {
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
  });