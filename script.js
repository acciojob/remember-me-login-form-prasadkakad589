//your JS code here. If required.
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let existingBtn = document.getElementById("existing");

// Show existing user button if data exists
window.onload = function () {
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (savedUser && savedPass) {
        existingBtn.style.display = "block";
    }
};

// Form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let user = username.value;
    let pass = password.value;

    alert(`Logged in as ${user}`);

    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existingBtn.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }
});

// Existing user login
existingBtn.addEventListener("click", function () {
    let savedUser = localStorage.getItem("username");
    if (savedUser) {
        alert(`Logged in as ${savedUser}`);
    }
});