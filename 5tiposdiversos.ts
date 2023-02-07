
////// ENUMs ///////////
enum Month {
    Jan=1,    Feb,    Mar,    Apr,    May,    Jun,    Jul,    Aug,    Sep,    Oct,    Nov,    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jan)); // true
console.log(Month.Feb);//2
console.log(Month[5]);//may
console.log("***********Month***********");
console.log(Month);
console.log("***********Month***********");

// Abaixo a saida de Month. Veja como o TypeScript cria o enum:
// É criado um objeto com propriedades com o número do mês e propriedades com o nome do mês
// Desta forma pode ser acessado pelo nome "Month.Feb" ou pelo índice Month[5]
/*
{
    '0': 'Jan', 
    '1': 'Feb', 
    '2': 'Mar', 
    '3': 'Apr', 
    '4': 'May', 
    '5': 'Jun', 
    '6': 'Jul', 
    '7': 'Aug', 
    '8': 'Sep', 
    '9': 'Oct', 
    '10': 'Nov',
    '11': 'Dec',
    Jan: 0,     
    Feb: 1,     
    Mar: 2,     
    Apr: 3,     
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
  }
*/








/////////////////// tipo void
// function increment(counter: number) : void {
//     return ++counter; // retorno de qualquer tipo da erro
// }

///// Never -  Gera um erro que aparece no console.log em vermelho
//// qualquer outro retorno ou implementação da erro de compilação
function raiseError(message: string): never {
   throw new Error(message);
    //console.log("retorno");
   // return;
}
   

function reject() { 
    return raiseError('Rejected');
 }

 reject();


 /////////////////// union type
 let result: number | string;
 result = 10; // OK
 result = 'Hi'; // also OK
// result = false; // a boolean value, not OK



 /////////////////// tipo alias
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
//input = false; // Compiler error


/////////////////// tipo literal, serve para limitar os valores aceitos para uma variável
//////////////   substitui vários ifs
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
//mouseEvent = 'mouseover'; // compiler error