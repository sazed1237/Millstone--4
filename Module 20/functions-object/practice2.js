
function make_avg(num1, num2, num3){
    var totalNum = num1 + num2 + num3;
    var totalAverage = totalNum / 3; 
    return totalAverage;
}

var make_avg_values1 = 45;
var make_avg_values2 = 78;
var make_avg_values3 = 25;

var  getAverage = make_avg(make_avg_values1, make_avg_values2, make_avg_values3).toFixed(2);

getAverage = parseInt(getAverage)

console.log('the average is: ', getAverage);



