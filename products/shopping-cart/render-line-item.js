//import { calcLineItem } from '../../common/utils.js';
import { formatPrice } from '../../common/utils.js';



export default function renderLineItem(cartItem, campEquip) {
    
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = campEquip.name;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = formatPrice(campEquip.price);

    const totalTd = document.createElement('td');
    const totalPrice = (campEquip.price * cartItem.quantity);
    totalTd.textContent = formatPrice(totalPrice);


    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;


}




