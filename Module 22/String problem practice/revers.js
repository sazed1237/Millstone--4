function reverseString(text){
    for(let i = text.length - 1; i >= 0; i--){
        const element = text[i];
        console.log(element);
    }
}

const myString = 'I am a Bad boy';
const reversed = reverseString(myString);
// console.log(reversed);