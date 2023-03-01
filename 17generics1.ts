// function getRandomElement(items: number[]): number {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }



function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
 var meuarray = [7,8,9,10];
//var meuarray = ["71","81","91","101"];
//console.log(getRandomElement<string>(meuarray));
// ou usando inferência de tipo não precisa do <string>
console.log(getRandomElement<number>(meuarray));

/////////////////////////////////////////
//Generic functions with multiple types
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
       ...obj2
    };
}

let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

console.log(JSON.stringify(result));