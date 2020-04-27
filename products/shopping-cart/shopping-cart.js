//import cart from '../../data/cart.js';
import campEquipment from '../../data/camp-equip.js';
import renderLineItem from './render-line-item.js';
import findById, { calcOrderItem, formatPrice } from '../../common/utils.js';
//import { calcLineItem } from '../../common/utils.js';

const tBody = document.querySelector('tbody');
const orderDisplay = document.getElementById('order-total');

const newCart = localStorage.getItem('CART');
let cart = JSON.parse(newCart);

for (let i = 0; i < cart.length; i ++) {
    const cartItem = cart[i];
    const equipmentItem = findById(campEquipment, cartItem.id);
    const tableRow = renderLineItem(cartItem, equipmentItem);

    tBody.appendChild(tableRow);
    
}
const placeOrderButton = document.getElementById('place-order');

if (cart.length === 0) {

    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));

    });


}

    
const totalCostofItems = calcOrderItem(cart, campEquipment);
orderDisplay.textContent = formatPrice(totalCostofItems);










