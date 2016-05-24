var settings = {
	w: window.innerWidth*(0.8),
	h: window.innerHeight*(0.78)
}
var mouse = { x: settings.w / 2, y: settings.h / 2 };
// var momentum = [0, 0];

var board = d3.select('.board')
  .style({
  	height:settings.h + "px", 
  	width:settings.w + "px",
  	'border': '5px solid black',
  	'background': 'url("../styles/background.png") no-repeat',
    'background-size': 'stretch auto',
    'background-position': '50% 75%',
  	 position: 'relative'
  });

var createPipe = board.select('#pipe1')
  .style({
  	top: '-30 px',
  	left: ((settings.w - 150)/2)+"px",
  	width: '150px',
  	height: (settings.h/4)+"px",
  	background: 'url("../styles/pipe1-trans.png") no-repeat',
  	'background-size': '100% auto',
    'background-position': 'center bottom',
  	position: 'absolute' 	
  });


  var createPipe2 = board.select('#pipe2')
  .style({
  	bottom: 0,
  	left: ((settings.w - 150)/2)+"px",
  	width: '150px',
  	height: (settings.h/4)+"px",
	  background: 'url("../styles/pipe2-trans.png") no-repeat',
	  'background-size': '100% auto',
    'background-position': 'center top',
 	  position: 'absolute' 	
  });
   var createPipe3 = board.select('#pipe3')
  .style({
    top: '-30 px',
    left: ((settings.w - 150)/6)+"px",
    width: '150px',
    height: (settings.h/2.2)+"px",
    background: 'url("../styles/pipe1-trans.png") no-repeat',
    'background-size': '100% auto',
    'background-position': 'center bottom',
    position: 'absolute'  
  });

  var createPipe4 = board.select('#pipe4')
  .style({
    bottom: 0,
    left: ((settings.w - 150)/1.2)+"px",
    width: '150px',
    height: (settings.h/2.2)+"px",
    background: 'url("../styles/pipe2-trans.png") no-repeat',
    'background-size': '100% auto',
    'background-position': 'center top',
    position: 'absolute'  
  });

 


var pipes = board.selectAll('.pipe1, .pipe2')
var movePipes1 = function () {
	pipes.transition().duration(1000).ease('cubic')
		.style({height:(settings.h/4)+"px"})
		.each('end', function() {
			d3.select(this).transition().duration(1000).ease('cubic')
				.style({height:(settings.h/2)+"px"})
				.each('end', function() {movePipes1()})
		})
}



var bird = d3.select('.mouse')
	.style({
		height: '100px',
		width: '100px',
		'border-radius':'25px',
		position: 'absolute',
		background: 'url("../styles/flappy.gif")',
		'background-size': 'contain'
	})

//MY OWN MOUSE MOVEMENT
board.on('mousemove', function() {
	var loc = d3.mouse(this);
	mouse = {x: loc[0], y:loc[1]};
	d3.select('.mouse').style({
		top: mouse.y +'px',
		left: mouse.x+'px'
	})
})
var previousCollision = false;
var detectCollision2 = function (pipe4) {
  var collision = false;


  pipe4 = d3.selectAll('.pipe')[0][3]

  var pipeStaticHeight = (settings.h/2.2)
  var pipeStaticLeft4 = pipe4.offsetLeft
  var x = mouse.x;
  var y = mouse.y;
  if((pipeStaticLeft4 < x+80 && x+20 < pipeStaticLeft4+150)) {
    console.log("in pipe 4 left")
    if(y+80 > settings.h - pipeStaticHeight) {
      console.log("in pipe 4 top")
      collision = true;
      d3.select('.mouse').transition().duration(1000).ease('cubic')
        .style({
          top: settings.h-80 + 'px',
          left: 20 + 'px'
        })    
      console.log("bird hit pipe 4")
    }
  }
  if (collision) {
    previousCollisionState = collision;
  }
}

var detectCollision = function (pipe1, pipe2, pipe3, pipe4) {
	var collision = false;

	pipe1 = d3.selectAll('.pipe')[0][0]
  pipe2 = d3.selectAll('.pipe')[0][1]
  pipe3 = d3.selectAll('.pipe')[0][2]
	pipe4 = d3.selectAll('.pipe')[0][3]

	var pipeX = pipe1.offsetLeft;
	var pipeHeight = pipe1.clientHeight;
  var pipeStaticHeight = (settings.h/2.2)
  var pipeStaticLeft3 = pipe3.offsetLeft
  var pipeStaticLeft4 = pipe4.offsetLeft
  var x = mouse.x;
  var y = mouse.y;

	if(pipeX < x+80 && x+20 < pipeX+150) {
   if(y+20 < pipeHeight) {
      collision = true;
     d3.select('.mouse').transition().duration(1000).ease('cubic')
       .style({
         top: settings.h-80 + 'px',
         left: 20 + 'px'
       })    
     console.log("bird hit pipe1")
   } else if(y+80 > settings.h - pipeHeight) {
      collision = true;
     d3.select('.mouse').transition().duration(1000).ease('cubic')
       .style({
         top: settings.h-80 + 'px',
         left: 20 + 'px' 
       })      
     console.log("bird hit pipe2")
    }
  } 
  if((pipeStaticLeft3 < x+80 && x+20 < pipeStaticLeft3+150)) {
    if(y+20 < pipeStaticHeight) {
      collision = true;
      d3.select('.mouse').transition().duration(1000).ease('cubic')
        .style({
          top: settings.h-80 + 'px',
          left: 20 + 'px'
        })    
      console.log("bird hit pipe 3")
    } 
  }
  if (collision) {
    previousCollisionState = collision;
  }
}
d3.timer(detectCollision2)
d3.timer(detectCollision)
movePipes1()