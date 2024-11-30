let btn = document.querySelector('button');
let p = document.querySelector('p');

btn.addEventListener('click', async function(){
    try {
        let res = await axios.get('https://catfact.ninja/fact');
        // let ans = await data.json()
        // p.innerText= ans.fact;
        p.innerText= res.data.fact;
        console.log(data)
    } catch (error) {
        console.log('error - ',error)
    }
})


let dogBtn = document.querySelector('#dogBtn');

dogBtn.addEventListener('click',async()=>{
    let link = await getPicDog();
    let img = document.querySelector('img');
    img.setAttribute('src',link);
})


let getPicDog = async () => {
      try {
        let res = await axios.get('https://dog.ceo/api/breeds/image/random');
       return res.data.message
    } catch (error) {
        console.log(error)
    }
}
