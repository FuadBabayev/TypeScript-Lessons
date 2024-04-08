// ! GENERIC TYPE: is type which is kind of connected with some other type and is really flexible regarding which exact type that other type is
// Todo: Generic Type helps you to get additional type information if you got more complex class or more complex function
// ! Whenever you see code like that Array<T> it measn it is Generic Type
const array: Array<string | number> = ['Fuad', 19];
const promise: Promise<any> = new Promise(resolve => resolve('true'));              // ! <any> does not care about data types if type would be number i cannot split
promise.then(data => data.split(' '));                                              // ! that's why split() method does not give an error


// ! Merging two object
function join(objectA: object, objectB: object) {
    return Object.assign(objectA, objectB);                                         // return {...objectA, ...objectB}; Totally same thing
}
console.log(join({ name: 'Fuad' }, { surname: 'Babayev' }));                           // {name: 'Fuad', surname: 'Babayev'}
// Todo: Works properly but problem will be above
const joineddObj = join({ name: 'Fuad' }, { surname: 'Babayev' }) /* as {name: string, surname: string} */;
// console.log(joineddObj.name);                                // ! We cant acces neither name nor suranme: Because Properties does not exist on type 'object'

function merge<T extends object, U extends object>(objA: T, objB: U) {
    // return {...objA, ...objB};
    return Object.assign(objA, objB);
}
const mergedObj = merge/*<{name: string, hobbies : string[]}, {age : number}>*/({ name: 'Rauf', hobbies: ['Sports'] }, { age: 30 });
// Todo: Yuxaridaki yasil rengde olan yeri yaza da bilersen yazmayada cunku TypeScript ozu bas dusur
console.log(mergedObj);                                            // {name: 'Rauf', hobbies: Array(1), age: 30}
console.log(mergedObj.hobbies[0]);                                 // Sports // ! Now you can acces all properties


interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let describtionText = 'Got no value';
    if (element.length === 1) describtionText = `Got 1 element`;
    else if (element.length > 1) describtionText = `Got ${element.length} elements`;
    return [element, describtionText]
}
console.log(countAndDescribe('HI there!'));                                 // (2) ['HI there!', 'Got 9 elements']
console.log(countAndDescribe(['Sports', 'Cooking']));                       // (2) [['Sports', 'Cooking'], 'Got 2 elements']
console.log(countAndDescribe([]));                                          // (2) [[], 'Got no value']
// console.log(countAndDescribe(10));                                       // ! It will give ERROR because number has no length property


// ! The KEYOF Constraint
function extractAndCount<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value ' + obj[key];
}
console.log(extractAndCount({city: 'Baku', population: 100000}, 'city'));               // Value Baku
// console.log(extractAndCount({city: 'Baku', population: 100000}, 'capital'));         // ! Error capital is not in object


// ! Generic Classes
class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];
    addItem(item: T){ this.data.push(item)};
    removeItem(item: T){ this.data.splice(this.data.indexOf(item), 1)};
    getItems(){ return [...this.data]}
}
const textStorage = new DataStorage<string>();
console.log(textStorage.getItems());                                                        // []
textStorage.addItem('Murad');  console.log(textStorage.getItems());                         // ['Murad']
textStorage.addItem('Babayev'); console.log(textStorage.getItems());                        // ['Murad', 'Babayev']
textStorage.removeItem('Babayev');  console.log(textStorage.getItems());                    // ['Murad']
// textStorage.addItem(21);                                                                 // ! It will give an error because only STRING type MUST included

const numberStorage = new DataStorage<number | boolean>();
console.log(numberStorage.getItems())                                                       // []
numberStorage.addItem(77); console.log(numberStorage.getItems());                           // [77]
numberStorage.addItem(19); console.log(numberStorage.getItems());                           // [77, 19]
numberStorage.addItem(true); console.log(numberStorage.getItems());                         // [77, 19, true]
numberStorage.removeItem(77); console.log(numberStorage.getItems());                        // [19]
// textStorage.addItem('Fuad');                                                             // ! It will give an error because NUMBER or BOOLEAN type MUST included

// const objectStorage = new DataStorage<object>()              // ! Type 'object' does not satisfy the constraint 'string | number | boolean'
