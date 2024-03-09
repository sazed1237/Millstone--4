function evenOrOdd(myNumber){

    if(myNumber % 2 === 0){
        console.log("this is a Even Number!")
        return true;

    }
    else{
        console.log("this is a Odd Number!");
        return false;
    }
}

const myNumber = 55;
const result = evenOrOdd(myNumber)
console.log(result);