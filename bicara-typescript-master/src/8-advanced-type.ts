/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */

// use case : transform existing interface to new interface without modify existing interface

interface User {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

// function CreateUser(data: User) {}
// function CreateUser(data: Readonly<User>) {}
// function CreateUser(data: Partial<User>) {}
// function CreateUser(data: Required<User>) {}
// function CreateUser(data: Pick<User, 'id' | 'age'>) {}
function CreateUser(data: Omit<User, 'id' | 'name'>) {}

CreateUser({
    // id: 1,
    // name: 'doe',
    age: 20,
    createdAt: new Date(),
});

/**
 * Record  => Record<K,T>
 */
/*

/*
Usecase #1 :  object with flexible property name, ttype
usecase #2 : object of object
  {
    propA: {id,name,age},
    propB: {id,name,age}
  }
*/


//Case 1
type Response = Record<string, string | number>;
const message:Response = {
  id:'1',
  name:"do",
  age:1
}

//Case 2
type Users = Record<string, User>;
const allUsers:Users = {
  "1" : {id:1,name:'fow',createdAt:new Date},
  "2" : {id:1,name:'fow',createdAt:new Date}
}



/**
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */

interface Post{
  id:string;
  title:string;
  createdAt: Date;
}

// type ExtType = Extract<"id"|"name" , "id"|"name">
// type a = keyof User
type ExtType = Extract<keyof User , keyof Post>
type ExcType = Exclude<keyof User , keyof Post>

type MyNewType = Record<string, ExtType>