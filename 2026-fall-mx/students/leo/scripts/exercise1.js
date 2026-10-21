let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
];
console.log(alphabet);
console.log(alphabet.length );
console.log("alphabet 0", alphabet[0]);

const len = alphabet.length;

for(let i = 0;
    i< len;
    i++
) {
  console.log(i, alphabet[1]);
}
 for (
let i = len-1;
i >=0;
i--
) {
    console.log(i, alphabet[i]);

 }
 console.log('done!');