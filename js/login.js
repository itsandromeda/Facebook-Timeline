/*global document, window*/
/*jslint eqeq: true*/
window.addEventListener('load', function () {
    "use strict";
    var logIn = document.getElementById('log-in');

    logIn.addEventListener('click', function () {
        var email = document.getElementById('email').value,
            password = document.getElementById('pw').value,
            emailError = document.getElementById('error-a'),
            pwError = document.getElementById('error-b'),
            users,
            i;

        users = [{
            id: "itsandromeda",
            email: "itsandromeda@gmail.com",
            password: "itsandromeda",
            timeline: "index.html?id=itsandromeda"
        }, {
            id: "ajasenka",
            email: "ajasenka@gmail.com",
            password: "ajasenka",
            timeline: "index.html?id=ajasenka"
        }];

        for (i = 0; i < users.length; i += 1) {
            if (email == users[0].email && password == users[0].password) {
                window.location = users[0].timeline;
            }
            if (email == users[1].email && password == users[1].password) {
                window.location = users[1].timeline;
            }
            /*EMAIL VALIDATION*/
            if (email === "") {
                emailError.innerHTML = "This field can't be blank.";
            } else if (email !== users[0].email || email !== users[1].email) {
                emailError.innerHTML = "This user doesn't exist.";
            }
            if (email == users[0].email || email == users[1].email) {
                emailError.innerHTML = "";
            }
            /*PASSWORD VALIDATION*/
            if (password === "") {
                pwError.innerHTML = "This field can't be blank.";
            } else if (password !== users[0].password || password !== users[1].password) {
                pwError.innerHTML = "The password is incorrect.";
            }
            if (password == users[0].password || password == users[1].password) {
                pwError.innerHTML = "";
            }
        }
    });
});