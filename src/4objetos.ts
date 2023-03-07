let employee: object;

employee = {
    firstName: 'John',  // tipo das propriedades são inferidos
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);

// ou

let employee2: {
    firstName: string;  // type annotation para o tipo das propriedades
    lastName: string;
    age: number;
    jobTitle: string;
};

employee2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};



// object vs. Object
//------------------
// The object type represents all non-primitive values while the Object type describes the 
// functionality of all objects. Ex.: toString() and valueOf()

//Tuplas
