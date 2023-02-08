class Person {
    /* firstName e lastName estão como private nos argumentos do construtor 
    Por isso não precisaram ser declarados antes:
    private firstName: string;
    private lastName: string;
    */


    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
       this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName} `;
    }
}

class Employee extends Person {
    constructor(firstName: string, lastName: string,   private jobTitle: string) {
        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    getJob(): string {
        return `profissão: ${this.jobTitle}`
    }

    //Method overriding
    // O método describe() existe na classe mãe, pra sobrescrevelo é só declará-lo também na classe filha
    describe(): string {
         // Posso invocar também o método describe() da classe mãe
       /// return super.describe() + `I'm a ${this.jobTitle}.`;
       return `I'm a ${this.jobTitle}.`;
    }
}

let employee = new Employee('John', 'Doe', 'Web Developeraaa4543');

console.log(employee.getFullName());
console.log(employee.getJob());
console.log(employee.describe()); //This is John Doe 

//****************************************** */

//Métodos estáticos
class Employee2 {
    static headcount: number = 0;

    constructor( private firstName: string,private lastName: string,    private jobTitle: string) {
        // Toda vês que uma instância de Employee2 é criada,
        // é acrescentado 1 á prop estática headcount
                Employee2.headcount++; 

    }
}

let john = new Employee2('John', 'Doe', 'Front-end Developer');
let jane = new Employee2('Jane', 'Doe', 'Back-end Developer');



console.log(`Total de funcs: ${Employee2.headcount}`); // 2

