const beepSound = document.getElementById("beepSound");
const playButtom = document.getElementById("playBeep");

function beep() {
    beepSound.play();
}

playButtom.addEventListener("click", beep);