//Q-1 Print all odd num 1-15 

// for(let i=1;i<=15;i++){
//     if(i%2 != 0){
//         console.log(i)
//     }
// }

// for(let i=1;i<=15;i = i+2){
//         console.log(i)
// }
//-------------------------------------------------------

//Q-2 Print all even num 2-10 

// for(let i=2;i<=10;i++){
//     if(i%2 ==0){
//         console.log(i)
//     }
// } 

// for(let i=2;i<=10;i=i+2){
//  console.log(i)
// }
//--------------------------------------------------------

//Q4 - Guess the favourite movie 

let favourite = 'little krishana'
let guess = prompt('Enter the movie Name')

while(guess !== favourite){
    if(guess == 'quit'){
        break;
    }

    console.log('wrong');
    guess = prompt('Enter movie name again');
}

if(guess == favourite){
    console.log('you guess correctly')
}