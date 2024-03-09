function min(num1, num2, num3){
    if(num1< num2 && num1 < num3){
        console.log(num1, 'num1 is the min number')
    }
else if(num2 < num1 && num2 < num3){
    console.log(num2, 'num2 is the min number')
    }
    else{
        console.log(num3, 'num3 is the min number')
    }
}

const minNumber = min(0, 5, 2);


const minNumberInMath = Math.min(54, 12, 84);
console.log(minNumberInMath);