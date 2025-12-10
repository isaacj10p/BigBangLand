document.getElementById("login-button").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("login-error");

    if (email === "usuario@gmail.com" && password === "1234") {
        window.location.href = "cuenta.html";
    } else {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Correo o contraseña incorrectos";
    }
});