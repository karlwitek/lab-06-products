export default function findById(cartArray, id) {
    // loop the array
    for (let i = 0; i < cartArray.length; i++) {
        const cartItem = cartArray[i];
        // check the id with cartItem id
        if (cartItem.id === id) {
            return cartItem;
        }
       
    }
}


function calcLineItem(quantity, price) {
    return Math.round((quantity * price) * 100) / 100;
}

export { calcLineItem };



