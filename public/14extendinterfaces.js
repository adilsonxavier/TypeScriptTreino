"use strict";
//Interfaces extending one interface
class Mail {
    later(email, after) {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email) {
        console.log(`Sent email to ${email}  `);
        return true;
    }
    queue(email) {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
class ClasseImplementadora {
    a() { }
    ;
    b() { }
    ;
    c() { }
    ;
    d() { }
    ;
}
//////////////////////////
//Interfaces extending classes
class Control {
}
class Button extends Control {
    enable() { }
}
class TextBox extends Control {
    enable() { }
}
class Label extends Control {
}
// Error: cannot implement::
//Erro:
// Class 'Chart' incorrectly implements interface 'StatefulControl'.
//   Property 'state' is missing in type 'Chart' but required in type 'StatefulControl'.ts(2420)
// ]class Chart implements IStatefulControl {
//     enable() { }
// }
//class OutraClasse  implements IStatefulControl{ //==> erro
class OutraClasse extends Control {
    enable() { }
}
//# sourceMappingURL=14extendinterfaces.js.map