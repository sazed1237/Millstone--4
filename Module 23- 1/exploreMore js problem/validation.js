function validation(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
        console.log('Please enter a number!');
    }
    let add = num1 + num2;
    // console.log(add)
    return add;
}

const result = validation(54, true);
console.log(result);