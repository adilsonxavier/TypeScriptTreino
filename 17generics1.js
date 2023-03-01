// function getRandomElement(items: number[]): number {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var meuarray = [7, 8, 9, 10];
//var meuarray = ["71","81","91","101"];
//console.log(getRandomElement<string>(meuarray));
// ou usando inferência de tipo não precisa do <string>
console.log(getRandomElement(meuarray));
/////////////////////////////////////////
//Generic functions with multiple types
var Classe1 = /** @class */ (function () {
    function Classe1(name) {
        this.name = name;
    }
    return Classe1;
}());
var Classe2 = /** @class */ (function () {
    function Classe2(jobTitle) {
        this.jobTitle = jobTitle;
    }
    return Classe2;
}());
var obj1 = new Classe1("adilson");
var obj2 = new Classe2("dev");
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var result = merge(obj1, obj2);
console.log(JSON.stringify(result)); // {"name":"adilson","jobTitle":"dev"}
// Aqui o método merge usou inferência para saber que o primeiro parâmetro é U e o segundo é V e o
// retorno é uma intersecção dos 2 tipos
var result2 = merge({ name2: 'Johnxx' }, { jobTitle2: 'Frontend Developerxx' });
console.log(JSON.stringify(result2)); //{"name2":"Johnxx","jobTitle2":"Frontend Developerxx"}
/// Classe genéricas
//////////////////////
var IdentityClass = /** @class */ (function () {
    function IdentityClass(value) {
        this.value = value;
    }
    IdentityClass.prototype.getIdentity = function () {
        return this.value;
    };
    return IdentityClass;
}());
var myNumberClass = new IdentityClass(12);
console.log(myNumberClass.getIdentity()); // 1
var myStringClass = new IdentityClass("Hellos!");
console.log(myStringClass.getIdentity()); // Hello!
var inferindo = new IdentityClass("gatos");
console.log(inferindo.getIdentity()); // gato
console.log(typeof inferindo.getIdentity()); //string
