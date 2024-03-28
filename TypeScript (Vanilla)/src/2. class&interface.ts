// ! Classes
// ! Classes are blueprints (planlar) for objects. And classes make it much more easier to create multiple, similar objects. Property is basically a variable in class
// ! Acces Modifiers Private Public Protected
// Todo: Public: property accessible to change from outside and inside of the class. All properties are public in default and you dont need to write
// Todo: Readonly: property is NOT accessible to change from outside or inside of the class. You cant change value of this type of properties just like CONST variable
// Todo: Private: property only accessible to change from INSIDE of the class. For ex: const person1 = new Person('...') INSIDE, person1.employee[1] = '...' OUTSIDE
// Todo: Protected == Private: means property is available in all BASE, INHERITANCE classess, Unlike private is available only BASE class
// Todo: Static: is a method you call directly on a class, not on an object created based on it
// Todo: Static Class-in properties kimi davranir onu yaratmaq ucun new acar sozunden istifade olunmur bir basa olaraq Class.staticProperty yazaraq el catan olur
class Department {
    // readonly id: number;             // ! No need to write because already written in consturctor(readonly id: number)
    name: string;
    public place: string;
    private employees: string[] = [];
    // private workers: string[] = [];    // ! PRIVATE and only accessible within class 'Department' not inherit class like AccountingDepartment
    protected workers: string[] = [];     // ! PROTECTED and accessible within class 'Department' and inherit class like AccountingDepartment
    static weekday: string = 'Friday';    // Todo: Static method is a method that you call directly on a class, not on an object created based on it.

    constructor(readonly id: number /* n: number */, n1: string, n2: string) {   // * constructor(n: number) {} property yuxaridada yazila biler burada da
        // this.id = n;                 // ! No need to write because already written in consturctor(readonly id: number)
        this.name = n1;
        this.place = n2;
    }
    static createEmployee(firstname: string) {               // Todo: Static bildirirki bu her yerden el catandir class-in propertiesi kimi
        return { name: firstname }
    }
    describe(/* this: Department */) {                       // Todo: It is by default this: Department however it is not MUST be there
        console.log('Department: ' + this.name);             // Todo: If we write just name the function will search for parametr inside itself and global variable 
        // console.log(this.weekday);                        // ! Static and we cant acces like that
        console.log(Department.weekday);                     // ! Static and we acces like that
        // this.id = 666;                                    // ! Cannot re-assign to 'id' because it is a read-only property.
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees, this.place);
    }
}
const accounting = new Department(777, 'Accounting', 'Baku');       // ! This one goes to constructor because based on Department Class

console.log(accounting);                                            // Department {id: 777, employees: Array(0), workers:Array(0), name:'Accounting', place:'Baku'}
accounting.describe();                                              // Department: Accounting           Friday
const accountingCopy = { describe: accounting.describe }            // { describe: ƒ describe() { console.log('Department: ' + this.name)} } 
// ! Describe property has been added to the object which created with object literals {}, NOT based on Department Class that why this keyword is unrecognizable
console.log(accountingCopy.describe === accounting.describe);       // true
console.log(accountingCopy.describe);                               // ƒ describe() { console.log('Department: ' + this.name)}
accountingCopy.describe();                                       // ! Department: undefined => because this keyword is unrecognizable outside the class but Friday

accounting.addEmployee('Max');
accounting.addEmployee('Mine');
accounting.printEmployeeInformation();                              // (2) ['Max', 'Mine']  'Baku'
// accounting.employees[1] = 'Alex';                                // ! TRUE when employee property is PUBLIC; FALSE when employee property is PRIVATE
accounting.place = 'Akhmadli';                                      // ! TRUE when place property is PUBLIC; FALSE when employee property is PRIVATE
accounting.printEmployeeInformation();                              // (2) ['Max', 'Alex']  'Akhmadli'




// ! Inheritance
// ! Inheritance allows you to share some common functionality and yet create more specialized blueprints
// Todo: Inheritance class extends Base Class which means that all of the properties of Base Class are extend to class inherit from Base
// ! Super: calls the constructor of base class
// Todo: Hint: You can only inherit from ONE CLASS, can not inherit from MULTIPLE Classes
// ! There is not multiInheritance but multiImplement exist
class ITDepartment extends Department {
    admins: string[];
    constructor(id: number, admins: string[]) {
        super(id, 'Computer Science', 'ASOIU');
        this.admins = admins;
    }
}
const it = new ITDepartment(3, ['Happy']); console.log(it); // ITDepartment {id: 3, employees: [], name: 'Computer Science', place: 'ASOIU', admins: ['Happy']}
it.addEmployee('Ali');
it.addEmployee('Rza');
it.describe();                                              // Department: Computer Science
it.name = 'NEW SCIENCE';
it.printEmployeeInformation();                              // (2) ['Ali', 'Rza'] 'ASOIU'
console.log(it);                                            // ITDepartment {id: 3, employees: ['Ali', 'Rza'], name: 'NEW SCIENCE', place: 'ASOIU', admins: ['Happy']}

class AccountingDepartment extends Department {
    private lastReport: string;                             // ! PRIVATE and cant accessible from OUTSIDE the class but we access from OUTSIDE by GETTER (ENCAPSULATE)

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;                         // ! Now it is accessible like PUBLIC with the helping of GETTER
        }
        throw new Error('No report found')
    }

    set mostRecentReport(value: string) {
        if (!value) throw new Error('Please pass in avalid value!');
        this.addReports(value);
    }

    constructor(id: number, private reports: string[]) {
        super(id, 'Accounting', 'Department');
        this.lastReport = reports[0];                        // ! Private but we can acces because INSIDE class
    }
    addEmployee(lads: string) {                              // ! We can overwrite method even if it exist in base class and it consider as AccountingDepartment class
        if (lads === 'Turgut') return;                       // Turgut olsa elave etmek o siyahiya
        this.workers.push(lads);
    }
    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const acc = new AccountingDepartment(23, []);
console.log(acc);                               // AccountingDepartment {id: 23, employees: [], name: 'Accounting', place: 'Department', reports: []}
// console.log(acc.mostRecentReport);           // ! Uncaught Error: No report found => Beacuse No any pushed reports, it is empty []
acc.addReports('Hello');
acc.printReports();                             // (1) ['Hello']
acc.addEmployee('Elsen');
acc.addEmployee('Turgut');
acc.addEmployee('Ali');
console.log(acc);               // AccountingDepartment {id: 23, employees: [], workers: ['Elsen', 'Ali'], name: 'Accounting', place: 'Department', reports['Hello']}
// console.log(acc.lastReport);         // Hello (if it is PUBLIC)         // ! If it is PRIVATE we cant get like that
console.log(acc.mostRecentReport);      // Hello (even if it is PRIVATE)   // ! Beacuse of GETTER

// acc.mostRecentReport = '';                      // ! SETTER        Uncaught Error: Please pass in avalid value!
acc.mostRecentReport = 'Salam';                    // Isliyecek cunki falsy value deyil
console.log(acc);                                  // AccountingDepartment {id: 23, lastReport: "Salam" ... place: 'Department', reports['Hello']}

const employee1 = Department.createEmployee('Akif');        // ! createEmployee STATIC olduqu ucun new sozunden istifade etmeden birbasa Department elcatandir
console.log(employee1, Department.weekday);                 // {name: 'Akif'} 'Friday'




// ! Interface: describe structure of objects or function types and force classes to have certain features. But can't store arbitrary types like union types
// ! Implements: Checks that the class can be treated as the interface type (qisaca interfacede hansi qaydalar verilibse ona uygun doldurmaq lazimdir)
// Todo: For interfaces you can inherit from multiple interfaces, but for classes you can inherit only one class
// Todo: Interface only accepts Readonly property not other ones (public, private, protected)      
// ! Interfaces just look like Types and we can write Types instead of Interface. But Interfaces cant store Union Types, Types store other things like Union types
interface Human {                                                                                     // *        type Human2 = {
    name: string;                                                                                     // *            name: string;     
    age: number;                                                                                      // *            age: number
    greet(phrase: string): void;                                                                      // *            greet(phrase: string): void;
}                                                                                                     // *        } 
let user1: Human;
user1 = {
    name: 'Fuad',
    age: 25,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
console.log(user1);                                     // {name: 'Fuad', age: 25, greet: ƒ}
user1.greet('Hello Mr.')                                // Hello Mr. Fuad

// ! Extending interfaces
// ! Optional Parameter/Property (?): means this property might exits in classes that implement this interface but it does not have to.
// Todo: Class olanda inferfaceni implement edir       class ClassName impelements InterfaceName
interface Name {
    name: string;
    // nickname: string       // ! If we declare 'nickname' in here, this will give us ERROR because it is important to be in Hooman class
    nickname?: string         // ! If use Optional Parameter(?): like nickname?: means it is NOT very important to be in Hooman class (totally up to our preference)
}
interface Surname {
    readonly surname?: string;                           // ! Interface only accepts Readonly property not other ones (public, private, protected)
}
interface Greetable extends Name, Surname {              // ! You can inherit(extend) multi interfaces but cant inherit multiclasses
    greet(phrase: string): void;
}
class Hooman implements Name, Greetable {       // ! You can implement more than one Interface using comma (That is main difference between inheritance)
    name: string;
    readonly surname?: string
    age: number = 17;
    constructor(fname: string, sname: string = 'Babaeff') {
        this.name = fname;
        if (sname) {
            this.surname = sname;
        }
    }
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name + ' ' + this.surname + ' and ' + this.age + ' years old');
    }
}
let hooman1: Hooman;                                     // ! Dont matter you can even write let hooman1: Greetable;  even if let hooman1: Hooman | Greetable;
const withoutSname = new Hooman('Raffet'); console.log(withoutSname);     // Hooman {age: 17, name: 'Raffet', surname: 'Babaeff'}
hooman1 = new Hooman('Rufet', 'Babayev'); console.log(hooman1);           // Hooman {age: 17, name: 'Rufet', surname: 'Babayev'}
hooman1.greet('Hi there I\'m');                                           // Hi there I'm Rufet Babayev and 17 years old
hooman1.name = 'Murad'; console.log(hooman1);                             // Hooman {age: 17, name: 'Murad', surname: 'Babayev'}
// hooman1.surname = 'Baba';                                              // ! Cannot assign to 'surname' because it is a read-only property.

// ! Interfaces as Function Types
type AddFn = (param1: number, param2: number) => number;
let addition: AddFn;
addition = (num1: number, num2: number) => num1 + num2;
console.log(addition(5, 7));            // 12

interface AddFn2 { (param1: number, param2: number): number }       // ! In here it looks like anonimous functions but types script understand it
let plus: AddFn2;                                                   // ! Beacuse of here it understan belong to aninimous function
plus = (num1: number, num2: number) => num1 + num2;                 // ! If we change data type of num1 it will give us an ERROR
console.log(plus(6, 7));                // 13



// ! Discriminated Union types
interface Bird {
    type: 'bird';
    flyingSpeed: number;
};
interface Lion {
    type: 'lion';
    runningSpeed: number;
};
type Animal = Bird | Lion;
function moveAnimal(action: Animal) {
    let speed;
    switch (action.type) {
        case 'bird':
            speed = action.flyingSpeed;
            break;
        case 'lion':
            speed = action.runningSpeed;
    }
    console.log('Moving with speed: ' + speed + ' km/hours');
}
moveAnimal({type : 'bird', flyingSpeed : 200});             // Moving with speed: 200 km/hours
moveAnimal({type : 'lion', runningSpeed : 80});             // Moving with speed: 80 km/hours



// ! With simple example Inheritance
class Person {
    fname: string;
    sname: string;
    age: number;
    isEmployee: boolean;
    constructor(ad: string, soyad: string, yas: number, issizlik: boolean) {
        this.fname = ad;
        this.sname = soyad;
        this.age = yas;
        this.isEmployee = issizlik;
    }
}
const person1 = new Person('Fuad', 'Babayev', 25, true);        // Person {fname: 'Fuad', sname: 'Babayev', age: 25, isEmployee: true}

class WorkerA extends Person { }                                // ! Although WorkerA class is empty, it has all properties inherit from base Person class
const worker1 = new WorkerA('Rauf', 'Abbasli', 25, false);      // WorkerA {fname: 'Rauf', sname: 'Abbasli', age: 25, isEmployee: false}

class WorkerB extends Person {
    haveCar: boolean;
    constructor(answer: boolean) {
        super('Ayhan', 'Narimanov', 24, true);                 // ! Onsuzda Person-un constructorunu alir sadece burada onlarin ici doldurulmalidir
        this.haveCar = answer;                                 // ! Burada ise elave olaraq WorkerB classin oz constructoru elave edilir
    }
}
const worker2 = new WorkerB(true);                              // WorkerB {fname: 'Ayhan', sname: 'Narimanov', age: 24, isEmployee: true, haveCar: true}






console.log('------TypeScript Classes and Interfaces Part Finished------');