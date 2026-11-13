const beepSound = document.getElementById("beepSound");
const playButton = document.getElementById("playBeep");

function beep() {
    beepSound.play();
}

playButton.addEventListener("click", beep);
