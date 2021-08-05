let i = 0;
let num = 0;
let randomNumbArr = new Array();

// generating 10 Random Numbers
for(i=0; i<10; i++) {
   num = Math.floor(Math.random()*( 999-100+1 )+ 100 );;
   console.log(num);
   randomNumbArr.push(num);
}

console.log(randomNumbArr);

//2nd maximum number 
let first=randomNumbArr[0];
let second=randomNumbArr[0];

for(i=0; i<10; i++){
    if(first<randomNumbArr[i]){
        second=first;
        first=randomNumbArr[i];
    }
    else{
        if(randomNumbArr[i] > second && randomNumbArr[i] !=first ){
            second=randomNumbArr[i];
        } 
    }
}

if (second==first) {
    console.log("No")
}
else{
    console.log("2nd maximum number : " + second)
}

//2nd minimun number 
let first1=randomNumbArr[0];
let second1=randomNumbArr[0];
for(i=0; i<10; i++){
    if(first1>randomNumbArr[i]){
        second1=first1;
        first1=randomNumbArr[i];
    }
    else{
        if(randomNumbArr[i] < second1 && randomNumbArr[i] !=first1 ){
            second1=randomNumbArr[i];
        } 
    }
}

if (second1==first1) {
    console.log("No")
}
else{
    console.log("2nd minimum number : " + second1)
}