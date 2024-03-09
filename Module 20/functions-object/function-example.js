/*
function functionName(){
    // function body
    // return
}

var returnvalue = functionName(parameters value)

*/


function getAverage(subject1, subject2, subject3){
    const totalSubMark = subject1 + subject2 + subject3;
    const subAverage = totalSubMark / 3;
    return subAverage;
}

var subject1Mark = 54;
var subject2Mark = 80;
var subject3Mark = 76;

var myAvarege = getAverage(subject1Mark, subject2Mark, subject3Mark);
console.log('My Average is: ', myAvarege);