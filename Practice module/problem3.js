function paperRequirments(book1, book2, book3){
    let sum = 0;
    if((book1 <= 100) && (book2 <= 200) && (book3 <= 300)){
        if(book1 <= 100){
            sum = sum + book1;
        }
        else{
        console.log("Book1 page in limit: 100")
        }

        
        if(book2 <= 200){
            sum = sum + book2;
        }
        else{
        console.log("Book2 page in limit: 200")
        }

        if(book3 <= 300){
            sum = sum + book3;
        }
        else{
        console.log("Book3 page in limit: 300")
        }
    }
    else{
        console.log("error")
    }
    return sum;
    // const add = book1 + book2 + book3;
}

const mybook1 = 10;
const mybook2 = 154;
const mybook3 = 3050;
const mybook = paperRequirments(mybook1, mybook2, mybook3);
console.log(mybook);