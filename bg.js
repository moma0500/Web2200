//

let amount = 125;
let points = [];
let maxDistance = 200;
let speed = .001;


function setup() {
  createCanvas(1500,1500);



  for(let i = 0 ; i < amount ; i++){
    points[i] = {x:random(width),y:random(height)};
    ellipse(points[i].x,points[i].y);
  }

}

function draw(){
  background(255,255,255);
  for(let i = 0 ; i < amount ; i++){
    for(let j = 0 ; j < amount ; j++){

      let d = dist(points[i].x,points[i].y,
            points[j].x,points[j].y);

      let mapD = map(d,-50,maxDistance,4000,10);

      stroke(0,mapD);


      if(i!=j && d<maxDistance)
        line(points[i].x ,points[i].y,
            points[j].x ,points[j].y);
    }

  }
  for(let i = 0 ; i < amount ; i++){
    points[i].x += (noise(i + 100 + frameCount*speed)-.49)*3;
    points[i].y += (noise(i+frameCount*speed)-.49)*3;
  }





}
