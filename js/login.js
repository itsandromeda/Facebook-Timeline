/*global document, alert*/
/*jslint eqeq: true*/
var logIn = document.getElementById("log-in"),
    email,
    password,
    emailError = document.getElementById("error-a"),
    pwError = document.getElementById("error-b"),
    validEmail = /\S+@\S+\.\S+/;

logIn.addEventListener("click", function () {
    "use strict";
    email = document.getElementById("email").value;
    password = document.getElementById("pw").value;
    
    if (email === "") {
        emailError.innerHTML = "*Este campo no puede estar vacío.";
    } else if (!validEmail.test(email)) {
        emailError.innerHTML = "*Por favor ingrese un email válido.";
    } else {
        emailError.innerHTML = "";
    }
    
    if (password.length < 6) {
        pwError.innerHTML = "*Por favor ingrese un password válido.";
    } else {
        pwError.innerHTML = "";
    }
});