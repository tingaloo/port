$(document).ready(function()
{
      function randomize(x,y){
        //Math.random() * (max - min) + min
          x = Math.floor(Math.random() * (canvas.width - 0));
          y = Math.floor(Math.random() * (canvas.height - 0));
          return [x,y];
        }

      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var source = new Image();
      var background = new Path2D();
      var count=0;
      background.rect(0,0,canvas.width,canvas.height);
      context.fillStyle = '#772953';
      context.fill(background);
      context.stroke(background);


      //Alternate Track
      var track_offset = (canvas.height)*.5;
      var track_height = (canvas.height)*.1;
      var block_x = 25;
      var block_y = 25;
      var block_track_diff = 10;
      var block_start = 40;
      var block_inc = 120;

      context.beginPath();
      context.moveTo(0,track_offset);
      context.lineTo((canvas.width)*.6,track_offset);

      context.lineWidth = track_height; //height
      context.strokeStyle = "white";
      context.stroke();
      context.closePath();

      context.beginPath()
      context.moveTo((canvas.width)*.6,track_offset);
      context.lineTo((canvas.width), track_offset);
      context.strokeStyle = "#EA9172";
      context.stroke();

      context.closePath();

      context.beginPath();

      context.fillStyle="white";

      for (var i=block_start; i<canvas.width-block_start; i+=block_inc){

        context.fillRect(i,track_offset - track_height/2 - block_y - block_track_diff,
         block_x, block_y);
      }
      for (var i=block_start; i<canvas.width-block_start; i+=block_inc){

        context.fillRect(i, track_offset + track_height/2 + block_track_diff,
          block_x,block_y);
      }

      context.closePath();

      function rubies(){
        var x=0;
        var y=0;
        var positions = randomize(x,y);
        var scales_arr=[.25,.5,.25,.15];
        x=positions[0];
        y=positions[1];
        scale=scales_arr[count];

        context.moveTo(x,y);
        context.lineTo(x-=60*scale, y+=60*scale);
        context.lineTo(x+=100*scale, y+=150*scale);
        context.lineTo(x+=100*scale, y-=150*scale);
        context.lineTo(x-=60*scale, y-=60*scale);
        context.lineTo(positions[0], positions[1]);

        context.lineWidth = 2;
        context.fillStyle='#DD4814';
        context.fill();
        context.strokeStyle = "#DD4814";
        context.stroke();
        if (count!=scales_arr.length-1){
          count++;
        }
      }

      // var font_size = canvas.height*.05
      // context.font = font_size +'pt Arial';
      // context.fillStyle = '#DD4814';
      // context.fillText('Ruby on Rails', (canvas.width)*.6, (canvas.height)*.2);

      for (var i=0; i<30; i++){
        rubies();
      }

      $('h1').css('right', canvas.width/4);

      // do cool things with the context
      // context.font = '40pt Calibri';
      // context.rotate(10*Math.PI/180);
      // context.fillStyle = 'white';
      // context.fillText('Hello World!', 150, 100);

      $('#myCanvas').click(function (e) {
        var clickedX = e.pageX - this.offsetLeft;
        var clickedY = e.pageY - this.offsetTop;
        rubies();
      });

});
