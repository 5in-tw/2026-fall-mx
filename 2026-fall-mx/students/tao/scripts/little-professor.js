let i;
const audioElements = document.querySelectorAll("audio");
console.log("audio", audioElements);

const audio = {
    error: null,
    success: null,  
};
const clickSounds = [];
i = 0;
while (i < audioElements.length) {
    console.log(audioElements[i].src);
    const audioElement = audioElements[i];
    const id = audioElement.id;
    
    if (id === "error") {
        audio.error = audioElement;
    } else if (id === "sucess") {
        audio.sucess = audioElement;
    } else {
        clickSounds.push(audioElement);
    }
    i++;
}
console.log("audio", audio);
console.log("clickSounds", clickSounds);

const allButtons = document.querySelectorAll("button");
const calcButtons = document.querySelectorAll(".buttons buttons");

function randomInteger(low, high) {
    return Math.floor(low + Math.random() * (high - low + 1));
} 


function playRandomClick() {
    const randomNumber = Math.floor(clickSounds.length * Math.random());
    const item = clickSounds[randomNumber];
    item.play();
} 