//
var canvas;
var timer;
var timer2;
var counter;
var interval;
var button;
var secondscounter = 10;

let amount = 55;
let points = [];
let maxDistance = 250;
let speed = .001;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  resetSketch();
  // timer = createP('timer');
  // timer2 = createP('timer 2');

  // makeTimer();

  // button = createButton('start timer');
  // button.mousePressed(doTimer);
  // interval = setInterval(timeIt,500);

  // function makeTimer(){
  //   var counter = 0;
  //   setInterval(timeIt, 500);
  //
  //   function timeIt() {
  //     timer.html(counter);
  //     timer2.html(counter);
  //     counter++;
  //   }
  // }

  // for (let i = 0; i < amount; i++) {
  //   points[i] = {
  //     x: random(width),
  //     y: random(height)
  //   };
  //   ellipse(points[i].x, points[i].y);
  // }


  var sketchbutton = createButton("SCRAMBLE BACKGROUND");
  sketchbutton.mousePressed(resetSketch);



  // for (let i = 0; i < secondscounter; i++) {
  //   resetSketch();
  // }

}

function resetSketch() {
  for (let i = 0; i < amount; i++) {
    points[i] = {
      x: random(width),
      y: random(height)
    };
    ellipse(points[i].x, points[i].y);
  }
}

// function doTimer() {
//   interval = setInterval(timeIt, 500);
//   button.html('stop timer');
// }

// function stopTimer() {
//   clearInterval(interval);
// }


function draw() {

  // timer.html(frameCount);
  background(255);
  strokeWeight(2.5);
  for (let i = 0; i < amount; i++) {
    for (let j = 0; j < amount; j++) {

      let d = dist(points[i].x, points[i].y,
        points[j].x, points[j].y);

      let mapD = map(d, -100, maxDistance, 4000, 0);

      stroke(0, mapD);
      // stroke('#FFCE34');


      if (i != j && d < maxDistance)
        line(points[i].x, points[i].y,
          points[j].x, points[j].y);
    }

  }
  for (let i = 0; i < amount; i++) {
    points[i].x += (noise(i + 100 + frameCount * speed) - .49) * 1;
    points[i].y += (noise(i + frameCount * speed) - .49) * 1;
  }






}
