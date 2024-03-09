
function removeDuplicate(names){
    const uniqueNames = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(uniqueNames.includes(name) === false){
            uniqueNames.push(name);
        }
    }
    return uniqueNames;
}


const names = ['alim', 'kalim', 'jamil', 'jamal', 'jamal', 'alim', 'rubi', 'kalim'];
console.log(names);
const uniqueArray = removeDuplicate(names);
console.log(uniqueArray);