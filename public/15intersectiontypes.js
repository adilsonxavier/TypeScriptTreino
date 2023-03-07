"use strict";
//No intersection types,  O tipo typeAB terá as propriedades de typeA e typeB:
let e = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
let c = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
let e2 = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000,
};
//When you intersect types, the order of the types doesn’t matter. For example:
// type typeAB = typeA & typeB;
// type typeBA = typeB & typeA;
//# sourceMappingURL=15intersectiontypes.js.map