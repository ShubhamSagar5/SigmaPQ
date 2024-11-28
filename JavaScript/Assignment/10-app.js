//Q1 - Try out the following events in Event Listener on your own:

//mouseout
//keypress
//scroll
//load
//(Use MDN for help)

// let body = document.querySelector('body');

// let div = document.createElement('div');

// body.append(div);


// let btn = document.createElement('button');
// btn.innerText = "Click Me"; 

// let input  = document.createElement('input');
// input.setAttribute('placeholder','Type something');

// div.append(btn);
// div.append(input) 

// btn.addEventListener('mouseout',()=>{
//     console.log('mouseOut')
// })

// input.addEventListener('keypress',()=>{
//     console.log('key press');
// })

// let p = document.querySelector('p');
// window.addEventListener('load',()=>{
//     console.log('load Working')
// }) 

//----------------------------------------------------------------

//Q2 - Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.

// let body = document.querySelector('body');
// let btn = document.createElement('button');
// btn.innerText = 'click me';
// btn.addEventListener('click',function(){
//     this.style.backgroundColor = 'green'
// })

// body.append(btn)

//----------------------------------------------------------------

//Q3 - Create an input element on the page with a placeholder "Enter your name" and an <h2> heading on the page inside HTML. The purpose of this input element is to enter a user’s name, so it should only input letters from a-z, A-Z, and space (all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically visible inside the heading.

//Note: No other characters apart from the allowed characters should be visible in the heading.

// let body = document.querySelector('body');

// let h2 = document.createElement('h2');
// let input = document.createElement('input');

// input.setAttribute('placeholder','enter your name');

// input.addEventListener('input',function(event){
//     let name = event.target.value;

//     let filterText = this.value.replace(/[^a-zA-Z\s]/g, "");

//     h2.innerText = filterText;
// })

// body.append(h2,input)