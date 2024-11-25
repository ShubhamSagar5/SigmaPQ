//Q1 - Write a JavaScript function that returns array elements larger than a number.

// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num = 5

// function findLargerNumber(arr,num){
//     let larArr =[];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>5){
//             larArr.push(arr[i]);
//         }
//     }

//     return larArr;
// }

// let findNumber = findLargerNumber(arr,num);
// console.log(findNumber) 

//---------------------------------------------------------------------------------------------------------  

//Q2-  Write a JavaScript function to extract unique characters from a string.
//Example:
//str = "abcdabcdefgggh"
//ans = "abcdefgh"

// let str = 'abcdeabcdeacde';

// function getUniqueEle(str){
//     let ans ='';

//     for(let i=0; i<str.length; i++){
//         if(ans.indexOf(str[i]) == -1){
//             ans = ans + str[i];
//         }
//     }

//     return ans;
// }

// let ans = getUniqueEle(str);
// console.log(ans);

//--------------------------------------------------------------------------------------------------------- 

//Q3-Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//Example:
//country = ["Australia", "Germany", "United States of America"]
//output = "United States of America"

// let country = ["Australia","Germany","UnitedStatesofAmerica"];

// function longestCountry(country){
//     let ans = '';

//     for(let i=0; i<country.length ;i++){
//         if(country[i].length > ans.length){
//             ans = country[i];
//         }
//     }

//     return ans;
// }

// let ans = longestCountry(country);
// console.log(ans);


//--------------------------------------------------------------------------------------------------------- 

//Q4 - Write a JavaScript function to count the number of vowels in a string argument.

// let str = 'aeiousfsfs';

// function vowelsCount(str){
//     let count = 0;

//     for(let i=0;i<str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             count = count + 1;
//         }
//     }
//     return count;
// }

// console.log(vowelsCount(str)); 

//---------------------------------------------------------------------------------------------------------   

//Q5- Write a JavaScript function to generate a random number within a range (start, end).

// let rangeStart = 1;
// let rangeEnd = 100;

// function randomNumber(start,end){
//     let ans = Math.floor(Math.random() * rangeEnd) + rangeStart;

//     return ans;
// }

// console.log(randomNumber(rangeStart,rangeEnd))