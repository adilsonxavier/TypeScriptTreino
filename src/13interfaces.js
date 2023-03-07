"use strict";
// 1 - Usando a interface para validar um objeto que está sendo criado
//--------------------------------------------------------------------
function getFullName(person) {
    return `${person.firstName} ${person.lastName} - ${person.propreadonly}   `;
}
// Para que o readonly da interface (propreadonly) seja chacável e só possa ser usado na instanciação da
// classe precisa passar o tipo Person na instanciação:
//let person: Person = {
let person = {
    firstName: 'John',
    lastName: 'Doe',
    //other: 1
    propreadonly: "adilson",
};
person.propreadonly = "maysa";
console.log(getFullName(person));
let format;
format = function (mystr, isUpper) {
    return isUpper ? mystr.toLocaleUpperCase() : mystr.toLocaleLowerCase();
};
console.log(format('hi', true));
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toJSON() {
        return JSON.stringify(this.firstName);
    }
}
let person2 = new Person2('John11', 'Doe11');
console.log(person2.toJSON());
// Aqui a interface está realmente sendo usada como um contrato para a classe Pessoa e não só como um tipo 
// Se usar 2 pontos ao invés e implements dá erro:
//'IPessoa' only refers to a type, but is being used as a value here
//
class Pessoa {
    constructor() {
        this.primNome = "2";
        this.ultNome = "x";
        this.minhafunc = function (nome) { return nome; };
    }
}
// Aqui pessoa2 é só uma variável e não é instancia de classe nenhuma e a interface IPessoa está sendo usada 
// apenas para validar o conteúdo de pessoa2 então eu uso 2 pontos e não implements
let pessoa2;
pessoa2 = {
    primNome: "2",
    ultNome: "x",
    minhafunc: function (nome) { return nome; }
};
// let pessoa: Pessoa = new Pessoa() {
//     primNome : "adilson";
//     ult
// }
