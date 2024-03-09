const cartItems = [
    {name: 'shoe', price: 5550},
    {name: 'pent', price: 3050},
    {name: 'shirt', price: 2500},
    {name: 'blet', price: 550},

];

function totalCost(products){
    let total = 0;
    for(i = 0 ; i <products.length; i++){
        const product = products[i];
        console.log(product);

         total = total + product.price; 
    }
    return total;
}

const totalPrice = totalCost(cartItems);
console.log(totalPrice);
