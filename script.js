let firstPassword = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let submitButton = document.getElementById("submit-button");

function checkPassword() {
    if(firstPassword.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
    } else {
        confirmPassword.setCustomValidity("");
    } 
} 

firstPassword.onchange = checkPassword; 
confirmPassword.onkeyup = checkPassword; 


submitButton.addEventListener('click', function() {
    document.getElementById('testForm').className = 'submitted';
} );