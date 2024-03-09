function paperRequirments(book1, book2, book3){
    let sum = 0;
    if((book1 < 100) && (book2 < 200) && (book3 < 300)){
        sum = sum + book1 + book2 + book3;
    }
    else{
        console.log("error")
    }
    return sum;
    // const add = book1 + book2 + book3;
}

const mybook1 = 10;
const mybook2 = 1254;
const mybook3 = 300;
const mybook = paperRequirments(mybook1, mybook2, mybook3);
console.log(mybook);