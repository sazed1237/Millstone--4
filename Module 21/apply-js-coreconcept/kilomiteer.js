function milesToKilomiter(miles){
    const kilomiter = miles * 1.609;
    return kilomiter;

}


const inputMiles = 52;
const inputKilomiter = milesToKilomiter(inputMiles);
console.log(inputKilomiter);