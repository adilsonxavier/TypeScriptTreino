var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    /* firstName e lastName estão como private nos argumentos do construtor
    Por isso não precisaram ser declarados antes:
    private firstName: string;
    private lastName: string;
    */
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, " ");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        var _this = 
        // call the constructor of the Person class:
        _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.getJob = function () {
        return "profiss\u00E3o: ".concat(this.jobTitle);
    };
    //Method overriding
    // O método describe() existe na classe mãe, pra sobrescrevelo é só declará-lo também na classe filha
    Employee.prototype.describe = function () {
        // Posso invocar também o método describe() da classe mãe
        /// return super.describe() + `I'm a ${this.jobTitle}.`;
        return "I'm a ".concat(this.jobTitle, ".");
    };
    return Employee;
}(Person));
var employee = new Employee('John', 'Doe', 'Web Developeraaa4543');
console.log(employee.getFullName());
console.log(employee.getJob());
console.log(employee.describe()); //This is John Doe 
//****************************************** */
//Métodos estáticos
var Employee2 = /** @class */ (function () {
    function Employee2(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee2.headcount++;
    }
    Employee2.headcount = 0;
    return Employee2;
}());
var john = new Employee2('John', 'Doe', 'Front-end Developer');
var jane = new Employee2('Jane', 'Doe', 'Back-end Developer');
console.log("Total de funcs: ".concat(Employee2.headcount)); // 2
