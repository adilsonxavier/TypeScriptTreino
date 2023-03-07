"use strict";
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    // compensationStatement() não é abstrato então tem ele tem implementação embora só possa ser
    // usado na instância da classe filha
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
        // ele pode, inclusive chamar a implementação na classe filha do método abstrato getSalary()
    }
}
// Ambas as classes FullTimeEmployee e Contractor herdam da classe abstrata Employee
// mas cada uma tem sua própria implementação de getSalary()
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Contractor extends Employee {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
}
let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);
//let employee = new Employee('John','Doe');
// erro: Cannot create an instance of an abstract class
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
//# sourceMappingURL=12classeabstrata.js.map