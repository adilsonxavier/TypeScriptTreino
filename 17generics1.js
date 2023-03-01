// function getRandomElement(items: number[]): number {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var meuarray = [7, 8, 9, 10];
//var meuarray = ["71","81","91","101"];
//console.log(getRandomElement<string>(meuarray));
// ou usando inferência de tipo não precisa do <string>
console.log(getRandomElement(meuarray));
/////////////////////////////////////////
//Generic functions with multiple types
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var result = merge({ name: 'John' }, { jobTitle: 'Frontend Developer' });
console.log(JSON.stringify(result));
