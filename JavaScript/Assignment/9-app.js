//Q1 - Create a new input and button element on the page using JavaScript only. Set the text of the button to “Click me”

let body = document.querySelector('body');
let div = document.createElement('div');

let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = 'Click Me';

div.appendChild(input);
div.appendChild(btn);
body.appendChild(div);


//---------------------------------------------------------------------------------------------------------------------------
//Q2 -  Add the following attributes to the elements:
// # Change the placeholder value of the input to “username”.
// # Change the ID of the button to “btn”.

input.setAttribute('placeholder','UserName'); 
btn.setAttribute('id','btn');

//---------------------------------------------------------------------------------------------------------------------------
//Q3- Access the button using querySelector and its ID. Change the button's background color to blue and its text color to white.
let btnq = document.querySelector('button');
let btnId = document.getElementById('btn') 

btnId.classList.add('btnClass')


//---------------------------------------------------------------------------------------------------------------------------
//Q4 - Create an h1 element on the page and set its text to “DOM Practice” (underlined). Change its color to purple.

let h1  = document.createElement('h1');
h1.innerHTML = '<u>DOM Practice</u>'; 

h1.style.color = 'purple';

div.appendChild(h1);

//---------------------------------------------------------------------------------------------------------------------------
//Q5 - Create a p tag on the page and set its text to “Apna College Delta Practice”, where "Delta" is bold.

let p  = document.createElement('p');
p.innerHTML =  'Apna College <b>Delta</b> Practice'
div.appendChild(p)


