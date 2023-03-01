//Rest parameters //aceita vários agumentos como um array
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [2, 2, 3,5];
  
  console.log(sum(4,...numbers));
  // Expected output: 8
  

  let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

/// desestruturação
let meuobjeto={
    nome:"tito",
    sobrenome : "xavier"
}
let {sobrenome} = meuobjeto;
console.log(sobrenome);

//spread operator
const adrian = {
    fullName: 'Adrian Oprea',
    occupation: 'Software developer',
    age: 31,
    website: 'https://oprea.rocks'
};

//bill vai manter as propriedades occupation e age de adrian , sobrescrever as props fullName e website
// e incluir a prop novaprop porque ela não tem em adrian
const bill = {
    ...adrian,  // precisou vir primeiro, a ordem importa
    fullName: 'Bill Gates silva',
    website: 'https://microsoft.com',
    
    novaprop:"valor x"
};
 console.log(JSON.stringify(bill));
 
 /*
 { "fullName": "Bill Gates", 
    "occupation": "Software developer", 
    "age": 31, 
    "website": "https://microsoft.com" ,
    "novaprop":"valor x"}
*/

//outro exemplo

function merge(obj1, obj2) {
    return {
        ...obj1,
       ...obj2
    };
}

const obj1={ nome: "tito",sobrenome:"xavier"};
const obj2 = {sobrenome: "souza"}
console.log(merge(obj1,obj2)); //{nome: 'tito', sobrenome: 'souza'} pq o sobrenome de obj2 sobrescreveu o do obj1