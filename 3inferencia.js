function increment(counter) {
    return ++counter;
}
// O TS infere que o retorno é number graças ao return
//It is the same as:
// function increment(counter: number) : number {
//     return ++counter;
// }
console.log("3inferencia::" + increment(6));
var items = [0, 1, null, 'Hi'];
console.log("3inferencia::" + typeof (items[3]));
console.log("3inferencia::" + items[3]);
//let items = [0, 1, null, 'Hi']; //(string | number | null)[]
// retorno any:
function retAny(nome) {
    //return "adilson"; // ok
    //return 123; // ok
}
