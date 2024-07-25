
// function newWord(word1,word2){
//     const count= math.max(word1.length, word2.length);
//     let outpot= "";

//     for (let i=0; i< count)
   
// }







// const list=[1,2,3,4,5,6,7,8,9,10];

// function sumNumber(a,b){
//    const sum= a+b
 
// }


// console.log (sumNumber(8,2))


//
// function hasPairWithSum(arr, target) {
//     if (arr.length < 2) {
//         return false;
//     }

//     let seen = new Set();
//     for (let num of arr) {
//         let complement = target - num;
//         if (seen.has(complement)) {
//             return true;
//         }
//         seen.add(num);
//     }

//     return false;
// }

// Example usage:
// let arr1 = [8, 2, 6, 3];
// let sum1 = 10;
// console.log(hasPairWithSum(arr1, sum1)); // Output: true

// let arr2 = [5, 4, 1, 7];
// let sum2 = 10;
// console.log(hasPairWithSum(arr2, sum2)); // Output: true

// let arr3 = [1, 2, 4, 4];
// let sum3 = 8;
// console.log(hasPairWithSum(arr3, sum3)); // Output: true

// let arr4 = [6, 3, 5];
// let sum4 = 10;
// console.log(hasPairWithSum(arr4, sum4));


//String 
 let myVariable = 'Bob';
 let newVariable = "Bob";

 //number

 let newNumber = 10;

 //boolean 

 let result = true ;

 //Array 
//(array starts from 0)
 let newArray = [ 1,'two', 3, 'four']
 

 /*
 everything in between is comment
*/

//1
// let a = 40;
// let b = 10;
// sum = a+b;

// console.log(sum)
// console.log("a-b=",a-b)
// console.log("a/b=",a/b)
// console.log("a*b=",a*b)
// console.log("a**b",a**b)


//2

// function average(x, y){
//     return Math.round(1+(x, y)/2)
// }
//  let a = 1;
//  let b = 2;
//  let c = 3;

//  console.log("average of a & b",average(a,b))
//  console.log("average of b & c",average(b,c))


//3
function answer(w,x){
    return Math.round(w+x);
}

let w = 10;
let x = 5;
console.log("the answer is",answer(w,x))


// function hello(x,y){
//  return a+b

// }
// let a= 20;
// let b= 10;

// console.log(hello(a,b))



function average(x, y, z){
    return Math.round(1+(x+y+z)/2)
}
 let a = 1;
 let b = 2;
 let c = 3;

 console.log("average of a & b",average(a,b,c))
 console.log("average of b & c",average(b,c))

console.log("newval",a+b+c)


//
function sayMyName(hello){

    console.log("diksha");
    console.log("lama");
    console.log("muktan");
}
sayMyName()



function addTwoNumbers(number1,number2){
  console.log(number1+number2);
}
let q= 3;
let r= 7;
addTwoNumbers(q,r)



//return value lai variable ma store garnu parx
function numbers(val1,val2){
 return val1+ val2
}

const Result=numbers(10,10);
console.log(Result)


//
function loginUserMessage(firstname,lastname){
  return `${firstname}${lastname} just logged in`
}

console.log(loginUserMessage("diksha,muktan"))


//
function loginUser(username){

    return `${username} just logged in`

}

console.log(loginUser("diksha"))

//
function loginUser(username){
  if(!username){
    console.log("enter a user name")
    return 
  }
  return `${username} just logged in`

}

console.log(loginUser(""))


