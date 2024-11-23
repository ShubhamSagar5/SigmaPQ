//Q1- Write a JavaScript program to delete all occurrences of an element num in a given array.
//Example:
//If arr = [1, 2, 3, 4, 5, 6, 2, 3] and num = 2
//Result should be: arr = [1, 3, 4, 5, 6, 3]

// let arr=[1,2,3,4,5,6,2,3];
// console.log(arr)
// let num = 2;

// for(let i=0; i<arr.length; i++ ){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }

// console.log('--------New array-----');
// console.log(arr)
//-----------------------------------------------------

//Q2- Write a JavaScript program to find the number of digits in a number.
//Example:
//If number = 287152, count = 6


// let num = 287152;
// let num2 = num.toString()
//console.log(num2.length) 
// let count = 0;
// for(item of num2){
//     count = count + 1; 
// }
// console.log(count)

//----------------------------------------------------- 

//Q3 - Write a JavaScript program to find the sum of digits in a number.
//Example:
//If number = 287152, sum = 25


// let num = 287152;
// let num2 = num.toString()
// let sum = 0; 

// for(item of num2){
//     sum = sum + Number(item) 
// }
// console.log(sum); 

//----------------------------------------------------- 

//Q4 -Print the factorial of a number n.
//(Factorial of a number n is the product of all positive integers less than or equal to n and is denoted by n!.)
//Example:

//7! (factorial of 7) = 1 × 2 × 3 × 4 × 5 × 6 × 7 = 5040
//5! (factorial of 5) = 1 × 2 × 3 × 4 × 5 = 120
//3! (factorial of 3) = 1 × 2 × 3 = 6
//0! is always 1
 

// let n = 3;
// let fact = 1;

// for(let i =1; i<=n; i++){
//     fact = fact*i;
// }
// console.log(fact) 

//----------------------------------------------------- 
//Q5-Find the largest number in an array with only positive numbers.

 let arr=[2,5,10,4,2,7,1,9];
 let res = 0;

 for(item of arr){
    if(item > res && item > 0) {
        res = item;
    }
 }

 console.log(res) 