console.log('working');

const key = 'color-scheme-choice';

function setcolorScheme(colorScheme){
    const metaTag = document.querySelector('meta');
    console.log(colorScheme, metaTag);
    metaTag.setAttribute("content", colorScheme);
}
//setcolorScheme("light");

const chooser = document.getElementById("color-chooser")
console.log(chooser);

function changeColors(event){
    console.log(event);
    setcolorScheme(event.target.value);
}
chooser.addEventListener("change", changeColors);