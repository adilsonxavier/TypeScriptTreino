var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        /** Não entendi por que mas declarando os argumentos do construtor como private não precisou declarar
         * aws variáveis acima nem os this. abaixo
         */
        // constructor(private ssn: string, private firstName: string, private lastName: string) {        
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
    return Person;
}());
var person = new Person("171280926", 'adilson', 'Doertre233');
console.log(person.getFullName());
console.log(person.getSsn());
