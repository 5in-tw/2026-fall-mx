let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e"
] ;
console.log(alphabet);
console.log( alphabet.length );
console.log("alphabet 1", alphabet[0]);

const len = alphabet.length;

for (
    let i = 0;
    i < len;
   
    i ++
) {
    console.log(i, alphabet[i]);
}

for (
    let i = len-1;
    i >=0;
    i--
) {
     console.log(i, alphabet[i]);

}
console.log('done!');