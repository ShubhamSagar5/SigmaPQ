//Q1 - Square and sum the array elements using the arrow function and then find the average of the array.

// let arr  = [1,2,3,4,5];

// let square = arr.map((ele)=>{
//     return ele*ele;
// })
// console.log(square); 


// let sum = arr.reduce((res,ele)=>{
//     return res+ele;
// });
// console.log(sum); 


// let square = (...ele) => {
//     let sqArr = ele.map((ele)=>{
//         return ele*ele;
//     })
//     return sqArr;
// }
// console.log(square(1,2,3,4,5))


// let sum = (...elem) => {
//    let res =  elem.reduce((res,ele)=>{
//         return res+ele
//     })
// return res
// }
// console.log(sum(1,2,3,4,5)) 


// let avg = (arr) => {
//     let add = arr.reduce((res,ele)=>{
//         return res+ele;
//     })
//     let ans = add/arr.length
//     console.log(ans);
// }
// console.log(avg(arr)) 


//-------------------------------------------------------------------
//Q2 - Create a new array using the map function where each element is equal to the original element plus 5.

// let arr  = [1,2,3,4,5];

// let newArr = arr.map((ele)=>{
//     return ele+5;
// })
// console.log(newArr) 

//-------------------------------------------------------------------
//Q3 - Create a new array whose elements are in uppercase of words present in the original array.

// let arr = ['Apple','ball','Cat','dog','Elephant'];

// let newArr = arr.map((ele)=>{
//     return  ele.toUpperCase();
// })
// console.log(newArr)

//-------------------------------------------------------------------
//Q4 - Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
// let arr = [1,2,3,4,5];
// let doubleAndReturnArgs = (arr,...num) => {
//     let arr2 = [...arr,...num.map((ele)=>(ele*2))];
//     return arr2;
// }
// console.log(doubleAndReturnArgs(arr,6,7,8,9,10))

//--------------------------------------------------------------------
//Q5 - Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and the second object.

// const firstObj = {
//     name:'hari',
//     class:'2nd',
//     number:25
// }

// const secondObj = {
//     height:'5.6inch',
//     weight:'60kg'
// }

// const res = (obj1,obj2 )=> ({
// ...obj1,
// ...obj2
// })
// console.log(res(firstObj,secondObj))