class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

 
    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

let person = new Person();
person.age = 10; //setter
person.age = 1000; 

person.age = 0;

console.log("age "+ person.age); // getter


/**************************************** */
/*
Obs.: Por algum motivo ao compilar este código com 
tsc 10gettersetter.ts
deu erro no get e no set com a mesagem:
 error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
 =>> RESOLUÇÃO
 tsc --target ES2016 10gettersetter.ts

 Obs: The getter/setters are also known as accessors/mutators.

**********************************************/
