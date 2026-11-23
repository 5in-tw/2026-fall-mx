function randomInteger(start, end) {
    let range = end + 1 - start;
    return Math.floor(
    range * Math.random() + start
    );
}

randomInteger(6,10);
