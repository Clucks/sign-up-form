console.log("hello world!");

const input = document.querySelector("#password");

document.addEventListener("input", function () {
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmPassword");

    let div = document.getElementById('match');

    if (password.value != confirmPassword.value) {
        div.style.display = "block";
        password.style.border = "none";
        confirmPassword.style.border = "none";

        password.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
    } else {
        password.style.border = "1px solid #E5E7EB";
        confirmPassword.style.border = "1px solid #E5E7EB";
        div.style.display = "none";
    }

    console.log("FIRST: " + password);
    console.log("SECOND: " + confirmPassword);
})