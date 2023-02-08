// 1 - Usando a interface para validar um objeto que está sendo criado
//--------------------------------------------------------------------

interface Person {
    firstName: string;
    lastName: string;
    other?: number;  // opcional na interface
    readonly propreadonly: string
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName} - ${person.propreadonly}`;
}

// Para que o readonly da interface (propreadonly) seja chacável e só possa ser usado na instanciação da
// classe precisa passar o tipo Person na instanciação:
//let person: Person = {

let person =  {
    firstName: 'John',
    lastName: 'Doe',
    //other: 1
    propreadonly: "adilson"
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