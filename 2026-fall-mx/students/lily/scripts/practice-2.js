const button = document.getElementById("my-button");
console.log(button);

const title = document.getElementById("title");
console.log(title)

function testMyButton(event) {
    console.log("listen to my button", event);
}
testMyButton("NOW");

button.addEventListener("click", testMyButton);

function testBody(event) {
    console.log("Listen to body", event);
}
document.body.addEventListener("click", testBody);

const cssSelector='footer';
const meta=document.querySelector(cssSelector);
console.log(meta);

