function evenOdd(str){
    const findEvenOrOdd = str.length;

        if(findEvenOrOdd % 2 === 0){
            console.log('this is a Even')
        }
        else{
            console.log('this is a Odd ')
        }
    }

const inputStr = 'chatgpt';
const outputStr = evenOdd(inputStr);
// console.log('output sting even or odd is:', outputStr);