/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance

class User {
    //Properties
    id:number;
    firstName:string;
    lastName:string;


    //Method
    login(){}
    register(){}

    //constructor
    constructor(id:number, firstName:string, lastName:string ){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;

    }
}


let myUser = new User(1,'alif','niko');
// myUser.firstName;
console.log(myUser);


