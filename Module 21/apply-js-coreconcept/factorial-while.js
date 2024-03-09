function factorial(number){

    let num = number;
    let result = 1;

    while( num <= 10) {

        result *= num;

        num++;
        console.log(num, result)
    }
    return result;
}

const number = 1;
const factorialNumber = factorial(number)

console.log(factorialNumber);