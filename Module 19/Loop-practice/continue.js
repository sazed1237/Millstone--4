var numbers = [45, 584, 21, 54, 74, 65, 41, 11, 99, 45, 78, 62]

for(i = 0; i < numbers.length; i++){
    var number = numbers[i]
    if(number > 50){
        continue;
    }
    console.log(number);
}
