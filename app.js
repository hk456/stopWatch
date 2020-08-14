// ctrl btns
const playBtn = document.querySelector('.play-btn img');
const resetBtn = document.querySelector('.reset-btn img');

function play() {
	alert('play');
}

function reset() {
	alert('reset');
}

document.addEventListener("click", function(e) {
	if (e.target == playBtn) play();
	if (e.target == resetBtn) reset();
});