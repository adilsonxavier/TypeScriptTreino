//1 - Interface genérica para descrever as propriedades de um objeto
///////////////////////////////////////////////////////////////////////

interface Pair<K, V> {
    key: K;
    value: V;
}

let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

console.log(JSON.stringify(month));