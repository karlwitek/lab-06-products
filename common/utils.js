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

function formatPrice(anyPrice) {
    const formatPrice = `$${Number(anyPrice).toFixed(2)}`;
    return formatPrice;
}

function calcOrderItem(cartArray, productsArray) {
    let grandTotal = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const lineItem = cartArray[i];
        const product = findById(productsArray, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, product.price);

        grandTotal += lineTotal;

    }
    return grandTotal;

}

export { calcLineItem, formatPrice, calcOrderItem };





