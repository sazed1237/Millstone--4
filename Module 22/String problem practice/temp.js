var first = 1;
var second = 2;
console.log(first, second);


// approach: 1
// var temp = first;
// first = second;
// second = temp;

// console.log(first, second);


// approach: 2 -------Destructuring 
[first, second] = [second, first];

console.log(first, second)