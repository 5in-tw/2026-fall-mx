const button = document.getElementById("my-button");
console.log(button);

const title = document.getElementById("title");
console.log(title);

function testMybutton(event){
    console.log("Listen to my button!", event);
}

testMybutton("NOW");

button.addEventListener("click", testMybutton);

function testMyBody(event){
    console.log("Listen to my body!", event);
}
document.body.addEventListener("click", testMyBody);

const cssSelector = '.footer';
const meta = document.querySelector(cssSelector);
console.log(meta);