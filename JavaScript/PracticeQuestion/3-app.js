//Q1 - Trim and uppercase 

// let msg = "help!";
// let ans = msg.trim().toUpperCase()
// console.log(ans)

//Q2- Predict the output for follwing string 

// let str = "ApnaCollege" 

//console.log(str.slice(4,9)) //Colle 
//console.log(str.indexOf("na")) //2
//console.log(str.replace("Apna","Our")) //OurCollege 

//Q3 - Seperate the college and replace l wit t 

let str = 'apnaCollege';
let newstr = str.slice(4).replaceAll('l','t')
console.log(newstr)