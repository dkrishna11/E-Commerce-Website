let mensCollection =document.getElementById("mens-collection");
let womensCollection =document.getElementById("womens-collection");
let electronics =document.getElementById("electronics");
let jewelery =document.getElementById("jewelery");

const filterButtons=document.querySelectorAll("#select button");
const filterableCart=document.querySelectorAll(".shopList .cart");
console.log(filterableCart)
let filterCart = e=>{
    
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    filterableCart.forEach(card=>{
        card.classList.add("hide");
        console.log(e.target.dataset.name)
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
        const results= await response.json();
        displayProduct(results)
    }
    catch(Errors){
        console.log("Error:",Errors)
    }
}    

function displayProduct(results){
   
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
                                <p>S, M, L</p>
                            </div>
                            <p>Color:</p>
                            <p>Rating:${category.rating.rate}/5</p>
                        </div>
                        <button class="addToCart">Add to Cart</button>
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
                                <p>S, M, L</p>
                            </div>
                            <p>Color:</p>
                            <p>Rating:${category.rating.rate}/5</p>
                        </div>
                        <button class="addToCart">Add to Cart</button>
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
                                <p>S, M, L</p>
                            </div>
                            <p>Color:</p>
                            <p>Rating:${category.rating.rate}/5</p>
                        </div>
                        <button class="addToCart">Add to Cart</button>
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
                                <p>S, M, L</p>
                            </div>
                            <p>Color:</p>
                            <p>Rating:${category.rating.rate}/5</p>
                        </div>
                        <button class="addToCart">Add to Cart</button>
            `;
            div.className="productPoster";
            div.innerHTML=innerData;
            jewelery.append(div);
        }
    }

}

fetchApi();



