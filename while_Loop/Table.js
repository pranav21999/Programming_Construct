const readline = require("prompt-sync");
const prompt=readline();

let n = prompt("Enter the number : ");

let i = 1;
let res=1;
console.log("Table of 2^n");
while( i < n) {
    res=res*2;
    console.log(res);
    if (res==256) {
        break;
    }
    i++;
}
