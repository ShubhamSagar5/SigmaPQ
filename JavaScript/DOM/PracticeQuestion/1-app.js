//Q1 - 

// let container = document.querySelector('.container');
// let p = document.createElement('p');
// p.innerText = "Hey I'am red!";
// container.appendChild(p); 
// p.style.color = 'red' 

//-----------------------------------------------------------------

//Q2 - 
// let container = document.querySelector('.container');
// container.innerHTML = '<h3>I am blue</h3>' 
// let h3 = document.querySelector('h3');
// h3.style.color = 'blue';
// console.dir(h3.setAttribute('style','color:red'));

//-----------------------------------------------------------------

//Q3- 
let container = document.querySelector('.container');
let div = document.createElement('div');

div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

div.innerHTML = '<h1> "I`am in a div"</h1>'


let p = document.createElement('p');
p.innerText = 'Me Too!';

div.appendChild(p)

container.appendChild(div)
