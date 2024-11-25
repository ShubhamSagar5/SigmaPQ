//PQ1- Sum Function for n number 

// function sum(num){
//     let sum = 0;

//     for(let i=1;i<=num;i++){
//         sum = sum+i;
//     }

//     return sum;
// }

// let first = sum(10);
// console.log(first)


//PQ2 - Return the concatenation of string 

let array = ["my","india","beautiful"]

function concat(strArray){
    let str = '';

    for(let i=0;i<strArray.length;i++){
        str = str.concat(strArray[i])
    }

    return str;
}

let fullStr = concat(array);
console.log(fullStr);