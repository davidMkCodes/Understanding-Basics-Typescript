// type AddFn = (a: number, b: number) => number;
interface AddFn{
    (a: number, b: number): number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named{
    readonly name?: String;
    outputName?: string;
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

class Person implements Greetable{
    name?: string;
    age = 30;

    constructor(n?: string){
        if(n)
            this.name = n;
    }

    greet(phrase: string){
        if(this.name)
            console.log(phrase + " I'm " + this.name);
        else
            console.log(phrase);
    }
}

let user1: Greetable;

user1 = new Person("David");
user1.greet("Hello");
console.log(user1);