function centimeterToMeter(centimeter){
    const meter = centimeter * 0.01;
    return meter;
}

const myCentimeter = 2001;
const resultToMeter = centimeterToMeter(myCentimeter);
const fixedMeter = parseInt(resultToMeter);
console.log(fixedMeter);