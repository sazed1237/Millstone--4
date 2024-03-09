function bestFriend(nameArray){
    let largest = nameArray['0'];

    for(i = 0; i < nameArray.length; i++){
        const name = nameArray[i]
        // console.log(name)

        if(name.length >= largest.length){
            largest = name;
        }
        // console.log(largest);
    }
    return largest
}

const friendName = ['sazed', 'kamal', 'jamal', 'jubayer bin ahad', 'sabor'];
const bigName = bestFriend(friendName);
console.log('this is largest name', bigName);