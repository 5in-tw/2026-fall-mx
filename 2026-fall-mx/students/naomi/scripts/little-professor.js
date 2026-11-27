let i;
const audioElements = document.querySelectorAll("audio");
console.log("audio", audioElements);

const audio = {
    error: null,
    success: null,
};
const clickySounds = [];
i = 0;
while (i < audioElements.length) {
    console.log(audioElements[i].src);
    const audioElement = audioElements[i];
    const id = audioElement.id;

    if (id === "error") {
        audio.error = audioElement;
    } else if (id === "success") {
        audio.success = audioElement;
    } else {
        clickySounds.push(audioElement);
    }

    i++;
}
console.log("audio", audio);
console.log("clickSounds", clickySounds);

const allButtons = document.querySelectorAll("button");

const calcButtons = document.querySelectorAll(".buttons button")

//
// HELPER FUNCTIONS
//

function randomInteger(low, high) {
    return Math.floor(low + Math.random() * (high - low + 1));
}

//
// EVENT LISTENERS
//

function playRandomClick(){
    const randomNumber = Math.floor(clickySounds.length * Math.random());
    const item = clickSounds[randomNumber];
    item.play();
}