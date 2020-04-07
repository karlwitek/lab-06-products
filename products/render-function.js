

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

    return li;
    
}

export default renderCampEquip;

