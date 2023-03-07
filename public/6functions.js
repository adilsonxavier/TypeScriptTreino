"use strict";
// Ex 1
// A variável add tem uma função do tipo function:
let add;
add = function (x, y) {
    return x + y;
};
console.log("add::" + add(5, 7));
//
// Aqui equivale aos 2 métodos acima
// let add: (a: number, b: number) => number =
//     function (x: number, y: number) {
//         return x + y;
//     };
// Parâmetro opcional    
// vai com o "?" na frente do nome do parâmetro ( tem sempre que serem os últimps parâmetros)
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
// Os parâmetros default não precisam ser os últimos mas também são opcionais
function applyDiscount(minhavar1 = "maysa ", price, discount = 0.05, minhavar2) {
    return (price * discount) + " " + minhavar2;
}
// como a var com valor default(portanto também opcional) minhavar não foi usada , eu tenho que passar na
// posição dela entre os parâmetros "undefined" ( e não null)
console.log(applyDiscount(undefined, 4, 6, "adilson"));
/////Rest Parameters // O numbers é tratado como um array de infinitos itens (por isso o foreach funciona com ele)
function getTotal(...numbers) {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log("gettotal " + getTotal(10, 20, 30, 4, 2, 2));
//# sourceMappingURL=6functions.js.map