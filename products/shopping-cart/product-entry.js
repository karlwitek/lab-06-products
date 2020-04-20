import { addProduct } from '../../common/utils.js';
import campEquipment from '../../data/camp-equip.js';

const stringedEquipment = JSON.stringify(campEquipment);
localStorage.setItem('PRODUCTS', stringedEquipment);

const trial1 = localStorage.getItem('PRODUCTS');
const trial2 = JSON.parse(trial1);

console.log('we are in product entry.js : ', trial2);


// const adminForm = document.getElementById('product-entry');

// adminForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const formData = new FormData(adminForm);

//     const newProduct = {
//         id: 
//     }

    

    //const stringedNewProduct = JSON.stringify(newProduct);
    //localStorage.setItem('PRODUCTS', stringedNewProduct);

//});


