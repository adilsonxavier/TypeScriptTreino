"use strict";
////// ENUMs ///////////
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month[Month["Apr"] = 4] = "Apr";
    Month[Month["May"] = 5] = "May";
    Month[Month["Jun"] = 6] = "Jun";
    Month[Month["Jul"] = 7] = "Jul";
    Month[Month["Aug"] = 8] = "Aug";
    Month[Month["Sep"] = 9] = "Sep";
    Month[Month["Oct"] = 10] = "Oct";
    Month[Month["Nov"] = 11] = "Nov";
    Month[Month["Dec"] = 12] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    let isSummer;
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
console.log(Month.Feb); //2
console.log(Month[5]); //may
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
function raiseError(message) {
    throw new Error(message);
    //console.log("retorno");
    // return;
}
function reject() {
    return raiseError('Rejected');
}
reject();
/////////////////// union type
let result;
result = 10; // OK
result = 'Hi'; // also OK
let input;
input = 100; // valid
input = 'Hi'; // valid
//input = false; // Compiler error
/////////////////// tipo literal, serve para limitar os valores aceitos para uma variável
//////////////   substitui vários ifs
let mouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
//mouseEvent = 'mouseover'; // compiler error
//# sourceMappingURL=5tiposdiversos.js.map