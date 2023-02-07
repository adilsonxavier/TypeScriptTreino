;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var product = getProduct(23);
console.log(" 1app;ts The product ".concat(product.name, " costs $").concat(product.price));
var showProduct = function (nome, preco) {
    console.log("The product ".concat(nome, " costs R$ ").concat(preco, "."));
};
showProduct(product.name, product.price);
// const heading = document.querySelector('div');
