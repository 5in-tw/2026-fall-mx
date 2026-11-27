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

    if(id === "error"){
        audio.error = audioElement;
    } else if (id === "success") {
        audio.success = audioElement;
    } else {
        clickSounds.push(audioElement);
    }
    i++;
}
console.log("audio", audio);
console.log("clickSounds", clickSounds)

const allbutton = document.querySelector("button");


const calcbutton = document.querySelectorAll(".buttons button");


function randomInteger(low, high) {
    return Math.floor(low + Math.random() * (high - low + 1));
}

//
//EVENT LISTTENERS
//

function playRandomClick() {
    const randomNumber = Math.floor(clickSounds.length * Math.random());
    const item = clickSounds[randomNumber];
    item.play();
}