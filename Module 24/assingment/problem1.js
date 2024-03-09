function mindGame(inputNumber){
    let multiplay = inputNumber * 3;
    let sum = multiplay + 10;
    let div = sum / 2;
    let substraction = div - 5;

    return substraction;
}


const givenNumber = 33;
const outputNumber = mindGame(givenNumber);
console.log('Return OutPut:', outputNumber)