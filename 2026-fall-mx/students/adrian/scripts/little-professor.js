let i;
const audioElements=document.querySelectorAll("audio");
console.log("audio",audioElements)

const audio={
    error:null,
    succes:null,
    click:[],
};
i=0

const clickSounds=[];
i=0;
while(i<audioElements.length){
    console.log(audioElements[i].scr);
    const audioElements = audioElements[i];
    const id= audioElements.i;
    if(id ==="error"){
        audio.error=audioElements;

    }else if (id==="success"){
        audio.success= audioElements;
    }else{
        clickSounds.push(audioElement);
    }
i++;
}
console.log("audio", audio);
console.log("clickSounds", clickSounds)