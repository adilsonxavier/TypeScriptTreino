"use strict";
// function getRandomElement(items: number[]): number {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }
function getRandomElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var meuarray = [7, 8, 9, 10];
//var meuarray = ["71","81","91","101"];
//console.log(getRandomElement<string>(meuarray));
// ou usando inferência de tipo não precisa do <string>
console.log(getRandomElement(meuarray));
/////////////////////////////////////////
//Generic functions with multiple types
class Classe1 {
    constructor(name) {
        this.name = name;
    }
}
class Classe2 {
    constructor(jobTitle) {
        this.jobTitle = jobTitle;
    }
}
var obj1 = new Classe1("adilson");
var obj2 = new Classe2("dev");
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let result = merge(obj1, obj2);
console.log(JSON.stringify(result)); // {"name":"adilson","jobTitle":"dev"}
// Aqui o método merge usou inferência para saber que o primeiro parâmetro é U e o segundo é V e o
// retorno é uma intersecção dos 2 tipos
let result2 = merge({ name2: 'Johnxx' }, { jobTitle2: 'Frontend Developerxx' });
console.log(JSON.stringify(result2)); //{"name2":"Johnxx","jobTitle2":"Frontend Developerxx"}
/// Classe genéricas
//////////////////////
class IdentityClass {
    constructor(value) {
        this.value = value;
    }
    getIdentity() {
        return this.value;
    }
}
const myNumberClass = new IdentityClass(1);
console.log(myNumberClass.getIdentity()); // 1
const myStringClass = new IdentityClass("Hello!");
console.log(myStringClass.getIdentity()); // Hello!
const inferindo = new IdentityClass("gato");
console.log(inferindo.getIdentity()); // gato
console.log(typeof inferindo.getIdentity()); //string
