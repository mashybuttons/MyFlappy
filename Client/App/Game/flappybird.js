var settings = {
	w: window.innerWidth,
	h: window.innerHeight
}
var mouse = { x: settings.w / 2, y: settings.h / 2 };
console.log(settings.h/4)
var board = d3.select('.board')
  .style({height:settings.h + "px", width:settings.w + "px"})
  .style({'border': '5px solid black', position: 'relative'});

var createPipe = board.select('#pipe1')
  .style({
  	top: 0,
  	left: ((settings.w - 300)/2)+"px",
  	width: '300px',
  	height: (settings.h/4)+"px",
	background: 'url("../styles/pipe1.png") no-repeat center',
	'background-size': '100%',
	position: 'absolute' 	
  });

var createPipe2 = board.select('#pipe2')
  .style({
  	bottom: 0,
  	left: ((settings.w - 300)/2)+"px",
  	width: '300px',
  	height: (settings.h/4)+"px",
	background: 'url("../styles/pipe2.png") no-repeat center',
	'background-size': '100%',
	position: 'absolute' 	
  });

var pipes = board.selectAll('.pipe')
var movePipes = function () {
	pipes.transition().duration(1000).ease('cubic')
		.style({height:(settings.h/4)+"px"})
		.each('end', function() {
			d3.select(this).transition().duration(1000).ease('cubic')
				.style({height:(settings.h/2)+"px"})
				.each('end', function() {movePipes()})
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


board.on('mousemove', function() {
	var loc = d3.mouse(this);
	mouse = {x: loc[0], y:loc[1]};
	d3.select('.mouse').style({
		top: mouse.y +'px',
		left: mouse.x+'px'
	})
})

var detectCollision = function (pipe1, pipe2) {
	var collision = false;

	pipe1 = d3.selectAll('.pipe')[0][0]
	pipe2 = d3.selectAll('.pipe')[0][1]

	var pipeX = pipe1.offsetLeft;
	var pipeHeight = pipe1.clientHeight;

	var x = mouse.x;
	var y = mouse.y;
	if(pipeX < x+80 && x+20 < pipeX+300) {
		if(y+20 < pipeHeight) {
			d3.select('.mouse').transition().duration(1000).ease('cubic')
				.style({
					top: settings.h-80 + 'px',
					left: 300 + 'px'
				})		
			board.style('background-color', 'red')
			console.log("bird hit pipe1")
		}
		if(y+80 > settings.h - pipeHeight) {
			d3.select('.mouse').transition().duration(1000).ease('cubic')
				.style({
					top: settings.h-80 + 'px',
					left: 300 + 'px' 
				})			
			board.style('background-color', 'red')
			console.log("bird hit pipe2")
		}
	}
}

d3.timer(detectCollision)
movePipes()