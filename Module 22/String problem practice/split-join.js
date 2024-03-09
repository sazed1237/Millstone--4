const lyrics = 'tumi bondhu kala pakhi. ami jano ki . bosonto kale tumai bolte pari ni.';

const words = lyrics.split(' ');
const sentance = lyrics.split('.');
const character = lyrics.split('');
console.log(character);



// slice 
const partial = lyrics.slice(10, 20);

console.log(partial);




// join 
const newLine = [
    'tumi bondhu kala pakhi',
    'ami jano ki',
    'bosonto kale tumai bolte pari ni',
  ];

  const newSong = newLine.join('. ').trim();
  console.log(newSong);