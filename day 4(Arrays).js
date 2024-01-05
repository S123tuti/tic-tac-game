// ================================== ARRAYS ===================================================== 
// collection of items.(same/linear)

// let marks = [1,2,3];
// // console.log(marks);
// marks[2] = 0
// marks[6] = 6    //[ 1, 2, 3, <3 empty items>, 6 ]
//                 //it will create empty slots between the last defined index and the newly assigned index.

// console.log(marks);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);            //undefined
// console.log(marks.length);
// console.log(typeof marks);             //Object



// let words = ['hello', 'hey', 'you', 'me'];
//console.log(words);
// for(let i=0; i<words.length; i++){
//    console.log(words);          // print array 4 times
    // console.log(i);             // print indexes
    // console.log(words[i]);      // print words 
// }


//for of loop -
// let cities = ['lucknow', 'pune', 'mumbai', 'gurgaon', 'bangalore', 'delhi'];
// for(city of cities){
//     console.log(city);
// }


//calculate average of marks - 
// let marks = [23,56,98,78,56];
// let sum = 0;
// for(let i=0; i<marks.length; i++){
//     sum+=marks[i];
// };
// let avg = sum/marks.length
// console.log(sum);
// console.log(`The average marks of class = ${avg}`);


//Calculate 10% offer on array -
// let arr = [250, 645, 300, 900, 50];
// for(let i=0; i<arr.length; i++){
//     let offer = arr[i]/10;
//     arr[i] -= offer
//     console.log(arr[i]);
// }

//2nd method - 
// let i = 0;
// for(let val of arr){
//     let offer = val/10;
//     arr[i] = arr[i] - offer;
//     i++;
// }
// console.log(arr);

//============================== Arrays Method ================================================================

//1) Push - 
          //It adds the elements at the end of the array.
          //modify original array.
//           let a = [1,2,3];
//           a.push(4);
//           console.log(a);


//2) Pop - 
           //It removes the elements at the end of the array & return.
           //modify original array.
//           let a = [1,2,3,4];
//           a.pop();
//           console.log(a);


//3) Unshift - 
          //It adds the elements at the starting of the array.
          //modify original array.
        //   let a = [1,2,3];
        //   a.unshift(4);
        //   console.log(a);


//4) Shift - 
          //It removes the elements at the starting of the array & return.
          //modify original array.
        //   let a = [1,2,3];
        //   a.shift();
        //   console.log(a);


//5) ToString - 
          //It converts array into strings.
          //Doesn't modify original array
        //   let a = [1,2,3];
        //  let b =  a.toString();
        //   console.log(b);

        //   let a = [1,2,3];              //alternate way 
        //  console.log(a.toString());

//6) concat - 
           //add 2 or multiple arrays & return new array.
           //doesn't modify original array.
        //    let a = [1,2,3];
        //    let b = [4,5];
        //    let c = a.concat(b)
        //    console.log(c);
        //    console.log(a);
        //    console.log(b);


//7) Slice - 
            // return a piece of 
            //doesn't modify original array.
            // let a = [1,2,3,4,5,6,7];
            // let b = a.slice(2,6);  //1st is starting index last is optional & doesn't include (3,4,5,6)
            // console.log(b);
            
            // let a = [1,2,3,4,5,6,7];
            // console.log(a.slice(1,5));    //alternate way 
            // console.log(a);


//8) Splice - 
            // return a piece of array (add, remove, replace)
            // modify original array.
            // (startIndex, deleteCount, newElement) -- syntax
            // let a = [1,2,3,4,5,6,7];
            // let b = a.splice(2,3, 101, 102);  
            // console.log(a);
            // console.log(b);    //return deleted number 
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//a) remove the 1st company from the array -
                                        //    companies.shift();
                                        //    console.log(companies);

//b) remove uber & add ola in its place - 
                                        // let deleted = companies.splice(2,1, "ola");
                                        // console.log(deleted);
                                        // console.log(companies);

//c) Add Amazon at the end - 
                                        // companies.push("Amazon")
                                        // console.log(companies);