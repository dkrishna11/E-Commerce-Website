let mensCollection =document.getElementById("mens-collection");
let womensCollection =document.getElementById("womens-collection");
let electronics =document.getElementById("electronics");
let jewelery =document.getElementById("jewelery");
let results=[];
let myCartArray = []; 

let logout=document.getElementById("logout");


let fetchData;
let search=document.getElementsByClassName("fa-search")[0];

const filterButtons=document.querySelectorAll("#select button");
const filterableCart=document.querySelectorAll(".shopList .cart");

let red=document.getElementById("red");
let blue=document.getElementById("blue");
let green=document.getElementById("green");
let black=document.getElementById("black");
let white=document.getElementById("white");


let rate=document.getElementById("rate");
let cards=document.getElementsByClassName("cart");
let applyFilter=document.getElementById("applyFilter");


logout.addEventListener("click", ()=>{
    sessionStorage.removeItem("loginDetails");
    window.location.href="../index.html";
});

// filter cart
const filterCart = e=>{
    
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    filterableCart.forEach(card=>{
        card.classList.add("hide");
        // console.log("card ",card.dataset.name)
        if(card.dataset.name===e.target.dataset.name || e.target.dataset.name==="all"){
            card.classList.remove("hide");
        }
        
    });

}

filterButtons.forEach(button => button.addEventListener("click", filterCart));

async function fetchApi(){
    try{
        const response= await fetch("https://fakestoreapi.com/products");
         results= await response.json();
        // fetchData=results;
        displayProduct(results)
        
    }
    catch(Errors){
        console.log("Error:",Errors)
    }
}    

function displayProduct(results){
    // fetchData=results;
    for(let i=0;i<results.length;i++){
        let category=results[i];
        if(category.category=="men's clothing"){
            let div=document.createElement("div");
            let innerData=`
            <img src="${category.image}" alt="">
                        <div class="card-content">
                        <p class="title">${category.title}</p>
                            <div class="price">
                                <h4>$${category.price}</h4>
                                <p>${randomSize()}</p>
                            </div>
                           <div class="colorPick">
                            <p style="background-color:${randomColor()};" class="color"></p>
                            <p style="background-color:${randomColor()};" class="color"></p>
                            <p style="background-color:${randomColor()};" class="color"></p>
                           </div>
                            <p>Rating:${category.rating.rate}/5</p>
                        </div>
                        <button class="addToCart" onclick="addToCarts(${category.id})">Add to Cart</button>
            `;
            div.className="productPoster";
            div.innerHTML=innerData;
            mensCollection.append(div);
        }
        else if(category.category=="women's clothing"){
            let div=document.createElement("div");
            let innerData=`
            <img src="${category.image}" alt="">
                        <div class="card-content">
                        <p class="title">${category.title}</p>
                            <div class="price">
                                <h4>$${category.price}</h4>
                                <p>${randomSize()}</p>
                            </div>
                            <div class="colorPick">
                            <p style="background-color:${randomColor()};" class="color"></p>
                            <p style="background-color:${randomColor()};" class="color"></p>
                            <p style="background-color:${randomColor()};" class="color"></p>
                           </div>
                            <p>Rating:${category.rating.rate}/5</p>
                        </div>
                        <button class="addToCart" onclick="addToCarts(${category.id})">Add to Cart</button>
            `;
            div.className="productPoster";
            div.innerHTML=innerData;
            womensCollection.append(div);
        }
        else if(category.category=="electronics"){
            let div=document.createElement("div");
            let innerData=`
            <img src="${category.image}" alt="">
                        <div class="card-content">
                        <p class="title">${category.title}</p>
                            <div class="price">
                                <h4>$${category.price}</h4>
                                <p>${randomSize()}</p>
                            </div>
                            <div class="colorPick">
                            <p style="background-color:${randomColor()};" class="color"></p>
                            <p style="background-color:${randomColor()};" class="color"></p>
                            <p style="background-color:${randomColor()};" class="color"></p>
                           </div>
                            <p>Rating:${category.rating.rate}/5</p>
                        </div>
                        <button class="addToCart" onclick="addToCarts(${category.id})">Add to Cart</button>
            `;
            div.className="productPoster";
            div.innerHTML=innerData;
            electronics.append(div);
        }
        else{
            let div=document.createElement("div");
            let innerData=`
            <img src="${category.image}" alt="">
                        <div class="card-content">
                        <p class="title">${category.title}</p>
                            <div class="price">
                                <h4>$${category.price}</h4>
                                <p>${randomSize()}</p>
                            </div>
                            <div class="colorPick">
                            <p style="background-color:${randomColor()};" class="color"></p>
                            <p style="background-color:${randomColor()};" class="color"></p>
                            <p style="background-color:${randomColor()};" class="color"></p>
                           </div>
                            <p>Rating:${category.rating.rate}/5</p>
                        </div>
                        <button class="addToCart" onclick="addToCarts(${category.id})">Add to Cart</button>
            `;
            div.className="productPoster";
            div.innerHTML=innerData;
            jewelery.append(div);
        }
    }

}
// search the cart
search.addEventListener("click", ()=>{
    let searchData=document.getElementsByClassName("input-field")[0];
   let value=searchData.value;
   let title=document.querySelectorAll(".productPoster .title");
   let elements=document.querySelectorAll(".productPoster");

   title.forEach((ele, index)=>{
    if(ele.innerText.includes(value)){
        elements[index].classList.remove("hide");
    }
    else{
        elements[index].classList.add("hide");
    }
   })
});

let temp=JSON.parse(localStorage.getItem("cart"))
if(temp){
  myCartArray=temp;
}

function addToCarts(itemId) {
    let temp = results.filter((item) => {
        return item.id == itemId;
    });
    
    myCartArray.push(temp[0]);
    localStorage.setItem("cart", JSON.stringify(myCartArray));
}

function randomColor(){
    const colors = ["red", "blue", "black"];
    const length = colors.length;
    const randomIndex = Math.floor(Math.random() * length);
    return colors[randomIndex];
}

function randomSize(){
    const size = ["S", "M", "L"];
    const length = size.length;
    const randomIndex = Math.floor(Math.random() * length);
    return size[randomIndex];
}


rate.addEventListener("input",()=>{
    console.log(rate.value)
    const rateValue=rate.value;
    let rateResults=results.filter((e)=>{
        return Math.floor(e.rating.rate)===rateValue;
    })
})

fetchApi();



