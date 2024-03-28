// ! TypeScript is a strongly typed programming language that builds on JavaScript (Adding Type Safety). TypeScript is a superset (üst versiya) to JavaScript
// ! TypeScript Data Types (By specifying the data types, type safety is ensured)
// * JavaScript is DYNAMICALLY typed. TypeScript is STATICALLY typed
// ! Type Basics: In TypeScript declared data TYPES never change but their values can be change. Yeni ilkin olaraq string data type vermisense hec zaman deyismiyecek
// Todo: Main(Primitive) Types      : string, number, boolean, null, undefined, bigInt and symbol
// Todo: Array(Complex) Types       : Array<type>, Type[]
// Todo: Any and Unknown            : Both accept any type of data but Unknown have strong security
// Todo: Void and Never(Function)   : Void doesnt return anything, Never comes with throw new Error()
// Todo: Enum                       : Enumarasyon türleri ve kullanım senaryoları


// ! String, Number, Boolean
const firstName: string = "Murat";
const age: number = 55;
const isActive: boolean = false;

// ! OR
let firstName2: string;   firstName2 = "Fuad";
let age2: number;         age2 = 25.00;
let isActive2: boolean;   isActive2 = true;


// ! Array
const firstNames: string[] = ["Murad", "Vuranok"];
const ages: Array<number> = [1, 2, 3, 4, 5];
// const mixValues: Array<string> = ["Murat", "Vuranok", 777];         // Todo: Yield to error
const mixValues2: Array<any> = ["Murat", "Vuranok", 777];              // Todo: Eliminating error


// ! Objetcs
// Todo: Obyektlerde ilkin olaraq hansi KEY-ler verilibse onlar deyisdirmek silmek ya da artirmaq olmaz
let newObject: object | {};
newObject = [1, 2, 3];                          // Todo: Bu halda problem yaratmir cunki Array ozude bir Obyektdir

let newObject2: { name: string, surname: string, age: number };
// newObject2 = [1, 2, 3]                       // Todo Bu halda problem yaradir
newObject2 = { name: "Fuad", surname: "Babayev", age: 25 };


// ! Combining Array and Object
let newData : { name: string, age : number, isEmployee : boolean}[];
newData = [{name: "Fuad", age : 25, isEmployee : false}, {name: "Murad", age : 21, isEmployee : false}, {name: "Rufet", age : 17, isEmployee : false} ];


// ! Type Inference
// Todo: Eger type vermemisizse TypeScript ilkin value uygun olaraq type teyin edir. Value deyisilse problem yoxdur. Eger Type deyisilse ERROR verecek
let inference = 'This is String data type';
inference = "This is also String data type";
// inference = 77; // ! ERROR: Type 'number' is not assignable to type 'string'



// ! Tuple: [string, string, number] icerisindeki deyerleri ancaq gosterildiyi veziyyetde olmalidir ['Hello', 'World', 7] 
// Todo: eger 3 deyer gosterilibse 3 deyer olmalidir. Eslinde burada push edende ERROR vermir ve Tuplenin lengthi deyisir ama bu yazilis usulu duzgub hesab edilmir
// Todo: Ancaq [string, number] bu tuplelerin icindeki deyerler deyisdirile biler ama DATA TYPEs ilkin veziyyetdeki kimi olmalidir
const person: {
    firstName: string,
    age: number,
    isEmployee: boolean,
    friends: string[],
    tuple: [string, string, number]
} = {
    firstName: 'Fuad',
    age: 25,
    isEmployee: false,
    friends: ['Rauf', 'Ayhan', 'Elsen'],
    tuple: ['Baku', 'Ahkmedli', 19]
}
console.log(person);                                         // {firstName: 'Fuad', age: 25, isEmployee: false, friends: Array(3), tuple: 'Baku', 'Ahkmedli', 19]}
console.log(person.firstName);                               // Fuad
for (const friend of person.friends) { console.log(friend) } // Rauf      Ayhan        Elsen
person.tuple[1] = 'Neapol';                                  // coverts ['Baku', 'Ahkmedli', 19] into ['Baku', 'Neapol', 19]
console.log(person);                                         // {firstName: 'Fuad', age: 25, isEmployee: false, friends: Array(3), tuple: 'Baku', 'Neapol', 19]}


// ! Functions
// ! Void and Never
// ! Funksiyalara Data type vermek yaxsi seydir amma calisin funksiyanin parametrlerine data type verinki bu TypeScript avtomatik ozu funksiyaya data Type versin
// ! Void metodu (funksiyanin) geriye herhansi deyer donmeyeceyini gosterir. Eslinde Void evezine undefined gostere bilerdik ama bu mentiqsizdir 
// Todo: Geriye deyer donen metodlarda ise geriye donen deyerin tipini qeyd edirik, eger geriye donen deyerin tipini bilmirikse ya HECNE yazilmir yada ANY yazilir
// Todo: Never metodu geriye hec bir zaman deyer dondermiyeceyini (sonsuzluqunu) bildirir. Return etsek error verecek. Esasen throw new Error()-da istifade olunur
// Todo: Inference Functions: asagidaki ilk funskiyada 2(number) parametr alib TypeScript ozu avtomik bilirki number return edecek. Type vermeye coxda gerek yoxdur
// * Yeniki function add(param1: number, param2: number) : number sonunda number typeni vermeye gerek yoxdur. TypeScript ozu infer edirki number return olunacaq
// ? Bu cur funksiyalardan basqa deyer RETURN eden funksiyalara mutleq parametr ve return-e type verilmelidir function name(a: string, b: number) : string | number
function add(param1: number, param2: number) { return param1 + param2 }           //* Uzerine hover etsek function add(param1: number, param2: number): NUMBER-dir
function warnUser(): void { console.log('This is my warning message') } warnUser();                          // * function warnUser(): VOID
function warnUser2(name: string): undefined { console.log(name); return } console.log(warnUser2('Ali'));     // * function warnUser2(): UNDEFINED
function greetUser(name: string) { console.log('Hello ' + name) }; greetUser('Fuad');                        // * function greetUser(name: string): VOID
function getName(): string { return "Murat"; } console.log(getName());
function error(message: string): never { throw new Error(message) }
function infiniteLoop(): never { while (true) { } }

function total(param1: number, param2: number, param3: boolean, param4: string) {
    const result = param1 + param2;      // Todo: Otherwise in console.log() it will string concatenate and Result : 52.8 
    if (param3) {
        console.log(param4 + result);    // Todo: We do calculation beforehand in order to not to concatenate and Result : 7.8 
    }
    return result;
}
total(5, 2.8, true, 'Result : ');        // Result : 7.8

// ! Function Data Types
function sum(n1: number, n2: number) { return n1 + n2 };
function show(n1: number) { console.log(n1) };
let combineValues: Function;          // Todo: bu cur yazilis normaldir ama biz bura istenilen data type geri donduren Funksiyalari yaza bilerik deye prablem olacaq
combineValues = sum;                  // Todo: Meselen burada combineValues-nin Data type-sini Function-dir 2 parametr qebul edib deyer RETURN edir
console.log(combineValues(3, 5));     // Todo: Normal olaraq isleyib 8 cavabini qaytaracaq
combineValues = show;                 // Todo: Burada da Data type Function-dir. Ama problem o zaman yaranirki biz yuxarida Funksiyanin data typesini vermedik VOID
console.log(combineValues(3));        // Todo: Buna gorede burada sadece Function olaraq qebul edib RETURN etmeli olduqu ucun cavabda 3 ve undefined verir

//* Yuxaridaki Error qarsisini almaq ucun her funksiyanin data type-sini vermek lazimdir Ve calis her zaman bu sekilde yaz
let combineValues2: (n1: number, n2: number) => number;  // Todo: Burada ise teyin etdikki Function olacaq 2 number parameter alacaq ve number RETURN edecek
combineValues2 = sum; console.log(combineValues2(3, 5));                   // Todo: Bu halda normal olaraq isleyecek
// combineValues2 = show; console.log(combineValues2(3, 5));               // ! It definitely gives as an Error below
// Type '(n1: number) => void' is not assignable to type '(n1: number, n2: number) => number'. Type 'void' is not assignable to type 'number'

// ! Function Types & Callbacks
function getFunction(int1: number, int2: number, callback: (num: number) => void) {
    let result = int1 + int2;
    callback(result);
}
console.log(getFunction(10, 30, function (result) { console.log(result) }));


// ! ENUMS
// Todo: Default writing: enum ... {UPPERCASE (most of the time )} ve bu deyerlerin qarisini bos qoyduqda ozu avtomatik olaraq ardicil reqemlerle dolduracaq
enum Status {
    None,
    Active,
    Passive,
    Deleted,
    Modified,
    Holiday,
    Hired,
}
enum Departments {
    None = 'None',
    IT = 'Informational Technology',
    HR = 'Human Resources',
    SA = 'Sales Agency',
}
enum User {
    None = 0,
    Admin = 1,
    Ceo = 2,
    Moderator = 4,
    User = 8,
    SuperUser = Admin | Moderator | User,       // ! 1 + 4 + 8 = 13
}
class Enum {
    status: Status;
    department: Departments;
    user: User;
    constructor() {
        this.status = Status.Active;
        this.department = Departments.HR;
        this.user = User.SuperUser;
    }
}
const enums = new Enum();
console.log(enums);                            // Enum {status: 1, department: 'Human Resources', user: 13}

const user: number = User.Ceo; console.log(user);                            // 2
const feature: string = Status[5]; console.log(feature);                     // Holiday
const personality: string = Departments.IT; console.log(personality);        // Informational Technology


enum Role {
    ADMIN,                  // 0
    READ_ONLY,              // 1
    AUTHOR = 'integer',     // 'integer'
    REFERENCE = 100,        // 100
    REFERENCE2              // 101
}
console.log(Role);   // {0: 'ADMIN', 1: 'READ_ONLY', 100: 'REFERENCE', 101: 'REFERENCE2', ADMIN: 0, READ_ONLY: 1, AUTHOR: 'integer', REFERENCE: 100, REFERENCE2: 101}

const person2: {} = {
    firstName: 'Rauf',
    favoriteNumber: Role.REFERENCE2,
    number1: Role.READ_ONLY,
    string: Role.AUTHOR
}
console.log(person2);           // {firstName: 'Rauf', favoriteNumber: 101, number1: 1, string: 'integer'}


// ! Union Types
// Todo: Eger ferqli data tipler alacaqsa Union typesden istifade olunur
let stringOrNumber: string | number;
stringOrNumber = 777; console.log(stringOrNumber);          // 777
stringOrNumber = 'ZZZ'; console.log(stringOrNumber);        // ZZZ

// Todo: Array daxilinde eyni anda hem string hem number hemde boolean ola biler
const unionArray: (string | number | boolean)[] = [];
unionArray.push('Ronaldo');
unionArray.push(7);
unionArray.push(true);
// unionArray.push(undefined);                              // Todo: Because we dont set undefined above
console.log(unionArray);                                    // (3) ['Ronaldo', 7, true]

function combine(param1: number | string | boolean, param2: number | string | boolean) {
    let result;
    if (typeof param1 === 'number' && typeof param2 === 'number') result = param1 + param2;
    else if (typeof param1 === 'boolean' && typeof param2 === 'boolean') result = Number(param1) + Number(param2);
    else result = param1.toString() + param2.toString();
    return result;
}
console.log(combine(10, 77));                   // 87
console.log(combine('Hello', 'World'));         // HelloWorld
console.log(combine(true, false));              // 1 + 0 = 1
console.log(combine(10, true));                 // 10true                                


// ! Any and Unknown
// Todo:  Main ve Array types-den ferqli olaraq istenilen zaman data typelerini deyise bilerler
// Todo:  ANY TIP kontrolu etmir guvenliyi zeifdir (Unable type checking)
// Todo:  Unknown TIP kontrolu edir guvenliyi gucludur
let notSure: any = 777;                     // * Number
notSure = "maybe a string instead";         // * String
notSure = false;                            // * Boolean

let uncertain: unknown = 4;
uncertain = "maybe a string instead";
uncertain = false;

// Todo: Unknown supports Type checking
if (typeof uncertain === "boolean") console.log('Boolean');
else if (typeof uncertain === "number") console.log('number');
else if (typeof uncertain === "string") console.log('string');


// ! Literal Types
function combine2(
    param1: number | string,
    param2: number | string,
    param3: 'as-number' | 'as-text'
) {
    if (typeof param1 === 'number' && typeof param2 === 'number' || param3 === 'as-number') return +param1 + +param2;
    else return param1.toString() + param2.toString();
}
console.log(combine2(10, 77, 'as-number'));                  // 87
console.log(combine2('10', 77, 'as-number'));                // 87
console.log(combine2('10', '77', 'as-number'));              // 87
console.log(combine2(10, 77, 'as-text'));                    // 87
console.log(combine2('10', 77, 'as-text'));                  // 1077
console.log(combine2('10', '77', 'as-text'));                // 1077


// ! Alias/Custom Types (using with type keyword). Type aliases can be used to "create" your own types
// Todo: Type Custom name (with Capitalize)
// ! Type Alias (Just same with interfaces)
type Kullanici = {
    ad: string;
    soyad: string;
    email: string;
    telefon: number;
};
const kullanici: Kullanici = {
    ad: "Ahmet",
    soyad: "Yılmaz",
    email: "ahmet.yilmaz@yilar.com",
    telefon: 99470555555,
};
console.log(kullanici);                     // {ad: 'Ahmet', soyad: 'Yılmaz', email: 'ahmet.yilmaz@yilar.com', telefon: 99470555555}


// ! Type Union 
type Combinable = number | string | boolean;
type ConversionDescription = 'as-number' | 'as-text';

// * let idontknow: number | string | boolean;  
let idontknow: Combinable = 'Something';
idontknow = 'Hello'; console.log(idontknow);   // Hello
idontknow = 1998; console.log(idontknow);      // 1998
idontknow = true; console.log(idontknow);      // true

// ! Intersection Type & (Yeni her 2 interfacedeki properties mutleq sekilde olmalidir)
interface BussinessPartner {
    name: string;
    time: Date;
}
interface Contact {
    email: string;
    phone?: number;         // ! Question Mark (?) eslinde interface scrict ruledir yeni icinde hansi sertler veribse mutleq doldurulmalidir ama ? isaresi skip edir
}
type Customer = BussinessPartner & Contact;
let customer: Customer = {
    name: "Ahmet",
    time: new Date(),
    email: "",
    // phone: 7772419
};


// ! Exclamation mark (!) basically tells to TypeScripts that such button will exist while compilation
const button = document.querySelector('button')!;
button.addEventListener('click', function () {
    console.log('I have clicked once');
});



// ! Generics
// ! Generics work with any type, but once a certain type is used, that type is locked in and known
// Todo: Yeniki ilk deyerin type bilinenden sonra diger deyerler hemin type olmalidir
function inserAtBeginnig(array : any[], value : any){
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = inserAtBeginnig(demoArray, 0);
console.log(updatedArray);     //  (4) [0, 1, 2, 3]
// updatedArray[0].split('');  // ! Bu sekilde olanda TypeScript basa duse bilmirki Number type-dir ve onu split etmek olmur (Browser error versede VSCode vermiyecek)

// Todo: Cunki biz ANY type vermisik bu problemin qarsisini almaq ucun GENERICS-den istifade olunur. (funksiyani Generics Functiona cevirecik)
// ! Generics type <T> tell to TypeScript it is not any type instead, type of Array and type of Value is SAME 
// ! ve buna gore parametr-den 1-nin type-ni bilerek digerlerinin type-ni teyin edir
function inserAtBeginnig2<T>(array : T[], value : T){                   // Burada <T> hele hansi type olduqunu bilmir
    const newArray = [value, ...array];
    return newArray;
}
const demoArray2 = [1, 2, 3];
const updatedArray2 = inserAtBeginnig2(demoArray2, 0);                  // Burada artiq argument kimi gonderdiyimiz deyer number[] olduqu ucun <T> artiq number olur
// updatedArray2[0].split('');  // ! Bu sekilde ise TypeScript basa dusurki Number type-dir ve onu split etmek olmur (Browser ve VSCode error verecek)
console.log(updatedArray2);     //  (4) [0, 1, 2, 3]

const demoArray3 = ['Fuad', 'Murad', 'Rufet'];
const updatedArray3 = inserAtBeginnig2(demoArray3, 'Rauf');
updatedArray3[1].split('');    // ! Artiq Errov vermiyecek cunki TypeScript bilirki ARRAY (string[]) ve VALUE (string) neticede String deyerler split olur
console.log(updatedArray3);     //  (4) ['Rauf', 'Fuad', 'Murad', 'Rufet']


console.log('------TypeScript Basics Part Finished------');