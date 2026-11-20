const beepSound = document.getElementById("beepSound");
const playButton = document.getElementById("playBeep");


function beep() {
    beepSound.play();
}

playButton.addEventListener("click", beep);

const click1 = document.getElementById("click1");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");

const clickySounds = [
    click1,
    click2,
    click3
];

console.log("clicky sounds", clickySounds);
console.log("length", clickySounds.length);

function randomItem(aList) {
   const randomNumber = Math.floor(aList.length * Math.random());
    return aList[randomNumber];
}

console.log(
    "random sound",
    randomItem(clickySounds)
);

const playRandomButton = document.getElementById("play-random");
function randomClick() {
    const item = randomItem(clickySounds);
    item.play();
}
playRandomButton.addEventListener("click", randomClick);
