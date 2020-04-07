import campEquipment from '../data/camp-equip.js';
import renderCampEquip from './render-function.js';

// for loop

const list = document.getElementById('list');

for (let i = 0; i < campEquipment.length; i ++) {
    const item = campEquipment[i];

    const elem = renderCampEquip(item);
    list.appendChild(elem);
}

