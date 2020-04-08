
function formatPrice(price) {
    const newNum = '$' + price.toFixed(2);
    return newNum;
}

export default function renderLineItem(cartItem, campEquip) {
    
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = campEquip.name;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = formatPrice(campEquip.price);

    const totalTd = document.createElement('td');
    const totalPrice = formatPrice(campEquip.price * cartItem.quantity);
    totalTd.textContent = totalPrice;


    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;


}

//export default renderLineItem;


