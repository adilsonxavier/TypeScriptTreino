//Interfaces extending one interface

interface IMailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface IFutureMailable extends IMailable {
    later(email: string, after: number): boolean
}

class Mail implements IFutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email}  `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

//////////////////////////
interface A {
    a(): void
}

interface B extends A {
    b(): void
}

interface C {
    c(): void
}

//Interfaces extending multiple interfaces

interface D extends B, C {
    d(): void
}

class ClasseImplementadora implements D{
    a(): void{};
    b(): void{};
    c(): void{};
    d(): void{};
}

//////////////////////////
//Interfaces extending classes

class Control {
    private state: boolean;
}

interface IStatefulControl extends Control {
    enable(): void
}

class Button extends Control implements IStatefulControl 
{
    enable() { }
}
class TextBox extends Control implements IStatefulControl {
    enable() { }
}
class Label extends Control { }


// Error: cannot implement::
//Erro:
// Class 'Chart' incorrectly implements interface 'StatefulControl'.
//   Property 'state' is missing in type 'Chart' but required in type 'StatefulControl'.ts(2420)

// ]class Chart implements IStatefulControl {
//     enable() { }

// }

//class OutraClasse  implements IStatefulControl{ //==> erro
class OutraClasse  extends Control implements IStatefulControl{ //==> OK
    enable(){}
}
