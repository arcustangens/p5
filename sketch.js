let dims = [29, 15];
let size = 50;
let width = dims[0] * size;
let height = dims[1] * size;
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

  MAX_DIST = dist(0, 0, width, height);

  reset_colors();
  background(0);
}

function draw() {
  for (let i = 0; i < dims[0]; i++) {
    for (let j = 0; j < dims[1]; j++) {
      let offset = lerp(
        0,
        COLOR_MODE_MAX,
        dist(mouseX, mouseY, i * size, j * size) / MAX_DIST
      );
      // let color_variable =
      //   (colors[i][j] + offset + frameCount / 10) % COLOR_MODE_MAX;
      // fill(color, DEFAULT_SATURATION, DEFAULT_BRIGHTNESS);
      let color_variable =
        abs(((colors[i][j] + offset + frameCount / 2) % 120) - 60) + 20;
      fill(DEFAULT_HUE, color_variable, DEFAULT_BRIGHTNESS);
      square(i * size, j * size, size);
    }
  }
}

function mouseClicked() {
  reset_colors();
}
