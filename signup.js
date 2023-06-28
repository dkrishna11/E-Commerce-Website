// signup Javascript

let alreadyUser=document.getElementById("alreadyUser");

let signUpBtn=document.getElementById("signUpBtn");

// if user exits

alreadyUser.addEventListener("click", ()=>{
    window.location.href="login.html"
});

signUpBtn.addEventListener("click", ()=>{
    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;

    if(firstName.trim()==="" || lastName.trim()==="" || email.trim()==="" ||password===""|| confirmPassword===""){
        alert("Please Fill all the Fields");
    }
    else{
        if(password!==confirmPassword){
            alert("Password are not Matching");
            password="";
            confirmPassword="";
        }
        else{
            if(localStorage.getItem("user")){
                // if user exists
                    if(checkIfUserExist(email)){
                        alert("User Already Exist!");
                    }else{
                        //if user array exist in local storage and user is unique
                        updateUserDetails(firstName, lastName, email, password);
                        alert("SignUp Successful!")
                    }

            }else{
                updateUserDetails(firstName, lastName, email, password);
                alert("SignUp Successful!")
            }
        }
    }
        
});

function updateUserDetails(firstName, lastName, email, password){
    let signUpUser={
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    }
    if(localStorage.getItem("user")){
        let userDetails=JSON.parse(localStorage.getItem("user")); //converting stringarray into array obj
        userDetails.push(signUpUser);
        localStorage.setItem("user", JSON.stringify(userDetails));
    }else{
        let userDetails=[signUpUser];
        localStorage.setItem("user", JSON.stringify(userDetails));
    }
    window.location.href="./profile/index.html";
}

function checkIfUserExist(email){
    let users=JSON.parse(localStorage.getItem("user"))
    for(let i=0;i<users.length;i++){
        if(email===users[i].email)
            return true;
    }
    return false;
}