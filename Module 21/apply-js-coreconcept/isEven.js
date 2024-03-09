// // this  is  Even Number
// console.log("This is Even Number!");
// console.log(4 / 2);
// console.log(44 / 2);
// console.log(1654 / 2);
// console.log(154 / 2);

// // this  is Odd Number
// console.log("This is Odd Number!")
// console.log(5 / 2);
// console.log(45 / 2);
// console.log(1657 / 2);
// console.log(159 / 2);


// // this  is  Even Number
// console.log("This is Even Number!");
// console.log(4 % 2);
// console.log(44 % 2);
// console.log(1654 % 2);
// console.log(154 % 2);

// // this  is Odd Number
// console.log("This is Odd Number!")
// console.log(5 % 2);
// console.log(45 % 2);
// console.log(1657 % 2);
// console.log(159 % 2);




function isEven(Number){
    const remainder = Number % 2;
    // console.log(remainder);
    if(remainder === 0){
        return true
        // console.log("this is a Even number!")
    }
    else{
        return false
        // console.log("This is an Odd Number!");
    }

}

const myNumberIsEven = isEven(45);
console.log(myNumberIsEven);

const myNumberIsOdd = isEven(500);
console.log(myNumberIsOdd);

