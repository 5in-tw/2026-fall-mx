const beepSound = document.getElementById("beepSound");
const playButton = document.getElementById("playBeep");

playButton.addEventListener("click", () => {beepSound.play();});