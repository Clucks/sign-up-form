console.log("hello world!");
document.addEventListener("DOMContentLoaded",function(){
    let password = document.querySelector("#password").value;

    let confirmPassword = document.querySelector("#confirmPassword").value;

    if(password != confirmPassword){
        console.log("HI");
    }
})