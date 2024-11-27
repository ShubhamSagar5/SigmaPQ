//Q1 - Check if all numbers in our array are multiple of 10 or not

// let arr = [10,20,30,40,50];

// let answer = arr.every((ele)=>{
    
//     return ele % 10 == 0

// })

// console.log(answer); 


//Q2 - Create a function to find the min number in an array 

let arr = [10,20,30,40,50];

let min = arr.reduce((res,ele) => {
    if(res < ele){
        return res
    }else{
        return ele
    }
}) 

console.log(min)