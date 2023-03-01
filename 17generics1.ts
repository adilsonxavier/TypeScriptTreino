// function getRandomElement(items: number[]): number {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }



function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
 var meuarray = [7,8,9,10];
//var meuarray = ["71","81","91","101"];
//console.log(getRandomElement<string>(meuarray));
// ou usando inferência de tipo não precisa do <string>
console.log(getRandomElement<number>(meuarray));

/////////////////////////////////////////
//Generic functions with multiple types

class Classe1{
   name:string;
   constructor(name:string){
    this.name = name;
   }
}

class Classe2{
    jobTitle:string;
    constructor(jobTitle:string){
     this.jobTitle = jobTitle;
    }
 }

var obj1 = new Classe1("adilson");
var obj2 = new Classe2("dev");


function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,  // intersecção
       ...obj2
    };
}

let result = merge<Classe1,Classe2>(obj1,obj2);

console.log(JSON.stringify(result));  // {"name":"adilson","jobTitle":"dev"}


// Aqui o método merge usou inferência para saber que o primeiro parâmetro é U e o segundo é V e o
// retorno é uma intersecção dos 2 tipos
let result2 = merge(
    { name2: 'Johnxx' },
    { jobTitle2: 'Frontend Developerxx' }
);

console.log(JSON.stringify(result2));  //{"name2":"Johnxx","jobTitle2":"Frontend Developerxx"}

/// Classe genéricas
//////////////////////

class IdentityClass<T>  {
    // O tipo T é identificado nos membros propriedade, construtor e function abaixo mas também funciona
    // sem o T no teste que fiz, bastando ter sido identificado acima em IdentityClass<T>
    value: T
  
    constructor(value: T) {
      this.value = value
    }
  
    getIdentity () : T {
      return this.value
    }
  
  }
  
  const myNumberClass = new IdentityClass<Number>(1)
  console.log(myNumberClass.getIdentity()) // 1
  
  const myStringClass = new IdentityClass<string>("Hello!")
  console.log(myStringClass.getIdentity()) // Hello!

  const inferindo = new IdentityClass("gato");
  console.log (inferindo.getIdentity());  // gato
  console.log (typeof inferindo.getIdentity()); //string