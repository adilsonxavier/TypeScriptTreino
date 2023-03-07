"use strict";
class Person {
    /* firstName e lastName estão como private nos argumentos do construtor
    Por isso não precisaram ser declarados antes:
    private firstName: string;
    private lastName: string;
    */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName} `;
    }
}
class Employee extends Person {
    constructor(firstName, lastName, jobTitle) {
        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
        this.jobTitle = jobTitle;
    }
    getJob() {
        return `profissão: ${this.jobTitle}`;
    }
    //Method overriding
    // O método describe() existe na classe mãe, pra sobrescrevelo é só declará-lo também na classe filha
    describe() {
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
    constructor(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        // Toda vês que uma instância de Employee2 é criada,
        // é acrescentado 1 á prop estática headcount
        Employee2.headcount++;
    }
}
Employee2.headcount = 0;
let john = new Employee2('John', 'Doe', 'Front-end Developer');
let jane = new Employee2('Jane', 'Doe', 'Back-end Developer');
console.log(`Total de funcs: ${Employee2.headcount}`); // 2
