function preload() {
	intervalCurrentPosition(positionPing, 5000)
	locationData = getCurrentPosition();
	startingPoint = getCurrentPosition();
  soundFormats('wav');
    keydoor = loadSound('assets/keydoor.wav');
  eastbound = loadSound('assets/eastboundtrain.wav');
  brighton = loadSound('assets/brightonbeach.wav');
  greatromances = loadSound('assets/texas.wav');
  weirdbubbles = loadSound('assets/weirdbubbles1.wav');

}

function setup() {
	keydoor.play();
	print(startingPoint);

}

function positionPing(position){
	print(position);
}

function touchStarted() {
  getAudioContext().resume()
}
