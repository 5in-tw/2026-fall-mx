const key = 'color-scheme-choice';
const chooser = document.getElementById('color-chooser');
const metaTag = document.querySelector('meta[name="color-scheme"]') || document.querySelector('meta');

function setColorScheme(colorScheme) {
    if (metaTag) {
        metaTag.setAttribute('content', colorScheme);
    }
    localStorage.setItem(key, colorScheme);
}

function changeColor(event) {
    setColorScheme(event.target.value);
}

if (chooser) {
    chooser.addEventListener('change', changeColor);

    let savedColor = localStorage.getItem(key);

    if (savedColor) {
        setColorScheme(savedColor);
        chooser.value = savedColor;
    } else {
        setColorScheme('color');
        chooser.value = 'color';
    }
}
