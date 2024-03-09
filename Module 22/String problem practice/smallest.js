function smallestAnArray(numbers){
    let lowest = numbers[0];
    for(i = 0; i < numbers.length; i++){
        const element = numbers[i]
        console.log(element)
        if(element < lowest){
            lowest = element
        }   
    }
    return lowest;
}

const heights = [167, 190, 120, 165, 137, 25];
const smallest = smallestAnArray(heights);
console.log('smallest person is:', smallest)