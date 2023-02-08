class Person {
    private ssn: string;  // proteced só é acessado da propria classe
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string { // O public é o default então pode ser moitido
        return `${this.firstName} ${this.lastName}`; 
    }

    protected getSsn(): string{   // protected só é acessado da própria classe e classes filhas
        return this.ssn;
    }

    getSsnPublic(): string{
       return  this.getSsn(); // getSsn() é protected então só pode ser acessado da própria classe
    }
}

let person = new Person('153-45pub4545-3www130', 'tito', 'Doe');
console.log(person.getSsnPublic()); // compile error

///////////////////
// Uma prop readonly pode ser declarada fora do construtor mas só pode ter valor adicionada dentro do construtor
class Person2 {
    readonly minhaprop : string;
    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person2 = new Person2(new Date(1990, 12, 25));
console.log("read only "  +person2.birthDate);