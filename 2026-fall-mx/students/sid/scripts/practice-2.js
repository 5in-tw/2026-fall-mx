    const button = document.getElementById("my-button");
console.log(button);

const title = document.getElementById("title");
console.log(title);

function testMyBotton(event) {
    console.log("Listn to my botton!",event);
}
testMyBotton("NOW");

button.addEventListener("click", testMyBotton);

function testBody(event) {
    console.log("Listen to body!",event);
}
document.body.addEventListener("click", testBody);

const cssSelector = '.footer';
const meta = document.querySelector(cssSelector)
console.log(meta);