let logout=document.getElementById("logout");
let changePassword=document.getElementById("changePassword");
let saveInfo=document.getElementById("saveInfo");
let userPhoto=document.getElementById("userPhoto");

let userData=document.getElementsByClassName("right")[0];


logout.addEventListener("click", ()=>{
    sessionStorage.removeItem("loginDetails");
    window.location.href="../index.html";
});

let currentUser=JSON.parse(sessionStorage.getItem("loginDetails"));
let data=JSON.parse(localStorage.getItem("user"));


//change password function:
changePassword.addEventListener("click", (e)=>{
    e.preventDefault();
    let oldPassword=document.getElementById("oldPassword").value;
    let newPassword=document.getElementById("newPassword").value;
    let confirmPassword=document.getElementById("confirmPassword").value;

    if(oldPassword==="" || newPassword==="" || confirmPassword===""){
        alert("Please fill all the fields");
    }else{
        if(currentUser.password!==oldPassword){
            alert("Please Enter Correct Password!");
        }else{
            if(newPassword!==confirmPassword)
                alert("Password are not matching!");
            else{
               sessionStoragePassword(newPassword);
               localStoragePassword(newPassword, currentUser.email);
                alert("Password Changed Successfully");
            }
        }
    }

})

//saving user updated informaation:
let first=document.getElementById("firstName");
let last=document.getElementById("lastName");
first.value=`${currentUser.firstName}`;
last.value=`${currentUser.lastName}`;


console.log('First Name:', first);
console.log('Last Name:', last);

saveInfo.addEventListener("click", (e)=>{
    e.preventDefault();
    let firstName=first.value;
    let lastName=last.value;
    if(firstName.trim()==="" || lastName.trim()===""){
        alert("Please Fill all the Fields");
    }
    else{
        sessionStorageSaveInfo(firstName, lastName);
        localStorageSaveInfo(firstName, lastName, currentUser.email)
       alert("Changes Udated!") 
    }
})

//function to change password in session storage
function sessionStoragePassword(newPassword){
    currentUser["password"]=newPassword;
    sessionStorage.setItem("loginDetails", JSON.stringify(currentUser))
}
function sessionStorageSaveInfo(firstName, lastName){
    currentUser["firstName"]=firstName;
    currentUser["lastName"]=lastName;
    sessionStorage.setItem("loginDetails", JSON.stringify(currentUser))
}

//function to update the current user datails in localstorage
function localStoragePassword(newPassword, userEmail){
    const userDetails=data.find(obj=> obj.email===userEmail);
    if(userDetails){
        userDetails.password=newPassword;
    }
    localStorage.setItem("user", JSON.stringify(data))
}
function localStorageSaveInfo(firstName, lastName, userEmail){
    const userDetails=data.find(obj=> obj.email===userEmail);
    if(userDetails){
        userDetails.firstName=firstName;
        userDetails.lastName=lastName;
    }
    localStorage.setItem("user", JSON.stringify(data))
}

window.addEventListener("click", ()=>{
    let innerHTML=`User Name:${currentUser.firstName}`;
    userPhoto.innerHTML=innerHTML;
    userData.append(userPhoto)
})

