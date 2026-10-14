console.log('working')

const key = 'color-sheme-chice'

function setColorScheme(ColorScheme) {
    const metaTag = document.querySelector('meta');
    console.log(ColorScheme, metaTag);
    metaTag.setAttribute("content", ColorScheme);
}
//setColorScheme("light");

const chooser = document.getElementById("color-chooser")
console.log(chooser);

function changeColor(event) {
    console.log(event);
    setColorScheme(event.target.value);
}
chooser.addEventListener("change", changeColor);