
function reverseWord(text){
    const words = text.split(' ')
    const result = []
    console.log(words);
    for(let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    const reverseSentance = result.join(' ')
    return reverseSentance;
}



const myString = 'I am a bad boy';
const reversed = reverseWord(myString);
console.log(reversed);