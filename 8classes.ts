class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getSsn():string {
        return this.ssn;
    }
s
   
}

let person = new Person("171280926", 'adilson', 'Doe');
console.log(person.getFullName());
console.log(person.getSsn());