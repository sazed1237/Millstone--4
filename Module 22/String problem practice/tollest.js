function maxArray(numbers){
    let largest = numbers[0];
    for(i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest
}



const heights = [167, 190, 120, 165, 137];
const tallest = maxArray(heights);
console.log('tallest person is:', tallest)