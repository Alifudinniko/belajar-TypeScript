/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

// //TI
// let list =[1,2,3,4];
// //SB
// let list2:number[];
// list = [1,2,3,4];
// //GA
// let list3:Array<number>;
// list = [1,2,3,4];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

//  //TI 
//  let list = ['a','b','c'];
//  //SB
//  let list2:string[];
//  list2 = ['a','b','c'];
//  //GA
//  let list3:Array<string>;
//  list3 = ['a','b','c'];


/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

// //SB
// let list:(string|number)[];
// list =  ["hello", 1, 2, 3, "as" ];
// //GA
// let list2:Array<string|number>;
// list2 =  ["hello", 1, 2, 3, "as" ];


/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

// let list : [string,number,number,number]
// list =  ['cordinat', 2, 4, 7]



/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

// //SB
// let list : {
//     color : string;
//     index : number;
// }[]
// list =  [
//        { color: 'blue', index: 1 },
//        { color: 'red', index: 2 },
//     ]

//  //GA
//  let lis2t : Array<{color:string; index:number}>
//  lis2t =  [
//     { color: 'blue', index: 1 },
//     { color: 'red', index: 2 },
//  ]

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */

// //SB
// let matrix:number[][];
// matrix =  [
//       [1, 2],
//       [3, 4],
//      ];

// //GA
// let matrix2:Array<Array<number>>;


/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */
