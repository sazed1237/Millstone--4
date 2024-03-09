var shoppingCart = {
    books: 5,
    sunglass: 1,
    keyboard: 4,
    mouse: 4,
    pen: 40
}


const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);



// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]

for(i = 0; i< keys.length; i++){
    var propertyName = keys[i];
    var propertiesValue = shoppingCart[propertyName];
    console.log(propertyName, propertiesValue);
}