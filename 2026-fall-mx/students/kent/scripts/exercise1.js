let alphabet = [
    "a",
    "b",
    "c"
    "d",
    "e",
];
console.log(alphabet);
console.log(alphabet.length);
console.log("alphabet 0 ", alphabet[0])

const len = alphabet.length;

for (
    let i = len;
    i < len;
    //Beware of infinite loops!
    i++
) {
    console.log(i, alphabet[i]);
}
for (
    let i = len - 1;
    
 ) {
    console.log(i, alphabet[i])

}
console.log('done');
