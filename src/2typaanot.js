"use strict";
let nomes = ['John', 'Jane', 'Peter', 'David', 'Mary'];
console.log(nomes[1]);
let person;
person = {
    name: 'adilson',
    age: 25
};
console.log(person.name);
//Function arguments & return types
let greeting; // o método é obrigatório voltar string
let greeting2; // É só um template sem implementação
// let greeting3: (name: string) ; erro '=>' expected.ts(1005) == Ma declaração da função com type anotatiom
//é obrigatório mencionar o tipo de retorno
let greeting3;
greeting3 = (nome) => { return "adilson"; };
// definindo a implementação
greeting = function (name) {
    return `Hi ${name}`; // sem um retorno string da erro
    //return 2;
};
greeting2 = (nome) => {
    return nome;
};
// function greeting2(nome){ // Duplicate identifier 'greeting2'
//     return "adilson";
// }
console.log(greeting2("adilson222"));
document.addEventListener('click', function (event) {
    console.log(event.button); // 
});
document.addEventListener('scroll', function (event) {
    // console.log(event.button); // compiler error
});
