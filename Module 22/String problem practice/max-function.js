
function max(num1, num2, num3){

    if(num1 > num2 && num1 > num3){
        console.log(num1, "Num1 is the max number")
    }
    else if(num2 > num1 && num2 > num3){
        console.log( num2, 'Num2 is the max number')
    }
    else{
        console.log(num3, 'Num3 is the max number')
    }
}

const num1 =  44;
const num2 = 24; 
const num3 = 21
const maxNumber = max(num1, num2, num3);



// math.max
const mathMaxNumber = Math.max(num1, num2, num3);
console.log(mathMaxNumber)