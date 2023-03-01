// function merge<U, V>(obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     };
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
    return __assign(__assign({}, obj1), obj2);
}
// Aqui o método merge usou inferência para saber que o primeiro parâmetro é um objetod do tipi  U e o segundo é
// do tipo  V e o // retorno é uma intersecção dos 2 tipos
// Contudo ele aceita que um dos parâmetros não seja um objeto:
var person = merge2({ name: 'John' }, 
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
var str = prop({ name: 'John da silva' }, 'name');
console.log(str);
