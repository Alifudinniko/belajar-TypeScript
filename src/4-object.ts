/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

// // type Interference
// let produk ={
//   id: "ID-1",
//   productName: "Macbook Air",
//   price: 2000,
//   note: ""
// };

// // Inline interface
// let produk2 :{
//   id:string;
//   price : number;
// };

// // interface
// interface Produkmain {
//   id:string;
//   price : number;
// };

// let produk3:Produkmain;


/**
 * 2. Nested Object
 */

// interface produkdetail {
//   id:string
// }
// interface Item {
//   id:string;
//   Itemdetail : produkdetail;
// }
// let itemku : Item;

  

/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

// interface Address {
//   street : string;
//   city : string

// }
// interface User {
//   id : string;
//   name:string;
//   address:Array<Address>;
// }
// let people : User;
// people = {
//   id: "U-1",
//   name: "Adi dodi",
//   address: [
//     {
//       street : "Jln. Setapak No.2",
//       city: "Jakarta"
//     },
//     {
//       street: "Jln. Lebar sekali no 10",
//       city: "Medan"
//     }
//   ]
// }






/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

interface Items {
  id :string;
  name:string,
  qty:number

}

interface Cart{
  idCart:string;
  dateOrdered:Date;
  items:{
    [key:string]:Items;
  }
}

let Keyboard:Cart;
Keyboard = {
  idCart: "C1",
  dateOrdered: new Date("2020-05-20"),
  items: {
    p1 :{
      "id": "P-1",
      "name": "Mechanical Keyboard",
      "qty": 2
    },
    p2 :{
      "id": "P-2",
      "name": "USB Hub",
      "qty": 1
    },
  }
}





/**
 * 5. Object Destructuring
 */


  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  


//Type Interference
// let {firstName, lastName} = fullName



//Inline interface

let { firstName, lastName}:{firstName:string; lastName:string;} = fullName;