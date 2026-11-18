const beepSound = document. getElementById("beepSound");
const playButton = document.getElementById("playBeep");

playButton.addEventListener("click", () => {
    beepSound.play();
});

const click1 = document.getElementById("click1");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");

const clickySound = [
    click1,
    click2,
    click3,
];