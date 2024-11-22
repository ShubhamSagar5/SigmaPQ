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

// let favourite = 'little krishana'
// let guess = prompt('Enter the movie Name')

// while(guess !== favourite){
//     if(guess == 'quit'){
//         break;
//     }

//     console.log('wrong');
//     guess = prompt('Enter movie name again');
// }

// if(guess == favourite){
//     console.log('you guess correctly')
// }
//--------------------------------------------------------


//Q5 - Todo App using js 

let todo  =  [];

let tasks = prompt('Enter Tasks what you ant to do!!')
while(true){

    if(tasks == 'quit'){
        console.log('you Choose quit option')
        break;
    }

    if(tasks == 'list'){   
        console.log('---------------------------')  
        for(let i = 0; i<todo.length ; i++ ){
            console.log(i + " - "+todo[i]);
             }
             console.log('---------------------------')  

    }else if (tasks == 'add'){
        let inputTasks = prompt('Enter Your Tasks Name');
        todo.push(inputTasks);
        console.log('Tasks Add Successfully')

    }else if (tasks == 'delete'){
        let indexNum = prompt('Enter Index Numer Of your Tasks');
        todo.splice(indexNum,1);
        console.log('Tasks Delete Successfully')
    }else{
        console.log('You type wong option');
    }
    tasks = prompt('Enter Tasks what you ant to do!!')
}