const result = Math.pow(2, 3);
console.log(result);

const num1 = 15;
const num2 = 35;

const gap = Math.abs(num1 - num2);

if(gap < 5){
    console.log('You guys can be Friend.');
}
else{
    console.log('you guys stay apart');
}


// ................................
// Round
const number = 2.6484;
const fullNumber = Math.round(number);
console.log(fullNumber);


// ceil

const result1 = Math.ceil(2.00005);
console.log(result1)

// floor
const result2 = Math.floor(2.500005);

console.log(result2)





// random
// console.log(Math.random());

// const random = Math.random()*100;
const random = Math.round(Math.random()*6);

console.log(random);