console.log("Unit Conversion of Temperature");
console.log("1.Celsius to Farhenheit\n2.Farhenheit to Celsius");
let number = Math.floor(Math.random() *10) % 2 + 1;
console.log("Option is : "+number);
switch (number) {
    case 1:
        //To convert celcius into Fahrenheit
        console.log("Converting Celsius to Farhenheit");
        let random1 = Math.floor(Math.random() *100);
        console.log("Value of Celsius: "+random1);
        degC_to_degF(random1);
        break;
    default:
        //To convert Fahrenheit into Celcius
        console.log("Converting Farhenheit to Celsius");
        let random2 = Math.floor(Math.random() *1000) % (212-32) + 32;
        console.log("Value of Farhenheit: "+random2);
        degF_to_degC(random2);
}

function degC_to_degF(degC) {
    degF = (degC * 9 / 5) + 32;
    console.log(degC+" Celsius in Farhenheit: " + degF);
}
function degF_to_degC(degF) {
    degC = (degF - 32) * 5 / 9;
    console.log(degF+" Farhenheit in Celsius: " + degC);
}