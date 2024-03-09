const phones = [
    {name: 'Xaomi', camera: '64', storage: '64gb', price: 33000, color: 'black'},
    {name: 'Samsung', camera: '66', storage: '64gb', price: 23000, color: 'silver'},
    {name: 'iPhon', camera: '128', storage: '64gb', price: 99000, color: 'white1'},
    {name: 'Nokia', camera: '40', storage: '64gb', price: 50000, color: 'red'},
    {name: 'Symphony', camera: '32', storage: '64gb', price: 13000, color: 'silver'},
    {name: 'Techno', camera: '24', storage: '64gb', price: 15000, color: 'black'}
];

function chepestPhone(phones){
    chepest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i]
        // console.log(phone);
        if(phone.price < chepest.price){
            chepest = phone;
        }
    }
    return chepest;
}

const myPhone = chepestPhone(phones);
console.log(myPhone);