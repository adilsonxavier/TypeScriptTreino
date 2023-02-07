// Ex 1
// A variável add tem uma função do tipo function:
// let add: (x: number, y: number) => number;
//  add = function (x: number, y: number) {
//     return x + y ;
// };
//
// Aqui equivale aos 2 métodos acima
var add = function (x, y) {
    return x + y;
};
// Parâmetro opcional    
// vai com o "?" na frente do nome do parâmetro ( tem sempre que serem os últimps parâmetros)
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
// Os parâmetros default não precisam ser os últimos mas também são opcionais
function applyDiscount(minhavar1, price, discount, minhavar2) {
    if (minhavar1 === void 0) { minhavar1 = "maysa "; }
    if (discount === void 0) { discount = 0.05; }
    return (price * discount) + " " + minhavar2;
}
// como a var com valor default(portanto também opcional) minhavar não foi usada , eu tenho que passar na
// posição dela entre os parâmetros "undefined" ( e não null)
console.log(applyDiscount(undefined, 4, 6, "adilson"));
/////Rest Parameters // O numbers é tratado como um array de infinitos itens (por isso o foreach funciona com ele)
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log("gettotal " + getTotal(10, 20, 30, 4, 2, 2));
//////////// metodo overload
var Counter = /** @class */ (function () {
    function Counter() {
        this.current = 0;
    }
    Counter.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Counter;
}());
var counter = new Counter();
console.log("counter===");
console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
