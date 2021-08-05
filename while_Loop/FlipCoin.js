const readline = require("prompt-sync");
const prompt=readline();

const head=1;
const tail=0;
let headCount=0;
let tailCount=0;

let i=1;
while (i>=0) {
    let flip = Math.floor(Math.random()*10)%2;
    console.log(flip)
    if (flip==head) {
        headCount++;
        if (headCount==11) {
            console.log("Head won");
            break;
        }
    }
    if (flip==tail) {
        tailCount++;
        if (tailCount==11) {
            console.log("Tail won");
            break;
        }
    }
}
