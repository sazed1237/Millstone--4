// function leapYear(myYear){
//     const findLeapYear = myYear % 4;
//     if(findLeapYear === 0){
//         console.log(myYear, "my Year is a Leap Year");
//     }
//     else{
//         console.log(myYear, "your Year is not a Leap Year");
//     }
// }

// const myYear = 2000;
// const isMyYearLeapYear = leapYear(myYear);
// console.log(isMyYearLeapYear);


// const isHerYearLeapYear = leapYear(2050);
// console.log(isHerYearLeapYear);



// function isLeapYear(year){
    
//     if((year % 2 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
//         console.log(year, "your year is a leap year")
//     }
//     else{
//         console.log(year, 'your year is not leap year')
//     }
// }

// const year = 1969;
// const isMyYearLeapYear = isLeapYear(year);


function isLeapYear(year){
    const leap = new Date(year, 1, 29).getDate ==29;
    if(leap){
        console.log(year, "your year is a leap year")
    }
    else{
        console.log(year, "your year is not leap year")
    }
}

const year = 1684;
const isHerYearLeapYear = isLeapYear(year)