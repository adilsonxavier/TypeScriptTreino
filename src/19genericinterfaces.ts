//1 - Interface genérica para descrever as propriedades de um objeto
///////////////////////////////////////////////////////////////////////

interface Pair<K, V> {
    key: K;
    value: V;
}

let month: Pair<string, number> = { // aqui não usa "implements"
    key: 'Jan',
    //value: "1" // se não informar number da erro
    value: 1
};

console.log(JSON.stringify(month));

//2 - Interface genérica para descrever os métodos de uma CLASSE
///////////////////////////////////////////////////////////////////////

interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1); // remove 1 item da posicao que estiver no index de o (remove o item atual do array)
        }
    }
}

// From the List<T> class, you can create a list of values of the various type e.g., numbers, or strings.

// For example, the following shows how to use the List<T> generic class to create a list of numbers:

let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}


console.log(list); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

list.remove(5);
// console.log(list); // [0, 1, 2, 3, 4, 6, 7, 8, 9]

//3 - Interface genérica para descrever tipos de índice
interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};

console.log("inputOptions "+ JSON.stringify(inputOptions));