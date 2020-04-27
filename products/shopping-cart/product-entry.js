import { addProduct } from '../../common/utils.js';
import campEquipment from '../../data/camp-equip.js';

const stringedEquipment = JSON.stringify(campEquipment);
localStorage.setItem('PRODUCTS', stringedEquipment);

const adminForm = document.getElementById('product-entry');

adminForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(adminForm);

    const newProduct = {
        id: formData.get('id'),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: formData.get('price')

    };
    // console.log(newProduct.id);

    // const newList = localStorage.getItem('PRODUCTS');
    // const parseNewList = JSON.parse(newList);
    // parseNewList.push(newProduct);
    // console.log(parseNewList);
    addProduct(newProduct);
    

    
});



