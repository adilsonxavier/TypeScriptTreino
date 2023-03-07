// Ex 1

// A variável add tem uma função do tipo function:
let add: (x: number, y: number) => number;

 add = function (x: number, y: number) {
    return x + y ;
};

console.log("add::"+ add(5,7))
//

// Aqui equivale aos 2 métodos acima
// let add: (a: number, b: number) => number =
//     function (x: number, y: number) {
//         return x + y;
//     };


// Parâmetro opcional    
// vai com o "?" na frente do nome do parâmetro ( tem sempre que serem os últimps parâmetros)
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// Os parâmetros default não precisam ser os últimos mas também são opcionais

function applyDiscount( minhavar1: string = "maysa ",price: number, discount: number = 0.05,minhavar2?: string): any {
    return (price * discount)+ " " + minhavar2;
  }

// como a var com valor default(portanto também opcional) minhavar não foi usada , eu tenho que passar na
// posição dela entre os parâmetros "undefined" ( e não null)
 console.log(applyDiscount(undefined,4,6,"adilson"));


 /////Rest Parameters // O numbers é tratado como um array de infinitos itens (por isso o foreach funciona com ele)
 function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
} 

console.log("gettotal "+ getTotal(10,20,30,4,2,2));



