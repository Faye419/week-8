class Color {
  constructor(_r,_g,_b){
    this.r = _r;
    this.g = _g;
    this.b = _b;
  }
}

let canvas;
let gui;
let color;
let easyCam;
let displayState = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element
  easyCam = createEasyCam();
  let state = {
    distance: 1500,
    center  : [0, 0, 0],
    rotation: [0.9279116079642078, -0.2760465000923418, -0.2415840653641595, 0.06644935631122713]
  };
easyCam.setState(state, 0);

  color = new Color(255,0,0);

  //dat Gui expects an object 1st param, the property name to affect 2nd param, and slider range 3rd & 4th params
  gui = new dat.GUI();
  gui.add(color, 'r', 0, 255);
	gui.add(color, 'g', 0, 255);
	gui.add(color, 'b', 0, 255);

}

function draw() {
  background(200,200,250);
  angleMode(DEGREES);
  noStroke();
  lights();
  ambientMaterial(color.r,color.g,color.b);


  for (var x = -400; x <= 400; x += 50) {
    for (var z = -400; z <= 400; z += 50) {
        push();
        translate(x, 0, z);
        var distance = dist(x, 0, z, 0, 0, 0);
        var length = sin(distance + frameCount * 5) * 100 + 200;
        cylinder(50, length, 50);
        pop();
    }
  }
}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}