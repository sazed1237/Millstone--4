
var array = [45, 45, 61, 21, 88];


function make_avg(array){
    var sum = 0;
    for( i = 0; i < array.length; i++){
        sum += array[i];
    }
    var totalAverage = sum / array.length;
    return totalAverage

}

var getAverage = make_avg(array)

console.log(getAverage)



