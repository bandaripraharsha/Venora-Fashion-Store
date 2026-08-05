const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {

        alert("Please enter your name and email.");

        return;

    }

    // Open the website
    window.location.href = "home.html";

});