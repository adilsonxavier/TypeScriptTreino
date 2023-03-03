//1 - Interface genérica para descrever as propriedades de um objeto
///////////////////////////////////////////////////////////////////////
var month = {
    key: 'Jan',
    //value: "1" // se não informar number da erro
    value: 1
};
console.log(JSON.stringify(month));
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1); // remove 1 item da posicao que estiver no index de o (remove o item atual do array)
        }
    };
    return List;
}());
// From the List<T> class, you can create a list of values of the various type e.g., numbers, or strings.
// For example, the following shows how to use the List<T> generic class to create a list of numbers:
var list = new List();
for (var i = 0; i < 10; i++) {
    list.add(i);
}
console.log(list); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list.remove(5);
var inputOptions = {
    'disabled': false,
    'visible': true
};
console.log("inputOptions " + JSON.stringify(inputOptions));
