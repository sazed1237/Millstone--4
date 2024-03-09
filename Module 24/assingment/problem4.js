function findingBadData(array){
    let countBadData = array[0];
    for(i = 0; i < array.length; i++){
        const number = array[i];
        // console.log(number);

        if((number <= -0)){
            countBadData = number.length;
            
        }
    }
    return countBadData;
}

const givenArray = [ 2, -5, -7, -13, -5, -2 ];
const outputNumber = findingBadData(givenArray);
console.log(outputNumber);