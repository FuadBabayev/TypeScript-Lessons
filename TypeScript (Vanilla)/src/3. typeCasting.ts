// ! TypeSciprt does not dive dipper and analysis our HMTL files (especially in Document Object Model). As you see below some elemnts return null
const paragraph = document.querySelector('p');                           // * HTMLParagraphElement | null
const paragraph2 = document.querySelectorAll('p')                        // * NodeListOf<HTMLParagraphElement>
const paragraph3 = document.getElementById('paragraph');                 // * HTMLElement | null
const paragraph4 = document.getElementsByClassName('paragraph')[0];      // * Element
const paragraph5 = document.getElementsByClassName('paragraph');         // * HTMLCollectionOf<Element>
const paragraph6 = document.getElementsByTagName('p')[0];                // * HTMLParagraphElement
const paragraph7 = document.getElementsByTagName('p');                   // * HTMLCollectionOf<HTMLParagraphElement>



// ! If we write like normal JavaScript it will give us 2 error
// Todo: userInputElement => 'userInputElement' is possibly 'null'.
// Todo:            value => Property 'value' does not exist on type 'HTMLElement'
// const userInputElement = document.getElementById('user-input');
// userInputElement.value = 'Hi, there';

// ! Exclamation mark (!) tells TypeScript DOM element just we select is not null 
// ! There are two ways of Type Casting and they are equivalent
// Todo: In front of element to convert or tell TypeScript to type: <HTMLElement>
// Todo: After the selection part                          to type: 
// ANOTHER VERSION : const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;
userInputElement2.value = 'Hi, there';

// * Also we can write like hath without Exclamation mark (!)
const userInputElement3 = document.getElementById('user-input') as HTMLInputElement;
if(userInputElement3){
    userInputElement3.value = 'Hello, there';
}

// Todo: You can pass this valuable extra information into TypeScript even through it on its own would not be able to find out that above yields to  HTMLInputElement
// Todo: Forcing TypeScript to use this type ensure that whatever this expression yields will be of that type. Otherwise you get RUN TIME ERROR




// ! Optional Chaining
// Todo: If you dont know with certainty if in object a certain property is defined
const fetchedUserData = {
    id: 'u1',
    name : 'Max',
    job : { title : 'CEO', description : 'My own company'}
};
console.log(fetchedUserData && fetchedUserData.job && fetchedUserData.job.description);       // My own company
console.log(fetchedUserData?.job?.title);                                                     // CEO
// ! Above means that if fetchedUserData exist then fetchedUserData.job exist return value of title