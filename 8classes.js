var Person = /** @class */ (function () {
    // ssn: string;
    // firstName: string;
    // lastName: string;
    //constructor(ssn: string, firstName: string, lastName: string) {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        // this.ssn = ssn;
        // this.firstName = firstName;
        // this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getSsn = function () {
        return this.ssn;
    };
    return Person;
}());
var person = new Person("171280926", 'adilson', 'Doertre233');
console.log(person.getFullName());
console.log(person.getSsn());
