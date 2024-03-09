/*
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log("this year is a leap year!");
        return true;
    }
    else{
    return false;
        // console.log("your year is not a Leap year!")
    }
}

const isMyYearLeapYear = isLeapYear(1854);
console.log("my Year is an Leap Year: ", isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(2020);
console.log("Her year is an Leap Year: ", isHerYearLeapYear)


*/



// // 2nd method 
// function checkLeapYear(year){
//     if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0 )){
//         console.log(year ,"is a leap year!");
//     }
//     else{
//         console.log(year ,"is not a leap year!");
//     }

// }

// const year = 1952;
// checkLeapYear(year);



// 3rd method
function checkLeapYear(year){

    const leap = new Date(year, 1, 29).getDate() == 29;
    if(leap){
        console.log(year ,"is a leap year");
    }
    else{
        console.log(year ,"is not a leap year");
    }
}


const year = 2021;
checkLeapYear(year);