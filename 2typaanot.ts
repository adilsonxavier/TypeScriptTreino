
let nomes: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
 
console.log(nomes[1]);


let person: {
    name: string;
    age: number
 };
 
 person = {
    name: 'adilson',
    age: 25
 }

 console.log(person.name);

 //Function arguments & return types

 let greeting : (name: string) => string; // o método é obrigatório voltar string
 let greeting2 : (name: string) => string; // É só um template sem implementação
 
 // definindo a implementação
 greeting = function (name: string) {
    return `Hi ${name}`; // sem um retorno string da erro
   //return 2;
};


greeting2 =(nome)=>{
    return nome
}

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