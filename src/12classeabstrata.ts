abstract class Employee {
    constructor(private firstName: string, private lastName: string) {
    }
    
    // getSalary() é abstrato então terá que ser implementado na classe filha
    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // compensationStatement() não é abstrato então tem ele tem implementação embora só possa ser
    // usado na instância da classe filha
     compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
        // ele pode, inclusive chamar a implementação na classe filha do método abstrato getSalary()
    }
} 

// Ambas as classes FullTimeEmployee e Contractor herdam da classe abstrata Employee
// mas cada uma tem sua própria implementação de getSalary()
class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

//let employee = new Employee('John','Doe');
// erro: Cannot create an instance of an abstract class

console.log(john.compensationStatement());
console.log(jane.compensationStatement());