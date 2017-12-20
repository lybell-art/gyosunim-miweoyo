var capture;
var recording = false;
var c;
var gif;
var p1,p2,p3;
var x ;
function preload()
{
  p1=loadImage("img/tween1.png");
  p2=loadImage("img/tween2.png");
  p3=loadImage("img/tween3.png");
}

function setup() {
  c = createCanvas(1240,1754);
  setupGif();
  frameRate(30);
  x=150;
}

function draw() {
  background(255);
  image(p1,0,0);
  image(p2,x,900);
  image(p30,0,0);
  if (recording) {
    gif.addFrame(c.elt, {delay: 1, copy: true});
  }
  x-=4;
  if(x==-778)
  {
    gif.render();
  }
}

function setupGif() {
  gif = new GIF({
    workers: 2,
    quality: 40
  });

  gif.on('finished', function(blob) {
    window.open(URL.createObjectURL(blob));
    setupGif();
  });
}
