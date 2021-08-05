
let myMap = new Map();
let MAXCOUNT = 10;
/*
* Taking variable i,j,k,l,m,n for count 1,2,3,4,5,6 respectily
  */
let count = 1, count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0;
let i = 1, j = 1, k = 1, l = 1, m = 1, n = 1;

/*
condition in while loop:count should less than MaxCount
Roll Die until get max Count
*/
while ( (i <= MAXCOUNT) && (j <= MAXCOUNT) && (k <= MAXCOUNT) && (l <= MAXCOUNT) && (m <= MAXCOUNT) && (n <= MAXCOUNT) ) {
    let die_roll = Math.floor ( Math.random() * 6 ) + 1;
    //set count in map
    myMap.set(count, die_roll);
    switch(die_roll) {
        case 1:
            while ( count1 <= MAXCOUNT ) {
                count1++;
                i++;
                break;
            }
            break;
        case 2:
            while ( count2 <= MAXCOUNT ) {
                count2++;
                j++;
                break;
            }
            break;
        case 3:
            while ( count3 <= MAXCOUNT ) {
                count3++;
                k++;
                break;
            }
            break;
        case 4:
            while ( count4 <= MAXCOUNT ) {
                count4++;
                l++;
                break;
            }
            break;
        case 5:
            while ( count5 <= MAXCOUNT ) {
                count5++;
                m++;
                break;
            }
            break;
        case 6:
            while ( count6 <= MAXCOUNT ) {
                count6++;
                n++;
                break;
            }
            break;                
    }
    count++;
}

console.log(myMap);
/*
*Find MaxCount by If_Else Condition
*/
if ( count1 == MAXCOUNT ) {
    console.log ("1 has reached maximum count.");
}
else if( count2 == MAXCOUNT ) {
    console.log ("2 has reached maximum count.");
}
else if( count3 == MAXCOUNT ) {
    console.log ("3 has reached maximum count.");
}
else if( count4 == MAXCOUNT ) {
    console.log ("4 has reached maximum count.");
}
else if( count5 == MAXCOUNT ) {
    console.log ("5 has reached maximum count.");
}
else if( count6 == MAXCOUNT ) {
    console.log ("6 has reached maximum count.");
}

