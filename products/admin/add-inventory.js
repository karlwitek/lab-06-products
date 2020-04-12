const myForm = document.getElementById('add-new-product');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const myFormData = new FormData(myForm);

    const product = {
        id: myFormData.get('id'),
        name: myFormData.get('name'),
        image: myFormData.get('image'),
        description: myFormData.get('description'),
        category: myFormData.get('category'),
        price: myFormData.get('price'),
    };
    console.log(product);
});


