//String
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

// let str = 'apnaCollege';
// let newstr = str.slice(4).replaceAll('l','t')
// console.log(newstr) 

//-------------------------------------------------------
//Array
//Q1- Change Array State 

// let month = ['january','july','march','august'];

// month[0] ='july';
// month[1] = 'june';

// month.shift() 
// month.shift()
// month.unshift('june')
// month.unshift('july')

// console.log(month);

//Q2 - Using Splice 

// let month = ['january','july','march','august'];

// let ans = month.splice(0,2,'july','june')

// console.log(ans);
// console.log(month);


//Q3- return the index of javascript if it was reversed 

// let lan = ['c','c++','html','javascript','python','java','c#','sql']
// console.log(lan);
// lan.reverse();
// console.log(lan);
// console.log(lan.indexOf('javascript'));

//Q4 - Created Nested Array to show follwing thing tic-tac-toe 

// const ttt = [['x',null,'o'],
//              [null,'x',null],
//              ['o',null,'x']
//             ]
// ttt[0][1]='o'
// console.log(ttt)