import findById from '../common/utils.js';

function renderCampEquip(equipmentItem) {
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const h2 = document.createElement('h2');
    const li = document.createElement('li');

    
    h1.textContent = equipmentItem.name;
    img.src = '../assets/' + equipmentItem.image;
    h3.textContent = equipmentItem.description;
    h2.textContent = equipmentItem.price;

    li.appendChild(h1);
    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(h2);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = equipmentItem.id;
    button.className = 'button-style';
    
    button.addEventListener('click', () => {

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }

        let lineItem = findById(cart, equipmentItem.id);

        if (!lineItem) {
            lineItem = { 
                id: equipmentItem.id,
                quantity: 1
            };

            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        alert('1 ' + equipmentItem.name + ' added to cart');
    });

    li.appendChild(button);

    return li;
    
}

export default renderCampEquip;

