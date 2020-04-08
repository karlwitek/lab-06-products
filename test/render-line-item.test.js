import { renderLineItem } from '../shopping-cart/render-line-item.js';



test('renders a line item', assert => {

    const cartItem = {
        id: 'tent',
        quantity: 2
    };

    const campEquipment = {
        id: 'tent',
        name: 'Tent',
        image: 'tent.png',
        description: 'Under 8lbs and designed for easy set up',
        category: 'light',
        price: 150.00

    };

    const expected = '<tbody><tr><td>Tent</td><td>2</td><td>150.00</td><td>300.00</td></tr></tbody>';

    const tableRow = renderLineItem(cartItem, campEquipment);
    const html = tableRow.outerHTML;

    assert.equal(html, expected);

});





