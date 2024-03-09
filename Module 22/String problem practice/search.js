const lyrics = 'tumi bondhu kala pakhi ami jano ki . bosonto kale tumai bolte pari ni.';


const searchString = "kALa"
// const doseExist = lyrics.includes('pakhi');
// const doseExist = lyrics.includes('pAkhi');
// const doseExist = lyrics.includes(find);


const lyricsLowerCase = lyrics.toLowerCase();
const searchLowerCase = searchString.toLowerCase();

const doseExist = lyricsLowerCase.includes(searchLowerCase);
console.log(doseExist);

const doseExist1 = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doseExist1);





// indexOf

console.log(lyrics.indexOf('pakhi'))
console.log(lyrics.indexOf('Pkhi'))

if(lyrics.indexOf('tmi') !== -1){
console.log('exists inside the string!');
}
else{
    console.log('cannot find it!');
}
