

let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul')





btn.addEventListener('click',function(){
    let li = document.createElement('li');
    li.innerText = input.value
    ul.appendChild(li)
    input.value = ''
    
})
