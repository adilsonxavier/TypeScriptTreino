var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
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
    function Person2(birthDate) {
        this.birthDate = birthDate;
        this.birthDate = birthDate;
    }
    return Person2;
}());
var person2 = new Person2(new Date(1990, 12, 25));
console.log("read only " + person2.birthDate);
