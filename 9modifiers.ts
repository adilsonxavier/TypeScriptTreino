class Person {
    private ssn: string;  // proteced só é acessado da propria classe
    private firstName: string;
    private lastName: string;

    constructor(_ssn: string, firstName: string, lastName: string) {
        this.ssn = _ssn;
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
     birthDate : Date;

    constructor(readonly _birthDate: Date,_minhaprop) {
        this.birthDate = _birthDate;
        this.minhaprop= _minhaprop;
    }
}
let minhadata: Date= new Date(1999, 12, 25);
console.log("minha data ts "+ minhadata.getFullYear());

let person2 = new Person2(new Date(1999, 12, 25)," aaadilson");
// person2.minhaprop = "ddd"; // erro pq é readonly ( só pode ser assinada no construtor como ocorreu acima)
console.log("read only "  +person2.birthDate.getFullYear());
console.log("read only prop"  +person2.minhaprop);
