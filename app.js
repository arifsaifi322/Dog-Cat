//<--------------------cat-----------------------> 

let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
let p = document.querySelector("p");


async function getFacts(){
    let res = await axios.get(url);
    return res.data.fact;
}

btn.addEventListener("click",async () => {
    let fact = await getFacts();
    p.innerText = fact;
})




// <-------------------------dog---------------------------->

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#dogBtn");
let img = document.querySelector("#dogImg");

btn2.addEventListener("click",async()=>{
    let dogUrl = await dogImg();
    img.setAttribute("src",dogUrl);
})

async function dogImg(){
    let res = await axios.get(url2);
    let dogUrl = res.data.message;
    return dogUrl;
}
