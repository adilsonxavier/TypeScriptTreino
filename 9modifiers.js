var Person = /** @class */ (function () {
    function Person(_ssn, firstName, lastName) {
        this.ssn = _ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getSsn = function () {
        return this.ssn;
    };
    Person.prototype.getSsnPublic = function () {
        return this.getSsn(); // getSsn() é protected então só pode ser acessado da própria classe
    };
    return Person;
}());
var person = new Person('153-45pub4545-3www130', 'tito', 'Doe');
console.log(person.getSsnPublic()); // compile error
///////////////////
// Uma prop readonly pode ser declarada fora do construtor mas só pode ter valor adicionada dentro do construtor
var Person2 = /** @class */ (function () {
    function Person2(_birthDate, _minhaprop) {
        this._birthDate = _birthDate;
        this.birthDate = _birthDate;
        this.minhaprop = _minhaprop;
    }
    return Person2;
}());
var minhadata = new Date(1999, 12, 25);
console.log("minha data ts " + minhadata.getFullYear());
var person2 = new Person2(new Date(1999, 12, 25), " aaadilson");
// person2.minhaprop = "ddd"; // erro pq é readonly ( só pode ser assinada no construtor como ocorreu acima)
console.log("read only " + person2.birthDate.getFullYear());
console.log("read only prop" + person2.minhaprop);
