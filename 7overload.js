function add(a, b) {
    return a + b;
}
console.log("add num: " + add(5, 7));
console.log("add string: " + add("5", "7"));
// o último parâmetro da sobrecarga que implementa precisa ser opcional e checado se existe
function sum(a, b, c) {
    //if (c) return a + b + c;
    return a + b;
}
console.log("sum 2: " + sum(4, 2));
console.log("sum 3: " + sum(4, 2, 1));
//////////// metodo overload
// class Counter {
//     private current: number = 0;
//     count(): number;
//     count(target: number): number[];
//     count(target?: number): number | number[] {
//         if (target) {
//             let values: number[] = [];
//             for (let start = this.current; start <= target; start++) {
//                 values.push(start);
//             }
//             this.current = target;
//             return values;
//         }
//         return ++this.current;
//     }
// }
// let counter = new Counter();
// console.log("counter===");
// console.log(counter.count()); // return a number
// console.log(counter.count(20)); // return an array
