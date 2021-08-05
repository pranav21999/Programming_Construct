let i = 0;
let num = 0;
let randomNumbArr = new Array();

/*
 generating 10 Random Numbers
*/
for(i=0; i<10; i++) {
   num = Math.floor(Math.random()*( 999-100+1 )+ 100 );;
   console.log(num);
   randomNumbArr.push(num);
}

console.log(randomNumbArr);
/*
Sort an Array by .sort() method
*/ 
let sortArr = randomNumbArr.sort();
console.log(sortArr);
/*
Find Second_Large and Second_Min Values  by Index
*/ 
console.log("2nd Smallest Number in the Array: "+sortArr[1]);
console.log("2nd Largest Number in the Array: "+sortArr[8]);