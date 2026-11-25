let i;
const audioElements = document.querySelectorAll("audio");
console.log("audio", audioElements);

const audio = {
    error: null,
    success: null,
    click: [],
};
i = 0;
while (i < audioElements.length) {
 console.log(audioElements[i].src);
    i++;
}
