const beepSound = document.getElementById("beepSound");
const playButton = document.getElementById("playBeep");

playButton.addEventListener("click", () => {beepSound.play();});

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

playRandomButton.addEventListener("click", randomClick)

let i = 0;

while( i < clickySounds.length ) {
    console.log( clickySounds[i] );

    let sound = clickySounds[i];
    console.log( sound.id );
    console.log( sound.src );
    console.log( sound.controls );
    sound.controls = true;

    if (i === 1) {
        console.log("Only when i = 1!");
    } else {
        console.log("When i is NOT 1!")
    }

    i++;
}

const audioTags = document.querySelectorAll("audio");
console.log("audioTags", audioTags)


let count = 0;
while( count < audioTags.length ) {
    console.log(audioTags[count]);

    count++;
}