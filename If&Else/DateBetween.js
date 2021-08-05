const readline = require("prompt-sync");
const prompt=readline();

let date = prompt("Enter a date ");
console.log(date);
let month = prompt("Enter a month ");
console.log(month);
let combination = ((parseInt(month)*100)+ parseInt(date));
console.log(combination);
if((combination > 320) && (combination < 620)){
    console.log("True");
}else{
    console.log("false");
}