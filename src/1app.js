"use strict";
;
function getProduct(id) {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    };
}
const product = getProduct(23);
console.log(` 1app;ts The product ${product.name} costs $${product.price}`);
const showProduct = (nome, preco) => {
    console.log(`The product ${nome} costs R$ ${preco}.`);
};
showProduct(product.name, product.price);
// type annotatins
