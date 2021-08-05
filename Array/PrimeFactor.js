const readline = require("prompt-sync");
const prompt=readline();

let num = prompt("Enter the Number : ");
let factorsArr = new Array();
console.log("Factors of the Given Number: ");

//To check for prime factors of a number
function primeFactors(num) {
   for(let i = 2; i <= num; i++) {

       while( num % i == 0) {
           factorsArr.push(i);
           num = num / i;
       }
    }
    return factorsArr;
}

console.log(primeFactors(num));