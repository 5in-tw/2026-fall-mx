let i;
const audioElements = document.querySelectorAll("audio");
console.log("audio", audioElements);

const audio = {
    error:null,
    success:null,
};
 const clickSounds = [];
i=0;
while (i < audioElements.length){
    console.log(audioElements[i].src);
const audioElements = audioElements[i];
const id = audioElements.id;

if (id ==="error")  {
audio.error = audioElements;
}else if (id === "success"){
  audio.sussess = audioElements;
}else{
   clickSounds .push(audioElements);
}
i++;
}
console.log("audio",audio);
console.log("clickySounds",clickSounds);

