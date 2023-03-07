"use strict";
// Os Guard Types são maneiras de restringir os tipos de uma variável usando ifs
// Usando o typeof - Não muda no TypeScript em relação ao JavaScript Vanilla
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
function teste() {
    try {
        var retorno = add("adilson ", 12345);
        console.log(retorno);
    }
    catch (erro) {
        console.log("erro:: " + erro);
    }
}
teste();
//---------------------------------------
//  instanceof
class Customer {
    isCreditAllowed() {
        // ...
        return true;
    }
    ;
    isCreditAllowed2() {
        // ...
        return true;
    }
}
class Supplier {
    constructor(_isInShortList) {
        this.isInShortList = _isInShortList;
    }
}
// function signContract(partner: BusinessPartner) : string {
//    var message: string = "";
//     if (partner instanceof Customer) {
//         message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
//     }
//     if (partner instanceof Supplier) {
//         message = partner.isInShortList ? 'Sign a new contract the supplier' : 'Need to evaluate further';
//     }
//     return message;
// }
let adilson = new Customer();
console.log(signContract(adilson));
let maysa = new Supplier(false);
console.log(signContract(maysa));
// operador in
function signContract(partner) {
    let message;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    else {
        // must be Supplier
        message = partner.isInShortList ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    if ("minhaprop" in partner) {
        partner.minhaprop = "aa";
        message = "tem minhaprop";
    }
    return message;
}
let meuCustomer = new Supplier(true);
//meuCustomer.isCreditAllowed();
console.log("=========================");
console.log(signContract(meuCustomer));
///////////////
// User-defined Type Guards
function isCustomer(partner) {
    return partner instanceof Customer;
}
let partner2 = new Supplier(true);
console.log(isCustomer(partner2));
//let supplier2 = new Supplier(true);
