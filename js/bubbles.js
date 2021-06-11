const nav = document.getElementById("nav");
let navWidth = nav.offsetWidth;
let navHeight = nav.offsetHeight;

const bubbles = [];
let timer = 0, timerTarget = 0;

function setup() {
  let canvas = createCanvas(navWidth,navHeight);
  canvas.parent("nav");
}

function draw() {
  clear();
  background(0, 0);
  if (timer == timerTarget) {
    timerTarget = floor(random(30, 50));
    timer = 0;
    let bubble = new Bubble();
    bubbles.push(bubble);
  }
  bubbles.forEach(b => {
    b.draw();
    if (b.delete()) {
      bubbles.splice(1, bubbles.indexOf(b));
    }
  });
  timer++;
}

window.onresize = function() {
    resizeCanvas(navWidth, navHeight);
}

class Bubble {
  constructor() {
    this.x = random(0,navWidth);
    this.y = navHeight;
    this.r = random(40,100);
    this.vx = random(1,-1);
    this.vy = 3;
  }
  draw() {
    noStroke();
    fill(255, 100);
    ellipse(this.x, this.y, this.r);
    this.x += this.vx;
    this.y -= this.vy;
  }
  delete() {
    if (this.y < -this.r) return true;
    else return false;
  }
}
