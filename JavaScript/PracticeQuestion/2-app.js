//Q1 - create traffic light based on color  

// const color  = "green"

// if(color === "red"){
//     console.log("Stop")
// }else if(color === "yellow"){
//     console.log("Slow Down")
// }else if(color === "green"){
//     console.log("Go")
// } 


//Q2 - Calculate popcorn prices based on their size 

// const size = prompt('Enter Size of popcorn')

// if(size == 'XL'){
//     console.log('Price is Rs-250')
// }else if(size == 'L'){
//     console.log('Price is Rs-200')
// }else if(size == 'M'){
//     console.log('Price is Rs-100')
// }else if(size == 'S'){
//     console.log('Price is Rs-50')
// }else{
//     console.log('You Selected Wrong Size')
// }


//Q3 -Find out  Good String


// const string = prompt('Enter String')

// if(string[0] === 'a' && string.length > 3){
//     console.log('Its A Good String')
// }else{
//     console.log("String is not good")
// }


//Q4 - Switch Statement Print week Day base on number 

let number = prompt('Enter Day Number') 

console.log(typeof(number))

switch(number){
    case "1" : {
        console.log("Sunday");
        break;
    }
    case "2" : {
        console.log("Monday");
        break;
    }
    case "3" :{
        console.log("Tuesday");
        break;
    }
    
    case "4" :{
        console.log("wensday");
        break;
    }
    
    case "5" :{
        console.log("Thursday");
        break;
    }
    
    case "6" :{
        console.log("Friday");
        break;
    }
    
    case "7" :{
        console.log("Saturday");
        break;
    }
}