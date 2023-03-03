var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        return this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
var numbers = new Stack(5);
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
while (!numbers.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack."));
    numbers.push(n);
}
console.log(JSON.stringify(numbers));
while (!numbers.isEmpty()) {
    var n = numbers.pop();
    console.log("Pop ".concat(n, " from the stack."));
}
console.log(JSON.stringify(numbers));
//------------------------------
//Similarly, you can create a stack of strings. For example:
var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordStack = new Stack(words.length);
// push words into the stack
words.forEach(function (word) {
    wordStack.push(word);
    console.log("Push word ".concat(word, " into the stack."));
});
console.log(words);
// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log("Word ".concat(wordStack.pop(), " saiu da pilha"));
}
console.log(JSON.stringify(words));
