function getSum(myNumbers){
    var sum = 0;
    for( i = 0; i < myNumbers.length; i++){
        var index = i
        var  element = myNumbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}


function getOddNumbersOfAnArray(myNumbers){
    const oddNumbers = [];
    for(i = 0; i < myNumbers.length; i++){
        const index = i;
        const element = myNumbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}



const myNumbers = [12, 13, 45, 55, 44, 68 ];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const getElement =  getSum(myNumbers);
console.log('this is the sum of this  array: ',getElement)



