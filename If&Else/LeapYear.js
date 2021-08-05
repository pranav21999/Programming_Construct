const readline = require("prompt-sync");
const prompt=readline();

let year = prompt("Enter year : ");

if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
    console.log("leap year");
else
	console.log("Common Year");