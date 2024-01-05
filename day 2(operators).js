// assignment operator - 
// let a = 5 ; let b = 2
                      // =   (a=5)
                      // +=  (a+=2  or a= a+2)
                      // -=  (a-=2) 
                      // /=  (a/=2)
                      // %=  (a%=2)
                      // **= (a**=2)  

// Increment -
// pre increment -   (++a)              the change reflects in same line
        //  let a = 2;
        //  console.log(++a);  

// post increment -   (a++)              the change reflects in next line
        //  let a = 2;
        //  console.log(a++);                      
        //  console.log(a);    
        
// Decrement -         
// pre decrement -   (--a)              the change reflects in same line
        //  let a = 2;
        //  console.log(--a);  
        //  console.log(a);  

// post decrement -   (a--)              the change reflects in next line
        //  let a = 2;
        //  console.log(a--);                      
        //  console.log(a);                      


// Comparision Operator - 

// # Equal to (==)  -
                // let a = 2;                  
                // let b = "2";
                // console.log(a==b);                 //only checks value

// # Equal to (===)  -
                // let a = 2;
                // let b = "2";
                // console.log(a===b);                  // ckecks both value & data type(strict equality)

// # Not equal to  (!=)  -
                    //  let a= 1;
                    //  let b= 8;
                    //  console.log(a != b);   // true

// # Not equal to  (!==)  -
                    //  let a= "8";
                    //  let b= "8";
                    //  console.log(a !== b);            //false 

// # >, <, >=, <=  
                // let a = 9;
                // let b = 6;
                // console.log(a>b);     //true
                // console.log(a<b);     //false
                // console.log(a>=b);    //true
                // console.log(a<=b);    //false


// Logical Operators - 

// Table - 
            //  cond1      cond2       &&                  ||
               
            //    T          T          T                   T
            //    T          F          F                   T
            //    F          T          F                   T
            //    F          F          F                   F
  
// 1)   Logical And operator (&&)  - 

                                //    let a = 5;
                                //    let b = 3;
                                //    if(a>b && b<a){
                                //         console.log('yes');
                                //    }else{
                                //         console.log('no');
                                //    }


// 2)   Logical Or operator (||)  -

                                //  let a = 5;
                                //  let b = 3;
                                //  if(a>b || b>a){
                                //  console.log('yes');   
                                //  }else{
                                //      console.log('no'); 
                                //     }


// 3)   Logical Not operator (!)  - 

                                //    let a = 5;
                                //    let b = "5";
                                //    console.log(a != b);
                               


// ===================== CONDITIONAL STATEMENTS ===================================================

// 1)  IF-ELSE STATEMENT - 
// let age = 38;
// if(age>=18){
//     console.log('DL granted');
// }
// if(age<18){
//         console.log("under age");
// }


// 2)  IF-ELSE STATEMENT - 
//                     let age = 38;
//                     if(age>=18){
//                         console.log('DL granted');
//                     }else{
//                         console.log("under age");
//                     }


// 3) ELSE-IF STATEMENT - 
                        // let mode = "blue";
                        // let color;

                        // if(mode === "dark"){
                        //         color = "black"
                        // }else if(mode === "light"){
                        //         color = "white";
                        // }else{
                        //         color = "random"
                        // }
                        // console.log(color);


// ======================= TERNARY OPERATOR ========================================================
// let age = 18;
// let result = age >= 18 ? "adult" : "underage"
// console.log(result);


//=================== SWITCH STATEMENT =========================================================
// let day = 5;
// switch(day){
//         case 0 :
//           day = "Sunday";
//            break;
//            case 1 : 
//           day = "monday"
//            break;
//            case 2 : 
//           day = "Tuesday"
//            break;
//            case 3 : 
//           day = "Wednesday"
//            break;
//            case 4 : 
//           day = "Thursday"
//            break;
//            case 5 : 
//           day = "Friday"
//            break;
//            case 6 : 
//           day = "Saturday"
//            break;
//            default :
//            day = "Plz enter valid number"
// }
// console.log(day);


//////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICE - 
        //     let n = 55;
        //     if(n%5===0){
        //         console.log('divisible');
        //     }else{
        //         console.log("ND");
        //     }

        // let score = 60;
        // let grade;
        // if(score >=90 && score<=100){
        //         grade = "A"
        // }else if(score >=70 && score<=89){
        //         grade = "B"
        
        // }else if(score >=60 && score<=69){
        //         grade = "C"
        // }else if(score >=50 && score<=59){
        //         grade = "D"
        // }else if(score >=40 && score<=49){
        //         grade = "E"
        // }else if(score>=33 && score<=39){
        //         grade = "JUST PASS"
        // }else{
        //         grade = "valid number"
        // }
        // console.log(grade);
        