// IMPORT MODULES under test here:
import cart from '../data/cart.js';
import campEquipment from '../data/camp-equip.js';

// import example from '../src/example.js';
import findById from '../common/utils.js';
import { calcLineItem } from '../common/utils.js';




const test = QUnit.test;

test('find the item by id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'tent';
    const expected = 'tent';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundItem = findById(cart, id);
    console.log(foundItem);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(foundItem.id, expected);
});


const test2 = QUnit.test;

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


