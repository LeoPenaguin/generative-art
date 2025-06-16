function setup() {
  createCanvas(400, 400);
  noLoop();
  background(255);
  for (let i = 0; i < 50; i++) {
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), 40);
  }
}