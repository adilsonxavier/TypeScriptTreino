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
// tirado um s
   
}
    // alterações na master por outra maquina
    let mainhavar = 5;
    //****** */

        // alterações na master por outra maquina2
        let mainhavar2 = 5;
        //****** */

let person = new Person("171280926", 'adilson', 'Xavier');
console.log(person.getFullName());
console.log(person.getSsn());