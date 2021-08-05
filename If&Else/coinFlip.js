/*
pupuse:generate Random No and print head and tails accordingly
*/
const randomNumber = Math.floor( Math.random() * 2 ) + 1;

if ( randomNumber == 1 ) {
    console.log("Its a HEAD!");
}
else {
    console.log("Its a TAIL!");
}