/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Object
 */

interface User {
    name:string;
    age:number;
}

type TUser = {
    name:string;
    age:number;
}


/**
 * Merge
 */
interface Song{
    // number:number;
    songname:string;
}
interface Song{
    artisname:string;
}

 const mySong :Song= {
     artisname:'Metal',
     songname:'niko'
 }



/**
 * Intersection & Union
 */

type typeA = {
    id:number;
    propa:string
}
type typeB= {
    id:number;
    propb?:string
}

//intersection  => semua harus dipakai
type intersectionAB =  typeA & typeB;

//Union => tidak semua
type UnionAb = typeA | typeB;


let myData: intersectionAB={
    id:1,
    propa:"test",
    propb:"nu"
}

let myData2: UnionAb={
    id:1,
 
    propb:"nu"
}

/**
 * Implements
 */

interface Address{
    street:string;
}



//Blueprint
// type &interface V
interface Person extends Address{
    name : string;
    age :number;
    getName(id:number):string;
}
class People implements Person{
name:string;
age:number;
street: string;
constructor (name:string, age:number){
    this.age = age;
    this.name = name;
    this.street = '';
}

getName(id:number){
    return 'yesss';
}

}

/**
 * Extend
 */



