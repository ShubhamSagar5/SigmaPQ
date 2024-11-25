//PQ1- Gen random Number btw 1 to 100 

// let random = Math.floor(Math.random() * 100) + 1
// console.log(random)

//-----------------------------------------------------------------

//PQ2- Gen random Number btw 1 to 5 
// let random2 = Math.floor(Math.random() * 5) + 1
// console.log(random2)

//-----------------------------------------------------------------


//PQ3- Guessing Game 

const range = prompt('Enter Max Number Range');
let randomNum = Math.floor(Math.random() * range)  + 1;

let guessNumber = prompt('Guess the Number');

while(true){

    if(guessNumber == 'quit'){
        console.log('You Quit The Game');
        break;
    }

    if(randomNum == guessNumber){
        console.log(`Congrats you Guess Right Number ${guessNumber}`);
        break;
    }else if(randomNum < guessNumber){
        guessNumber = prompt('Hint : you guess large Number');
    }else{
        guessNumber = prompt('Hint : you guess small Number');
    }


}