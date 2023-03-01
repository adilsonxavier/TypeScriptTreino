// 1 - Usando a interface para validar um objeto que está sendo criado
//--------------------------------------------------------------------

interface IPerson {
    firstName: string;
    lastName: string;
    other?: number;  // opcional na interface
    propreadonly: string
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName} - ${person.propreadonly}   `;
}

// Para que o readonly da interface (propreadonly) seja chacável e só possa ser usado na instanciação da
// classe precisa passar o tipo Person na instanciação:
//let person: Person = {

let person : IPerson =  {
    firstName: 'John',
    lastName: 'Doe',
    //other: 1
    propreadonly: "adilson",
  };

person.propreadonly = "maysa";

console.log(getFullName(person));

// Descrevendo tipos de funções
//-----------------------------

interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (mystr: string, isUpper: boolean) {
    return isUpper ? mystr.toLocaleUpperCase() : mystr.toLocaleLowerCase();
};

console.log(format('hi', true));

// Class Types
//-----------------------------

interface IMeuJson {
    toJSON(): string
 }

 class Person2 implements IMeuJson {
    constructor(private firstName: string,
        private lastName: string) {
    }
    toJSON(): string {
        return JSON.stringify(this.firstName);
    }
}

let person2 = new Person2('John11', 'Doe11');
console.log(person2.toJSON());


// //*******************
interface IPessoa{
    primNome: string;
    ultNome: string;
    minhafunc: (nome: string) => string;
}

// Aqui a interface está realmente sendo usada como um contrato para a classe Pessoa e não só como um tipo 
// Se usar 2 pontos ao invés e implements dá erro:
//'IPessoa' only refers to a type, but is being used as a value here
//
class Pessoa implements IPessoa 
{
    primNome = "2";
    ultNome = "x";
    minhafunc = function(nome) {return nome};
}

// Aqui pessoa2 é só uma variável e não é instancia de classe nenhuma e a interface IPessoa está sendo usada 
// apenas para validar o conteúdo de pessoa2 então eu uso 2 pontos e não implements
let pessoa2 :IPessoa;
pessoa2 = {
    primNome : "2",
    ultNome : "x",
    minhafunc : function(nome) {return nome}
}
// let pessoa: Pessoa = new Pessoa() {
//     primNome : "adilson";
//     ult

// }
