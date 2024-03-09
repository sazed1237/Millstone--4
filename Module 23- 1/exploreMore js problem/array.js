const country = 'Bangladesh';
const age = 50;
const isIndependent = true;
const student = {id: 154, class: 12, name: 'sazed'};
const friends = [12, 15, 55, 456, 457, 45];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using array.isArray()
console.log(Array.isArray(friends));
console.log(typeof add);


// ------------------
console.log(friends.includes(2));

if(friends.indexOf(154) !== -1){
    console.log('is in exist');
}
else{
    console.log('is not exist');
}



// concat
const newFriendsAge = [12, 21, 54];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);