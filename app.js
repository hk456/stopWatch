// ctrl btns
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');

// variables for seconds minutes hours
let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;

let status = "stopped";

// Define variables to hold "display" values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

function stopWatch() {
	seconds++;

	if (seconds / 60 == 1) {
		seconds = 0;
		minutes++;
	
		if (minutes / 60 == 1) {
			minutes = 0;
			hours++;
		}
	}

	if (seconds < 10) {
		displaySeconds = `0${seconds.toString()}`
	} else {
		displaySeconds = seconds;
	}

	if (minutes < 10) {
		displayMinutes = `0${minutes.toString()}`
	} else {
		displayMinutes = minutes;
	}

	if (hours < 10) {
		displayHours = `0${hours.toString()}`;
	} else {
		displayHours = hours;
	}

	// Display updated time values to user
	document.getElementById('display').textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function startStop() {
	if (status === "stopped") {
		interval = window.setInterval(stopWatch, 1000);
		document.getElementById('startStop').textContent = "Stop";
		status = "started";
		console.log(interval);
	} else {
		window.clearInterval(interval);
		document.getElementById('startStop').textContent = "Start";
		status = "stopped";
	}
}

function reset() {
	window.clearInterval(interval);
	seconds = 0;
	minutes = 0;
	hours = 0;
	document.getElementById('display').textContent = "00:00:00";
	document.getElementById('startStop').textContent = "Start";
}