import cart from '../../data/cart.js';
import campEquipment from '../../data/camp-equip.js';
import renderLineItem from './render-line-item.js';
import findById from '../../common/utils.js';
//import { calcLineItem } from '../../common/utils.js';

const tBody = document.querySelector('tbody');
//const orderTotal = document.getElementById('order-total');

for (let i = 0; i < cart.length; i ++) {
    const cartItem = cart[i];
    console.log(cartItem);
    const equipmentItem = findById(campEquipment, cartItem.id);
    console.log(equipmentItem);
    const tableRow = renderLineItem(cartItem, equipmentItem);

    tBody.appendChild(tableRow);
    
}






