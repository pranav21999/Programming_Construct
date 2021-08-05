const readline = require("prompt-sync");
const prompt=readline();

let a = prompt("Enter 1st number : ");
let b = prompt("Enter 2nd number : ");
let i;
let n;
console.log("Prime numbers between "+a+" and "+b+" are");
for(n=a;n<=b;n++){
    for(i=2;i<n;i++){
        if(n%i==0){
            break;
        }
    }
    if(i==n){
        console.log(n);   
    } 
}