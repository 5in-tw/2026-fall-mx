const beepSound = document.getElementById("beepSound");
const playButton = document.getElementById("playBeep");

function beep() {
    beepSound.play();
}

playButton.addEventListener("click", beep); 

const click1 = document.getElementById("click1");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");

const clickSounds = [
    click1,
    click2,
    click3
];

console.log("clicky sound", clickSounds);
console.log("length", clickSounds.length);


function randomItem (aList) {
    const randomNumber = Math.floor(aList.length * Math.random());
    return aList [randomNumber];
}

console.log ("random sound", randomItem(clickSounds));
const playRandomButton = document.getElementById("play-random" );
function randomClick(){
    const item = randomItem(clickSounds);
    item.play();
}

playRandomButton.addEventListener("click", randomClick) ;

let i = 0;
while (i < clickSounds.length){
console.log (clickSounds[i] );
let sound = clickSounds [i]
console.log(sound.id);
console.log(sound.src);
console.log(sound.controls);
sound.controls = false;
if (i===1) {
    console.log("Only when i = 1!");
} else {
    console.log("When i is not 1!");
}
i++;
}


const audioTags = document.querySelectorAll("audio");
console.log("audioTags", audioTags);

let count = 0;
while(count < audioTags.length){
    console.log(audioTags[count]);
    count++;
}