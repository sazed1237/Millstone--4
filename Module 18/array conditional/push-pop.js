var numbers = [45, 84, 31, 46, 22, 31];
var numbers1 = [88, 97, 73, 13, 22, 17];

numbers.push(numbers1, 200);
console.log(numbers);




console.log(numbers1);

var element1 = numbers1.pop();

numbers1.pop();
console.log(numbers1);
console.log(element1);
