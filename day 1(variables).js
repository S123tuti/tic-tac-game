// js is a programming language which can interact with the user. 
// It is sync & single threaded in nature.

//variables-
//variables are containers for storing data.

//Variable rules - 
            // * - 'a', 'A' case sensitive.
            // * - only letters, digit, underscore(_), $ is allowed. (not even spaces).
            // * - not start with digit.
            // * - reserved words are not allowed.

// var, let, const -
 
// * var - can be redeclared & updated. global scope level variable.
// * let - can't be redeclared but updated. block scope variable.
// * const - can't be redeclared or updated. block scope variable.

// Data Types - 

// Primitive Data Types (Immutable) - 

                // # - Number (1,2)
                // # - Strings ("stuti")
                // # - Boolean (Y/N)
                // # - Symbol
                // # - BigInt
                // # - Undefined
                // # - Null
                
// Non Primitive Data Types (mutable) - 

                // # - Object
                // # - Array
                // # - Functions

// Object - collection of values (different data types)

// const student = {             // we can update object keys if they are addressed by const 
//     fullName :  "stuti",      // but as normal const can't be redeclared or updated
//     age : 25,
//     isPass : 'yes'
// };
// student.age = student.age + 1   // if u want to update 
// student.fullName = "mansi"      // if u want to update 
// console.log(student.fullName);
// console.log(student['age']);
// console.log(student.isPass);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// practice ques- 

// const product = {
//     productName : "ball pen (black)",
//     price : 270,
//     rating : 2,
//     isDeal : true
// };
// console.log(product);


// const profile = {
//     userName : '@stuti',
//     post: 2000,
//     isFollow : true,
//     info : "I'm full stack developer",
//     followers : 2000,
//     following : 100,
// };
// console.log(profile.userName);
// console.log(profile);
// console.log(typeof profile);
// console.log(typeof profile.userName);
// console.log(typeof profile.isFollow);
// console.log(typeof profile.post);