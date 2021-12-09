/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// // function declaration
// function add(x:number, y:number , z?:number):number {
//     return x + y;
// }
// add(1,2)
// // function expression
// const addEx = function (x:number, y:number):number {
//     return x + y;
// };

// // arrow function
// const addArrow = (x:number, y:number):number => x + y;

// function with no return value
const hello = (name:string) => console.log("hello " + name)


// function with callback
type Greater=(message:string) => void;
function request(url:string,cb:Greater){
  cb(url)

}
let fn=(str:string) =>console.log(str);
request('alif',fn);


/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

type Contact={
  firstName:string,
  lastName:string,
  gender?:string,
  languange:string
}


function submitContact(firstName:string, lastName:string, languange='indonesia', gender?:string):Contact{
  return {
    firstName:firstName,
    lastName:lastName,
    languange,
    ...(gender && {gender})
  }
}

let result = submitContact('alifudinniko','priambodo');
console.log(result)


/********** 3. Rest Parameter  ***********/

function fruitsCollection(item:string, ...restItems:string[]) {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
console.log(fruits);


/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
// function CT(param) {
//   return param
// }
