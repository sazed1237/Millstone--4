var shoppingCart = {
    books: 5,
    sunglass: 1,
    keyboard: 4,
    mouse: 4,
    pen: 40
}


// when you know the specific property name, using dot notations
var penCount = shoppingCart.pen;

// alternative system
var penCount2 = shoppingCart['pen'];

var propertyName = 'keyboard';
var propertyValue = shoppingCart[propertyName];

// console.log(propertyName, propertyValue);




var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertiesValue);

console.log(shoppingCart);




// set property values
shoppingCart.books = 50;
console.log(shoppingCart);

shoppingCart['sunglass'] = 40;
console.log(shoppingCart);

shoppingCart[propertyName] = 100;
console.log(shoppingCart);


