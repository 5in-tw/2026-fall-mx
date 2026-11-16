const beepSound = document.getElementById("beepsound");
const playbutton = document.getElementById("playbeep");

function beep() {
    beepSound.play();
}

playbutton.addEventListener("click", beep);







