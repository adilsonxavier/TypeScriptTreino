// 1 - Usando a interface para validar um objeto que está sendo criado
//--------------------------------------------------------------------
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName, " - ").concat(person.propreadonly);
}
// Para que o readonly da interface (propreadonly) seja chacável e só possa ser usado na instanciação da
// classe precisa passar o tipo Person na instanciação:
//let person: Person = {
var person = {
    firstName: 'John',
    lastName: 'Doe',
    //other: 1
    propreadonly: "adilson"
};
person.propreadonly = "maysa";
console.log(getFullName(person));
var format;
format = function (mystr, isUpper) {
    return isUpper ? mystr.toLocaleUpperCase() : mystr.toLocaleLowerCase();
};
console.log(format('hi', true));
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.toJSON = function () {
        return JSON.stringify(this.firstName);
    };
    return Person2;
}());
var person2 = new Person2('John11', 'Doe11');
console.log(person2.toJSON());
