console.log('working');

const key = 'color-scheme-choice';

function setColorScheme(colorSchem) {
    const metaTag = document.querySelector("meta");
    console.log(colorSchem, metaTag);
    metaTag.setAttribute("content",colorSchem);
}
//setColorScheme("light");

const chooser = document.getElementById("color-chooser");
console.log(chooser);

function changeColors(event) {
    console.log(event);
    setColorScheme(event.target.value);
}
chooser.addEventListener("change", changeColors);
