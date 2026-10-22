let masonIsHandsome = true;
const ant = "mason";

console.log(ant);
let smart = "mason";

let jasperIsStupid = true;
if (masonIsHandsome) {
    console.log("very");
}
else {
    console.log("oH No")
}

function askAboutGame() {


    let gameSystem = prompt("what is the game system?");
    switch (gameSystem) {
        case "ps5":
            console.log("star wars");
            break;
        case "switch2":
        case "switch":
            console.log("zelda");
            break;
        default:
            console.log("never heard of it");
    }
}

const button = document.getElementById('my-button');
button.addEventListener("click", askAboutGame);
