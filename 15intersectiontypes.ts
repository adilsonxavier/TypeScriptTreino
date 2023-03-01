//No intersection types,  O tipo typeAB terá as propriedades de typeA e typeB:

//type typeAB = typeA & typeB;

//OBS: Não confundir com union type que usa o operador | e define uma variável com mais de um tipo possível

//let varName = typeA | typeB; // union type

//Suppose that you have three interfaces: BusinessPartner, Identity, and Contact.

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

//The following defines two intersection types:


 //1- The Employee type contains all properties of the Identity and Contact type:

type Employee = Identity & Contact;

let e: Employee = { // Se eu não informar todas as prop de Identity e Contact irá gerar erro de compilaçãp
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

//2 - And the Customer type contains all properties of the BusinessPartner and Contact type:

type Customer = BusinessPartner & Contact;

let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};

//Later, if you want to implement employee sales, you can create a new intersection type that contains all properties of Identity, Contact, and BusinessPartner types:

type Employee2 = Identity & BusinessPartner & Contact;

let e2: Employee2 = { // Repare que tanto Identity quanto  BusinessPartner tem a prop name do tipo string
    id: 100,         // mas eu a defino no objeto apenas uma vez e a prop name nas 2 interfaces precisas ser do mesmo tipo
    name: 'John Doe',  // (neste caso, string)
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000,

};

//When you intersect types, the order of the types doesn’t matter. For example:

// type typeAB = typeA & typeB;
// type typeBA = typeB & typeA;