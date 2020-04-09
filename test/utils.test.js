// IMPORT MODULES under test here:
import cart from '../data/cart.js';
//import campEquipment from '../data/camp-equip.js';

// import example from '../src/example.js';
import findById from '../common/utils.js';
import { calcLineItem, calcOrderItem } from '../common/utils.js';

const test = QUnit.test;

test('find the item by id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'tent';
    const expected = 'tent';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundItem = findById(cart, id);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(foundItem.id, expected);
});


test('find the total price for a line item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const qty = 3.00;
    const price = 3.01;
    const expected = 9.03;

    //Act 
    // Call the function you're testing and set the result to a const
    const totalPrice = calcLineItem(qty, price);
    

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(totalPrice, expected);
});

test('find the total price of all line items', function(assert) {
    const array1 = [{ id: 1, quantity: 2 }, { id:2, quantity: 3 }, { id: 3, quantity: 4 }];
    const array2 = [{ id: 1, price: 1 }, { id:2, price: 2 }, { id: 3, price: 3 }];
    const expected = 20;
    const finalTotal = calcOrderItem(array1, array2);
    assert.equal(finalTotal, expected);

});



