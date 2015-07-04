// $(document).ready(function()
// {
//       function randomize(x,y){
//         //Math.random() * (max - min) + min
//           x = Math.floor(Math.random() * (canvas.width - 0));
//           y = Math.floor(Math.random() * (canvas.height - 0));
//           return [x,y];
//         }

//       var canvas = document.getElementById('myCanvas');
//       var context = canvas.getContext('2d');
//       var source = new Image();
//       var background = new Path2D();
//       var count=0;
//       // background.rect(0,0,canvas.width,canvas.height);
//       // context.fillStyle = '#772953';
//       // context.fill(background);
//       // context.stroke(background);

//       function drawTrack(){
//         var track_offset = (canvas.height)*.5;
//       var track_height = (canvas.height)*.1;
//       var block_x = 25;
//       var block_y = 25;
//       var block_track_diff = 10;
//       var block_start = 40;
//       var block_inc = 120;

//       context.beginPath();
//       context.moveTo(0,track_offset);
//       context.lineTo((canvas.width)*.6,track_offset);

//       context.lineWidth = track_height; //height
//       context.strokeStyle = "white";
//       context.stroke();
//       context.closePath();

//       context.beginPath()
//       context.moveTo((canvas.width)*.6,track_offset);
//       context.lineTo((canvas.width), track_offset);
//       context.strokeStyle = "#EA9172";
//       context.stroke();
//       context.closePath();


//       context.fillStyle="white";

//       for (var i=block_start; i<canvas.width-block_start; i+=block_inc){

//         context.fillRect(i,track_offset - track_height/2 - block_y - block_track_diff,
//          block_x, block_y);
//       }
//       for (var i=block_start; i<canvas.width-block_start; i+=block_inc){

//         context.fillRect(i, track_offset + track_height/2 + block_track_diff,
//           block_x,block_y);
//       }



//       }




//       function drawRuby(){
//         var x=0;
//         var y=0;
//         var positions = randomize(x,y);
//         var scales_arr=[.25,.15,.3,.1];
//         var scale =0;
//         var alpha = .5;
//         var count = 0;
//         x=positions[0];
//         y=positions[1];
//         scale=scales_arr[Math.floor(Math.random() * scales_arr.length)];

//         //comment begin path to make it so successive gems change alpha.

//         context.restore();
//         context.beginPath();
//         context.moveTo(x,y);
//         context.lineTo(x-=60*scale, y+=60*scale);
//         context.lineTo(x+=100*scale, y+=150*scale);
//         context.lineTo(x+=100*scale, y-=150*scale);
//         context.lineTo(x-=60*scale, y-=60*scale);
//         context.lineTo(x,y);
//         console.log("ruby #" + count);
//         console.log(positions[0] + ", " + positions[1]);
//         context.lineWidth = 1;
//         context.fillStyle='rgba(221,72,20, ' + alpha + ")";
//         context.closePath();
//         // context.globalAlpha = (Math.random()*(1-.3))+.3;
//         context.fill();
//         context.save();

//         if (alpha > 1) {
//                 // canvas.width = canvas.width;
//                 clearInterval(interval);
//           }


//         count++;
//         // context.strokeStyle = "#DD4814";
//         // context.stroke();

//       }

//       // var font_size = canvas.height*.05
//       // context.font = font_size +'pt Arial';
//       // context.fillStyle = '#DD4814';
//       // context.fillText('Ruby on Rails', (canvas.width)*.6, (canvas.height)*.2);

//       drawTrack();
//       // drawRuby();
//       // requesting animation frame!
//       // window.requestAnimationFrame(draw);

//       for (var i=0; i<1; i++){
//         // var rand = Math.round(Math.random()*(7000-500))+500;
//         // setTimeout(function(){ drawRuby(); }, rand);
//         drawRuby();
//       }

//       $('h1').css('right', canvas.width/4);

//       // do cool things with the context
//       // context.font = '40pt Calibri';
//       // context.rotate(10*Math.PI/180);
//       // context.fillStyle = 'white';
//       // context.fillText('Hello World!', 150, 100);

//       $('#myCanvas').click(function (e) {
//         // var clickedX = e.pageX - this.offsetLeft;
//         // var clickedY = e.pageY - this.offsetTop;
//         drawRuby();
//       });

//       document.getElementById('clear').addEventListener('click', function() {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//       }, false);
// });
