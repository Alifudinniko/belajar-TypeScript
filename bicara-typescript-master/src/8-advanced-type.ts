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
usecase : object of object
  {
    propA: {id,name,age},
    propB: {id,name,age}
  }
*/

/**
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */
