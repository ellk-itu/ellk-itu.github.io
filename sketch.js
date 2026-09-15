function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100, 100, 100);

  for (let i = 0; i < 100; i++) {
    fill(color(random(255), random(255), random(255)));
    circle(mouseX * random(-2, 2), mouseY * random(-2 * 2), 10);
  }
}
