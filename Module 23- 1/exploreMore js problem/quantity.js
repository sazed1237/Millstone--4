const cartItems = [
    {name: 'shoe', price: 5550, quantity: 5},
    {name: 'pent', price: 3050, quantity: 4},
    {name: 'shirt', price:2500, quantity: 2},
    {name: 'blet', price: 550 , quantity: 1} ,

];

function totalCost(products){
    let total = 0;
    for(i = 0 ; i <products.length; i++){
        const product = products[i];
        // console.log(product);
        const productTotal = product.price * product.quantity;
         total = total + productTotal; 
    }
    return total;
}

const totalPrice = totalCost(cartItems);
console.log(totalPrice);
