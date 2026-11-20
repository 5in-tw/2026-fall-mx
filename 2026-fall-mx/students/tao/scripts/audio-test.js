const beepSound = document.getElementById("beepSound");
const playButton = document.getElementById("playBeep");

function beep() {
    beepSound.play();
}

playButton.addEventListener("click", beep);

const click1 = document.getElementById("click1");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");

const clickysound = [
    click1,
    click2,
    click3
];
console.log("click sounds", clickysound);
console.log("length", clickysound.length);

function randomItem(alist) {
    const randomNumber = Math.floor(alist.length *Math.random());
    return alist[randomNumber];
}

console.log(
    "random sound",
    randomItem(clickysound)
);


const playRandomButton = document.getElementById("play-random");
function randomClick() {
    const item = randomItem(clickysound);
    item.play();
}
playRandomButton.addEventListener("click", randomClick);
