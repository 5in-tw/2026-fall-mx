const bSound = document.getElementById('bSound');
const playButton = document.getElementById("playBeep");

function beep(){
    bSound.play();

}

playButton.addEventListener('click', beep)

playButton.addEventListener("click", beep)

const click1 = document.getElementById("click1");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");


const clickSounds = [
    click1,
    click2,
    click3,
];

console.log("clicky sound", clickSounds);
console.log("length", clickSounds.length)

function randomItem(aList) {
    const randomNumber = Math.floor(aList.length * Math.random());
    return aList[randomNumber];
}

console.log("random sound", randomItem(clickySounds));

const playRandomButton = document.getElementById("play-random");
function randomClick(){
    const Item = randomItem(clickSounds);
    Item.play();
}
playRandomButton.addEventListener("click", randomClick)