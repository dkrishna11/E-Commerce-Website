let cartDetails=JSON.parse(localStorage.getItem("cart"));
let cartMenu=document.getElementById("cart-items");
let cartData=document.getElementsByClassName("cart-menu")[0];
let total=document.getElementsByClassName("total")[0];
let logout=document.getElementById("logout");
let totalPrice=0;

if(!cartDetails){
    cartData.innerHTML=`<h2>Cart Is Empty</h2>`;
}

logout.addEventListener("click", ()=>{
    sessionStorage.removeItem("loginDetails");
    window.location.href="../index.html";
});




function displayCart(results){
// fetchData=results;
for(let i=0;i<results.length;i++){
        
    let category=results[i];
        let cart=document.createElement("div");
        cart.className="productPoster";
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
                    <button class="removeCart" onclick="removeItems(${category.id})">Remove From Cart</button>
        `;
        cart.innerHTML=innerData;
        cartMenu.append(cart);
        totalPrice+=category.price;
        let bill=document.createElement("div");
        let billData=`
            <p>${i+1}. ${category.title} </p>
            <p>$${category.price}</p>   
        `;
        bill.innerHTML=billData;
        bill.className="billData"
        cartData.appendChild(bill)
    }
    let totalDiv=document.createElement("div");
    let tot=`
        <p>Totol:</P>
        <p>$${totalPrice.toFixed(2)}</p>
        `;
        totalDiv.innerHTML=tot;
        totalDiv.className="billData"
        total.append(totalDiv);
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

function removeItems(id){
    var index = -1;
    cartItems=cartDetails.filter((item)=>{
        if(item.id !== id){
            index = item.id;
            return index;
        }
     })
     if (index !== -1) {
        cartItems.splice(index, 1);
      }
      console.log(cartItems)
      location.reload();
      location.href = location.href;
     localStorage.setItem("cart",JSON.stringify(cartItems))
     window.addEventListener("load", ()=>{
        displayCart(cartItems)
     })
   }


document.querySelector("#pay").addEventListener("click",()=>{
    localStorage.setItem("cart", JSON.stringify([]))
    localStorage.setItem("current-Price",  JSON.stringify(totalPrice));
    alert("Redirecting To PayMent Page")
    window.location.href="../razorPAy/index.html"
  })

displayCart(cartDetails);







