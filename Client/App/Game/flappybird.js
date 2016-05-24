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
//MY ATTEMPT AT KEYBOARD MOVEMENT
// d3.select('body').on("keydown", function() {
//   event.preventDefault();
//   var currentTopPos = bird.style('top').slice(0,-2)
//   var currentLeftPos = bird.style('left').slice(0,-2)
//   console.log('here', bird.style('left'), d3.event.keyCode)

//   if(d3.event.keyCode === 38) {
//     d3.select('.mouse').transition().style({
//       top: (currentTopPos - 20) + 'px'
//     })
//   }
//   if(d3.event.keyCode === 39) {
//     d3.select('.mouse').transition().style({
//       left: (currentLeftPos + 20) + 'px'
//     })
//   }
// });




  // var moveDiv = d3.select('.mouse');
  //     window.onkeydown = function(e) {
  //       console.log("IM MOVING")
  //       e.preventDefault();
  //       if (!e)
  //       {
  //         e = window.event;
  //       }
  //       var keyCode;
  //       // pixel wise speed variable
  //       var speed = 3;       
  //       if(e.which) {
  //         keyCode = e.which;
  //       } else {
  //         keyCode = e.keyCode;
  //       }
  //       if(moveDiv.style('left') === 'auto') {
  //         moveDiv.style('left', '50px')
  //       }
  //       if(moveDiv.style('top') === 'auto') {
  //         moveDiv.style('top', '50px')
  //       }

  //   //increment/decrement the top or left of the div based on the arrow key movements
  //       if(keyCode === 37) {
  //         moveDiv.style({left: (parseInt(moveDiv.style('left'), 10) - speed) + 'px'});
  //       } else if (keyCode === 38) {
  //         moveDiv.style({top:(parseInt(moveDiv.style('top'), 10) - speed) + 'px'});
  //       } else if (keyCode === 39) {
  //         moveDiv.style({left: (parseInt(moveDiv.style('left'), 10) + speed) + 'px'});
  //       } else if (keyCode === 40) {
  //         moveDiv.style({top: (parseInt(moveDiv.style('top'), 10) + speed) + 'px'});
  //       }
  //     };

//MOVEMENT FOR BIRDY


// d3.keybinding = function() {
//   var _keys = {
//     keys: {
//       //Left Arrow Key, or ←
//       '←': 37, left: 37, 'arrow-left': 37,
//       // Up Arrow Key, or ↑
//       '↑': 38, up: 38, 'arrow-up': 38,
//       // Right Arrow Key, or →
//       '→': 39, right: 39, 'arrow-right': 39,
//       // Up Arrow Key, or ↓
//       '↓': 40, down: 40, 'arrow-down': 40,
//     }
//   }
//   var i = 95, n = 0;
//     while (++i < 106) _keys.keys['num-' + n] = i; ++n;
//     // To minimise code bloat, add all of the top row 0-9 keys in a loop
//     i = 47, n = 0;
//     while (++i < 58) _keys.keys[n] = i; ++n;
//     // To minimise code bloat, add all of the F1-F25 keys in a loop
//     i = 111, n = 1;
//     while (++i < 136) _keys.keys['f' + n] = i; ++n;
//     // To minimise code bloat, add all of the letters of the alphabet in a loop
//     i = 64;
//     while(++i < 91) _keys.keys[String.fromCharCode(i).toLowerCase()] = i;

//     var pairs = d3.entries(_keys.keys),
//         event = d3.dispatch.apply(d3, d3.keys(_keys.keys));

//     function keys(selection) {
//         selection.on('keydown', function () {
//             var tagName = d3.select(d3.event.target).node().tagName;
//             if (tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA') {
//                 return;
//             }

//             pairs.filter(function(d) {
//                 return d.value === d3.event.keyCode;
//             })
//         });
//     }

//     return d3.rebind(keys, event, 'on');
// };

// var point = [settings.w/2, settings.h/2];
// var momentum = [0, 0];

// function move(x, y) {
//     return function(event) {
//         event.preventDefault();
//         momentum = [momentum[0] + x, momentum[1] + y];
//     };
// }

// d3.select('.mouse').call(d3.keybinding()
//     .on('←', move(-2, 0))
//     .on('↑', move(0, -2))
//     .on('→', move(2, 0))
//     .on('↓', move(0, 2)));

// d3.timer(function() {
//     point[0] = Math.min(settings.w,  Math.max(0, momentum[0] + point[0]));
//     point[1] = Math.min(settings.h, Math.max(0, momentum[1] + point[1]));
//     bird
//         .data(point)
//         .attr('transform', function(d) { return 'translate(' + d + ')'; });
//     momentum[0] *= 0.9;
//     momentum[1] *= 0.9;
// });
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
      d3.select('.mouse').transition().duration(1000).ease('cubic')
        .style({
          top: settings.h-80 + 'px',
          left: 20 + 'px'
        })    
      console.log("bird hit pipe 4")
    }
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
  console.log(pipeStaticLeft4, x+80)

	if(pipeX < x+80 && x+20 < pipeX+150) {
   if(y+20 < pipeHeight) {
     d3.select('.mouse').transition().duration(1000).ease('cubic')
       .style({
         top: settings.h-80 + 'px',
         left: 20 + 'px'
       })    
     console.log("bird hit pipe1")
   } else if(y+80 > settings.h - pipeHeight) {
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
      d3.select('.mouse').transition().duration(1000).ease('cubic')
        .style({
          top: settings.h-80 + 'px',
          left: 20 + 'px'
        })    
      console.log("bird hit pipe 3")
    } 
  }
}
d3.timer(detectCollision2)
d3.timer(detectCollision)
movePipes1()