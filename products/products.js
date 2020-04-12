import campEquipment from '../data/camp-equip.js';
import renderCampEquip from './render-function.js';

const PRODUCTS_KEY = 'PRODUCTS';
let equipmentList = localStorage.getItem(PRODUCTS_KEY);

// if there are no campEquipment , seed the data
if (!equipmentList) {
    // seed data
    equipmentList = JSON.stringify(campEquipment);

    localStorage.setItem(PRODUCTS_KEY, equipmentList);

    //equipmentList = localStorage.getItem(PRODUCTS_KEY);
    // still a string , parse  below and use in for loop

}
const list = document.getElementById('list');

const parsedEquipmentList = JSON.parse(equipmentList);

for (let i = 0; i < parsedEquipmentList.length; i ++) {
    const item = parsedEquipmentList[i];

    const itemDisplay = renderCampEquip(item);
    list.appendChild(itemDisplay);
}

