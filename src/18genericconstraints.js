"use strict";
// function merge<U, V>(obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     };
// }
// // Aqui o método merge usou inferência para saber que o primeiro parâmetro é um objetod do tipi  U e o segundo é
// // do tipo  V e o // retorno é uma intersecção dos 2 tipos
// // Contudo ele aceita que um dos parâmetros não seja um objeto:
// let person = merge(
//     { name: 'John' },
//     25
// );
// console.log(person); //{name: 'John'}
// Para denotar uma constraint usa a palavra "extends" com o numero do objeto
function merge2(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// Aqui o método merge usou inferência para saber que o primeiro parâmetro é um objetod do tipo  U e o segundo é
// do tipo  V e o // retorno é uma intersecção dos 2 tipos
// Contudo ele aceita que um dos parâmetros não seja um objeto:
let person = merge2({ name: 'John' }, 
//25  aqui vai dar erro graças ao V extends object na declaração da função merge2 pois o segundo parâmetro agora é
// um object e não nummer
{ sobrenome: "xavier" });
console.log(person); // {name: 'John', sobrenome: 'xavier'}
//////////////////////////////
//Using type parameters in generic constraints
// function prop<T, K>(obj: T, key: K) {
//     return obj[key]; //Erro: Type 'K' cannot be used to index type 'T'.
// }
// Deu erro por que não tem como inferir que a prop key que é do tipo K vai ser um índice válido em obj[key]
//To fix this error, you add a constraint to K to ensure that it is a key of T as follows:
function prop(obj, key) {
    return obj[key];
}
let str = prop({ name: 'John da silva' }, 'name');
console.log(str);
// funciona por que "name" do segundo parâmetro é uma propriedade do objeto passado no primeiro parâmetro
//Se passar um nome de índice inválido como name2:
//let str2 = prop({ name: 'John da silva' }, 'name2'); // Erro Argument of type '"name2"' is not assignable to parameter of type '"name"
/*
Summary
Use extends keyword to constrain the type parameter to a specific type.
Use extends keyof to constrain a type that is the property of another object.
*/ 
