let size = 20;
let width = window.innerWidth;
let height = window.innerHeight;
let dims = [Math.floor(window.innerWidth / size), Math.floor(window.innerHeight / size)];
let colors = [...Array(dims[0])].map((_) => Array(dims[1]).fill(0));

let MAX_DIST;

let COLOR_MODE_MAX = 100;
let DEFAULT_HUE = 80;
let DEFAULT_SATURATION = 80;
let DEFAULT_BRIGHTNESS = 80;

function reset_colors() {
  for (let i = 0; i < dims[0]; i++) {
    for (let j = 0; j < dims[1]; j++) {
      colors[i][j] = random(COLOR_MODE_MAX);
    }
  }
}

function setup() {
  createCanvas(width, height);
  noStroke();
  colorMode(HSB, COLOR_MODE_MAX);

  MAX_DIST = dist(0, 0, width, height) * 2;

  reset_colors();
  background(0);
}

function draw() {
  for (let i = 0; i < dims[0]; i++) {
    for (let j = 0; j < dims[1]; j++) {
      let mouseOffset = (dist(mouseX, mouseY, i * size, j * size) / MAX_DIST) * COLOR_MODE_MAX;
      let frameCountOffset = frameCount / 10;
      let color_variable = colors[i][j] + mouseOffset + frameCountOffset;
      fill(clamp(color_variable, 80, 90), clamp(color_variable, 30, 60), DEFAULT_BRIGHTNESS);
      square(i * size, j * size, size);
    }
  }
}

function mouseClicked() {
  reset_colors();
}

function clamp(value, lo, hi) {
  let mod = hi - lo;
  return abs((value % (2 * mod)) - mod) + lo;
}
