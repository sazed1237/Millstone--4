/* 
1. if ticket numbers is less then 100, per ticket price: 100;
2. if ticket numbers is more than 100, but less than 200. first 100 tickets will be 100/ticket 
rest ticket rate will be 90 taka per piece.
3. if you purchase more than 200 tickets
first 100-----> 100taka
101 - 200 -------> 90tk
200+ --------------> 70tk

*/


function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
}

const quantity = 1;
const discoutPrice = ticketPrice(quantity);
console.log(discoutPrice);