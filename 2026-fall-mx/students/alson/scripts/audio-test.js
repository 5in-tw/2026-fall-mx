const beepSound = document.getElementById("beepSound")
const palyButton =document.getElementById("playBeep")

function beep() {
beepSound.play();
}

palyButton.addEventListener("click", beep)