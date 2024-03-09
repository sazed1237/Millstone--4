function onlyPositive(arrayInput){
    let array = arrayInput[0]
    for(i = 1; i < arrayInput.length; i++){
        const number = arrayInput[i].
        console.log(number);


        if((number === 0) || (number <= 0)){
            break;
        }
        else{
            array = number;
        }
    }
    return array;
}


const myArray = [48, 54, 22, 11, -78, 15, 74];
const  resultArray = onlyPositive(myArray);
console.log('this is positive array', resultArray);