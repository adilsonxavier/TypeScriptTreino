// Overloading mesma quantidade de parâmetros e ttipos diferentes
function add(a: number, b: number): number;
function add(a: string, b?: string): string;
function add(a: any, b: any): any {
   return a + b;
}

console.log("add num: "+add(5,7));
console.log("add string: "+add("5","7"));

//////////////////////

// Overloading mesmo tipo de parâmetros e quantidades diferentes
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
// o último parâmetro da sobrecarga que implementa precisa ser opcional e checado se existe
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

console.log("sum 2: "+sum(4,2));
console.log("sum 3: "+sum(4,2,1));

//////////// metodo overload

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

let counter = new Counter();
console.log("counter===");
console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array