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
} else if (id === "success") {
    audio.success = audioElement;
} else {
clickSounds.push(audioElement);
   }   i++;
}
console.log("audio", audio);
console.log("clickSounds", clickSounds);


const allButtons = document.querySelectorAll("button");
const calcButtons = document.querySelectorAll(".button button");

//
// helper functions
//

function randomInteger(low, high) {
    return Maath.floor(low + Math.random() * (high - low +1));
}

//
//EvEnt listeners
//

function playRandomClick() {
    const randomNumber = Math.floor(clickSounds.length * Math.random());
    const item = clickSounds[randomNumber];
    item.play();
}
calcButtons.forEach((item) => {
    item.addEventListener("click", playRandomClick);
});