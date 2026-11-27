const beepSound = document.getElementById("beepsound");
const playbutton = document.getElementById("playbeep");

function beep() {
    beepSound.play();
}

playbutton.addEventListener("click", beep);
const click1=document .getElementById("click1");


playbutton.addEventListener("click", beep);
const click2=document .getElementById("click2");


playbutton.addEventListener("click", beep);s
const click3=document .getElementById("click3");


const clickySounds=[
    click1,
    click2,
    click3
]
console.log("clicky sounds", clickySounds);
console.log("length", clickySounds.length);
function randomItem(aList){
    const randomNumber= Math.floor(aList.length*Math.random());
    return
}

console.log(
    "random sound",
    randomItem(clickySounds)
)
const playRandomButton=document.getElementById("play-random");
function randomClick(){
    const item = randomItem(clickySound);
    item.play();
    
}
playRandomButton.addEventListener("click", randomClick)

let i = 0;
while ( i < clickysound.length) {
    console.log( clickysound[i]);

    let sound = clickysound[i];
    console.log( sound.id );
    console.log( sound.src );
    console.log( sound.controls );
    sound.controls = true;

    if (i === 1) {
        console.log("Only when i = 1 is NOT 1!");
    } else {
      console.log("When i is NOT 1!");
    }

  i++;
}

const audioTags = document.querySelectorAll("audio");
console.log("audioTags", audioTags);


let count = 0;
while ( count < audioTags.length ) {
    console.log(audioTags[count]);

    count++;
}