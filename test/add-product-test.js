// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { addProduct } from '../common/utils.js';
import campEquipment from '../../data/camp-equip.js';

const stringedEquipment = JSON.stringify(campEquipment);
localStorage.setItem('PRODUCTS', stringedEquipment);


const test = QUnit.test;

test('test adding another product to existing array', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const newObject = {
        id: 'socks',
        name: 'Socks',
        image: null,
        description: 'cushioned toes',
        category: 'accessories',
        price: 10.00
    };
    
    addProduct(newObject);
    const array1 = localStorage.getItem('PRODUCTS');
    const array2 = JSON.parse(array1);
    const expected = newObject;
   
    const result = array2[array2.length - 1];

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
