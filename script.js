console.log("hello world!");

const input = document.querySelector("#password");

document.addEventListener("input", function () {
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    let div = document.getElementById('match')

    if (password != confirmPassword) {
        div.style.display = "block";
        password.style.border = "none";
        confirmPassword.style.border = "none";

        password.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
    } else {
        div.style.display = "none";
    }

    console.log("FIRST: " + password);
    console.log("SECOND: " + confirmPassword);
})