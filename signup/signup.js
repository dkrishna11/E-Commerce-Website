// signup Javascript

let alreadyUser=document.getElementById("alreadyUser");

let signUpBtn=document.getElementById("signUpBtn");

// if user exits

alreadyUser.addEventListener("click", ()=>{
    window.location.href="../login/login.html"
});

signUpBtn.addEventListener("click", (e)=>{
    e.preventDefault();
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
function generateKey(){
    let token = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 16;
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

function updateUserDetails(firstName, lastName, email, password){
    let signUpUser={
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        tokenKey:generateKey()
    }
    if(localStorage.getItem("user")){
        sessionStorage.setItem("loginDetails", JSON.stringify(signUpUser));
        let userDetails=JSON.parse(localStorage.getItem("user")); //converting stringarray into array obj
        userDetails.push(signUpUser);
        localStorage.setItem("user", JSON.stringify(userDetails));
        
    }else{
        sessionStorage.setItem("loginDetails", JSON.stringify(signUpUser));
        let userDetails=[signUpUser];
        localStorage.setItem("user", JSON.stringify(userDetails));
        
    }
    window.location.href="../profile";
}

function checkIfUserExist(email){
    let users=JSON.parse(localStorage.getItem("user"))
    for(let i=0;i<users.length;i++){
        if(email===users[i].email)
            return true;
    }
    return false;
}

