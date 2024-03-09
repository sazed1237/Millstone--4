function getFactorial(number){
    let factorial = 1;

    for( i = 1; i <= 8; i++){
        factorial = factorial * i;
        
        console.log(i, factorial);
    }
    return factorial;
}

// let number = 8;
const factorial  = getFactorial(8);
console.log('factorial of 8 is: ', factorial);