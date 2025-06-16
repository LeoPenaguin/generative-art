// sketch.js
function setup() {
  createCanvas(400, 300);
  background(20);
  noStroke();
  for (let i = 0; i < 100; i++) {
    fill(random(255), random(255), random(255), 150);
    ellipse(random(width), random(height), random(10, 80));
  }
}
