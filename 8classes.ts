class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
  
     /** Não entendi por que mas declarando os argumentos do construtor como private não precisou declarar
      * aws variáveis acima nem os this. abaixo
      */

   // constructor(private ssn: string, private firstName: string, private lastName: string) {        
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getSsn():any {
        return this.ssn;
    }
s
   
}

let person = new Person("171280926", 'adilson', 'Doertre233');
console.log(person.getFullName());
console.log(person.getSsn());