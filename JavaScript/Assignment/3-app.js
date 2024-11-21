//Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number]. For example: for array [7, 9, 0, -2] and n = 3, print [7, 9, 0].

// let arr = [7,9,0,-2] 

// let newArr =  arr.slice(0,3)

// console.log(newArr) 


//Q2- Write a JavaScript program to get the last n elements of an array. [n can be any positive number]. For example: for array [7, 9, 0, -2] and n = 3, print [9, 0, -2].

// let arr = [7,9,0,-2] 

// let newArr =  arr.slice(-3)

// console.log(newArr) 


//Q3- Write a JavaScript program to check whether a string is blank or not.

// let str = 'hari';
// if(str.length != 0){
//     console.log('String is not empty');
// }else{
//     console.log('string is empty');
// }

//Q4- Write a JavaScript program to test whether the character at the given (character) index is lowercase.

// let str = 'apnaCollege';

// let ind = 4;

// if(str[ind] == str[ind].toLowerCase()){
//     console.log('Yes its in lowercase');
// }else{
//     console.log('No its in Capital letter');
// } 


//Q5 - Write a JavaScript program to strip leading and trailing spaces from a string.

// let str = '             apnacollege   '
// let newStr  = str.trim() 
// console.log(newStr) 


//Q6- Write a JavaScript program to check if an element exists in an array or not


// let arr = [7,9,0,-2];  

// let elements = 7;

// // console.log(arr.includes(elements))

// if(arr.indexOf(elements) != -1){
//     console.log('element exits');
// }else{
//     console.log('element is not exists');
// }