const beepSound = document.getElementById("beepSound");
const playButton = document.getElementById("playBeep");


function beep() {
    beepSound.play();
}

playButton.addEventListener("click", beep);

const click1 = document.getElementById("click1");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");

const clickSound = [
    click1,
    click2,
    click3
];
