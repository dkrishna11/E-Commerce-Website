// login Javascript

let loginBtn=document.getElementById("loginBtn");

loginBtn.addEventListener("click", ()=>{
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let loginUser=JSON.parse(localStorage.getItem("user"));

    if(email.trim()==="" ||password===""){
        alert("Please Fill all the Fields");
    }else{
        if(!localStorage.getItem("user")){// if user not exist in localstorage
            alert("User Not Exist");
        }else{
            let flag=0;
            for(let i=0;i<loginUser.length;i++){
                if(email===loginUser[i].email && password===loginUser[i].password){
                    flag=1;
                    window.location.href="./profile/index.html";
                    alert("Login Successful!");  
                }        
            }
            if(flag===0){
                alert("User Name and Password not matching")
            }

        }

    }
})