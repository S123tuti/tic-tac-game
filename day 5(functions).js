// ================================ FUNCTIONS ===============================================================

// block of code to perform specific task, can be invoked(call) whenever needed.
//syntax - 
        //    function functionName(){        //function definition
            //do some work 
        //    }
        //    functionName()                 //function call / invoke


//  function functionName(param1, param2){      //function params are local variables of functions (block scope)
    //do some work
//  }       

//Example -----
// function myFun(){
//     console.log("stuti");
// }
// myFun();

// =============================================
// function myFun(msg){  //parameter
//     console.log(msg);
// }
// myFun("Its amazing series of JS");  //arguement

//Arrow Function -
                  //compact way of writing a function.
//syntax --
           // const functionName = (param1, param2) =>{
            //do some work
        //    }

        // const sum = (a, b) => {
        //     return a+b
        // }
        // let res = sum(2,3)
        // console.log(res);

        // const mul = (a, b) => {
        //     return a*b
        // }
        // let res = mul(2,3)
        // console.log(res);

/////////////////////////////////////////////////////////////////////////////////////////
//calculate the count of Vowels (both normal & arrow function) ----
// function retStr(str){
//     let count = 0;
// for(let i=0; i<str.length; i++){
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//         count++
//     }
// }
// console.log(count);
// }
// retStr("amazon");


// const countVowel = (str) => {
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//             count++
//         }
//     }
// return count
// }
// let a = countVowel("Lucknow");
// console.log(a);

// =========================== HIGHER ORDER FUNCTION / METHODS (HOF OR HOM) ===================================

// HOF / HOM are methods in Js that either take another function as a parameter inside them or ,
//they return another function as output .



// ======================== FOR EACH LOOP IN ARRAYS ============================================

//Syntax --    arr.forEach(callBackFunction)
//             arr.forEach((val) =>{
    //do some work
// });
//method to iterate through each character in the array.
//we can pass 3 params in forEach but it is optional (value, index, array itself).
//we can also perform task like items.toUpperCase() etc.
//It doesn't create new array.
//It simply iterates over the elements of the array and performs an action on each element. 

// let a = [1,2,3];
// let a = ["pune", "mumbai", "lucknow"]
// a.forEach((items, index, arr)=>{
//     console.log(items.toUpperCase(), index, arr);
// });

// let arr = [3,5,7,8,9];
// arr.forEach((val) =>{
//     console.log(val*val)
// });

//another method of using callback ----
                                    //   let calSq = (x) =>{
                                    //        console.log(x*x);
                                    //   };
                                    //   arr.forEach(calSq);


//Array Method ==================================
//1) Map Method --
                // It creates new array with the results of some operations.
                // The result is an array of the same length as the original.
                // It creates a new array, it does not modify the original array.
                // Syntax --
                        //    arr.map(callbackfunction(value, index, array));

                        // let newArr = arr.map((val) => {
                        //     return val*2
                        // })
 
                        // let a = [4,7,9,2,6];
                        // let b = a.map((val) => {
                        //     return val/2
                        // });
                        // console.log(b);
                        // console.log(a);

                   
// 2) Filter Method --
                     // used to filter the data based on the condition.
                     // It creates a new array.
                     // It returns a new array containing only the elements that pass the condition.
                     // The filter function takes a callback function as an argument. 
                     // The callback function is applied to each element of the array, and 
                     // elements that satisfy the condition specified in the callback are included in the new array.
                             
                                //    let arr = [5,7,9,12,24,56];
                                //    let newArr = arr.filter((val) => {
                                //       return val%2 === 0
                                //    });
                                //    console.log(newArr);
                                //    console.log(arr);
                        

// 3) Reduce Method -- 
                    // Performs some operations & reduces the array to a single value. 
                    // It does not modify the original array. 
                    // It returns a single accumulated result.                                
                    // syntax -- 

                    //   array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

                //     let num = [3,2,5,6,7];
                //     let initial = 0;
                //     const sum = num.reduce((prev , current) =>{
                //         return prev + current;
                // }, initial);
                //     console.log(sum);
                    
                // OR 

                //     let num = [3,2,5,6,7];
                //     const sum = num.reduce((prev , current) =>{
                //         return prev * current;
                // });
                //     console.log(sum);
                    
///////////////////////////////////////////////////////////////////////////////////////////////////////

//Filter the marks of student who scored 90+ .

// let marks = [67,98,90,92,87,56,99,100,63];
// let filterMarks = marks.filter((val) => {
//     return val > 90;
// });
// console.log(filterMarks);
// console.log(marks);


//Create an array from 1 to n -----
                            // a) calculate the sum of all numbers with the help of reduce method ?
                            // b) calculate the product of all numbers with the help of reduce method ?

// let arr = [1,2,3,4,5];
// let newSum = arr.reduce((last, present) =>{
//     return last + present
// });
// console.log(newSum);
// console.log(arr);

                            //  let arr = [1,2,3,4,5];
                            //   let newPro = arr.reduce((p,c) => {
                            //     return p * c;
                            //   });
                            //   console.log(newPro);
                            //   console.log(arr);
                                      