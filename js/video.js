var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= .8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.ended == true) {
		playVid();
		video.playbackRate = 1;
	}
	else {
		video.currentTime += 60;
		console.log("Current location is " + video.currentTime );
		}
} 

function mute() { 
	let muteButton = document.querySelector('#mute');
  	if (video.muted) {
		video.muted = false;
		console.log("Changing to unmuted");
		muteButton.innerHTML = "Mute"

	}
	else {
		video.muted = true;
		  console.log("Changing to muted");
		  muteButton.innerHTML = "Unmute"
	}
      	
}

function changeVolume() {
	let volumeSlider = document.querySelector('#volumeSlider');
	document.querySelector("#volume").innerHTML = volumeSlider.valueAsNumber +"%";
	video.volume = volumeSlider.valueAsNumber/100;
	console.log("Volume is " + video.volume);
	
}
       

function gray() { 
	video.classList.add("grayscale")
}


function color() {
	video.classList.remove("grayscale")
}