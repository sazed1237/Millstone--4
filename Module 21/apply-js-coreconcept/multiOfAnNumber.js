// // 1 * 2 * 3 * 4 * 5 * 6 * 7 
// let multiNumber = 1;
// function multiplicationOfNumbers(numbers){
//     for (i = 1; i <= 7; i++){
//         multiNumber *= i;
//         console.log(i, multiNumber)
//     }
//     return multiNumber;
// }


// const factorialNumber = multiplicationOfNumbers()
// console.log('Total Multiplication number', factorialNumber);




// factorial
// 2! = 2*1
// 3! = 3*2*1
// 4! = 4*3*2*1
// 5! = 5**4*3*2*1

function factorial(numbers){
let factorialNumber = 1;
    for (i = number; i >= 1; i--){
        factorialNumber *= i;
        console.log(i, factorialNumber)
    }
    return factorialNumber;
}

const number = 10;
const factorialNumber1 = factorial(number)
// console.log(factorialNumber1)

console.log('Factorial of', number, factorialNumber1);