// 1. Show document and getElementById
const button = document.getElementById("my-button");
console.log(button);

// 2. Experiment by: adding an id attribute to an element.
const myTitle = document.getElementById("my-title");
console.log(myTitle);

// 3. Create a function
function testMyButton(event) {
  console.log("Listen to my button!", event);
}

// 4. Call a function.
testMyButton("do the action!");

// 5. Make button click do something.
button.addEventListener("click", testMyButton);

// 6. Show event bubbling.
function testBody(event) {
  console.log("Listen to body!", event);
}
document.body.addEventListener("click", testBody);
