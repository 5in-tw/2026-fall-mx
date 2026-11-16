const bSound = document.getElementById('bSound');
const playButton = document.getElementById("playBeep");

function beep(){
    bSound.play();

}

playButton.addEventListener('click', beep)