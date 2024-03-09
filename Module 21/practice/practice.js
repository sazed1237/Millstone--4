// inch to Feet

function inchToFeet(inchNumber){
    var feet = inchNumber / 12;
    console.log(feet)
    return feet;
}

const inchNumber = 50;
const feetNumber = inchToFeet(inchNumber).toFixed(2);

const toFixedNumber = parseFloat(feetNumber);

console.log('your feet is', toFixedNumber);