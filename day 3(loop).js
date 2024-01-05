// =================================== LOOPS ==============================================================
// if i print stuti 5 times-
 

//====================== for loop ================================
// let n = 5
// for(let i=1; i<=n; i++){
//     console.log("stuti");
// }

// ================ sum of 1 to n no. ===================================
// let n = 10;
// let sum = 0;
// for(let i=1; i<=n; i++){
// sum+=i
// }
// console.log(sum);


//======================== while loop ======================================

// let n = 5;
// let i =1;
// while(i<=n){
//     console.log("Js");
//     i++;
// }


//============================= do while ==========================================

// let n = 5;
// let i=1; 
// do{
//     console.log("stuti");
//     i++;
// }while(i<=n);


//========================= for of loop ========================================
// for of works on arrays & strings...

// let n = "stuti";
// let size = 0;
// for(let i of n){
//     console.log(i);
//     size++
// }
// console.log(size);


//======================= for in (objects) ==========================================

// let details = {
//     fullName : "stuti",
//     age : 20,
//     skills : "Developer"
// }
// // console.log(details);
// for(let key in details){
//     console.log("key is = ", key,  " & its value is = ", details[key]);
// }


//================== print even 0 to 100 even numbers ======================================

// let n = 100
// for(let i=0; i<=n; i++){
//     if(i%2===0){
//         console.log(i);  //print even 
//     }
//     // console.log(i);  //print all numbers
// }


// GUESS THE NUMBER - 

// let num = 30;
// let user = prompt("Guess the number")
// while(num != user){
//     user = prompt("Guess again")
// }
// console.log("congrats you guess the right number")


//=================== TEMPLATE LITERALS ============================================================

// A way to have embedded expressions in strings.
// `This is literals`  //used beckticks, introduced in ES6(2015) version of JavaScript.

//String Interpolation - 
                        // To create strings by doing substitution of placeholders.
                        //`hey ${expressions} you`   //syntax


//Escape characters - 

// console.log("my\nname\nis\nstuti");  //\n used to print in next line without the use of console.log many times
// console.log("my\tstuti");  //\t used for space b/w two words.
// let str = "Its\tme"
// console.log(str.length);  //6 \n or \t consider as 1

//=========================== STRINGS ===============================================================

// let str = 'stuti';
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);        //undefined
// console.log(str);           //stuti
// console.log(str.length);    //5
// console.log(typeof str);    //string

// strings methods================================
// strings are immutable.
//doesnt affect original strings works on new strings 

// str.toUpperCase -
// let s = 'apna'
// let st= s.toUpperCase();
// console.log(s);
// console.log(st);

// str.toLowerCase -
// let s = 'APNA'
// let st= s.toLowerCase();
// console.log(s);
// console.log(st);

// str.trim -    //remove white spaces from both sides
// let a = '  one   ';
// let b  = a.trim();
// console.log(a);
// console.log(b);

//slice ===
// str.slice(start, end) //ending value not include gives only a part of string
// let s = 'method';
// console.log(s.slice(1,4));

//replace ===
//str.replace(searchValue, newValue)
// let s = 'stuti';
// console.log(s.replace('s','t'));  //only replace 1st matching character to remove all write replaceAll


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICE - 

//Generate username with the help of prompt -
// let fullName = prompt('Enter the fullName without spaces');
// let userName = '@'+fullName+fullName.length
// console.log(userName)