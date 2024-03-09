var destinations = ['sajek', 'coxbazar', 'nepal']

console.log(destinations[2]);
destinations[2] = 'Thailand';
var index = destinations.indexOf('sajek');

destinations.push('bhutan');
destinations.pop();


// conditionals 
// < , > , ==, !=, <=, <=
// &&, ||

if (destinations[1] == 'sajek'){
    console.log("we are going to saject")
}
else if (destinations[3] === "Coxbazar"){
    console.log("cosbazar jabo");
}
else if (destinations.length !== 4){
    console.log("we are not going anyware ");
}
else{
    console.log("tumi gorib tmr jonno hatirjheel ei thik ache")
};