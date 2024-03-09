function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

const myFeet = 5.6;
let resultInch = feetToInch(myFeet).toFixed(2);
let inchFixed = parseFloat(resultInch);
console.log(inchFixed);
