function preload() {
  soundFormats('wav');
  eastbound = loadSound('assets/eastboundtrain.wav');
}

function setup() {
  eastbound.setVolume(0.1);
  eastbound.play();
}