// let btn = document.querySelector('button');
// let p = document.querySelector('p');

// btn.addEventListener('click', async function(){
//     try {
//         let res = await axios.get('https://catfact.ninja/fact');
//         // let ans = await data.json()
//         // p.innerText= ans.fact;
//         p.innerText= res.data.fact;
//         console.log(data)
//     } catch (error) {
//         console.log('error - ',error)
//     }
// })

//---------------------------------------------------------------------------------------------

// let dogBtn = document.querySelector('#dogBtn');

// dogBtn.addEventListener('click',async()=>{
//     let link = await getPicDog();
//     let img = document.querySelector('img');
//     img.setAttribute('src',link);
// })


// let getPicDog = async () => {
//       try {
//         let res = await axios.get('https://dog.ceo/api/breeds/image/random');
//        return res.data.message
//     } catch (error) {
//         console.log(error)
//     }
// }


//----------------------------------------------------------------------------------------------

let url = "http://universities.hipolabs.com/search?name=india"
let btn = document.querySelector('button');

let ul = document.querySelector('ul');


btn.addEventListener('click',async()=>{
    let inputElement = document.querySelector('#input');
    let input = inputElement.value; // Get the value of the input
    inputElement.value = ''; // Clear the input field
    let colleges = await getCollege()
    let filterData = colleges.filter((col)=>{
        return col['state-province']?.toLowerCase() == input.toLowerCase()

    })
    console.log(filterData)
    if(filterData.length < 1){
        let h = document.createElement('h3');
        h.innerText = 'Not Found' 
        let div = document.querySelector('.notfound');
        div.appendChild(h)
    }else{
        let h = document.querySelector('h3');
        h.innerText = ''
        ul.innerText = ''
    for(col of filterData){
        let li = document.createElement('li');
        li.innerText = col.name 
        ul.appendChild(li);
        
    }
    }
    
   
})


let getCollege = async() => {
    try {
        
        let res = await axios.get(url);
        return res.data

    } catch (error) {
        console.log(error)
        return error
    }
}
