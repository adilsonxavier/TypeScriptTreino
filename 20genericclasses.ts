class Stack<T> {
    private elements: T[] = [];

    // Declarando o argumento do construtor como private, não preciso declarar a fariável fora do
    // construtor e o this correspondente dentro do construtor
    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): T {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        return <T>this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return <T>this.elements.pop();
    }
}

let numbers = new Stack<number>(5);

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers.push(n);
}

console.log(JSON.stringify(numbers));
while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack.`);
}
console.log(JSON.stringify(numbers));

//------------------------------
//Similarly, you can create a stack of strings. For example:

let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => { 
    wordStack.push(word) 
    console.log(`Push word ${word} into the stack.`)
});

console.log(words);
// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(`Word ${wordStack.pop()} saiu da pilha`);
}
console.log(JSON.stringify(words));