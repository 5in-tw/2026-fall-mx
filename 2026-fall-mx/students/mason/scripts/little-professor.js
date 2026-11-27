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
   
   if(id === "error"){
   audio.error = audioElement;    
   } else if (id === "success"){
    audio.success = audioElement;
   }else{
    clickySounds.push(audioElement);
   }
    i++;
}
console.log("audio", audio);
console.log("clickySounds", clickySounds);