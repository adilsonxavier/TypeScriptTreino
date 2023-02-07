var nomes = ['John', 'Jane', 'Peter', 'David', 'Mary'];
console.log(nomes[1]);
var person;
person = {
    name: 'adilson',
    age: 25
};
console.log(person.name);
//Function arguments & return types
var greeting; // o método é obrigatório voltar string
var greeting2; // o método é obrigatório voltar string
greeting = function (name) {
    return "Hi ".concat(name);
    //return 2;
};
greeting2 = function (nome) {
    return nome;
};
// function greeting2(nome){ // Duplicate identifier 'greeting2'
//     return "adilson";
// }
console.log(greeting2("adilson222"));
