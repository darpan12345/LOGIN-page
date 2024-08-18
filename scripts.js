// Toggle between Login and Register forms
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Validate Login Form
function validateLogin() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    if (username === "" || password === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Add further login validation logic if necessary
    alert("Login successful!");
    return true;
}

// Validate Register Form
function validateRegister() {
    var username = document.getElementById('registerUsername').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Add further registration validation logic if necessary
    alert("Registration successful!");
    return true;
}
