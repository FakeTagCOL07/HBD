function login() {
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const errorMessage = document.getElementById("error");

    // Validar credenciales
    if (username === "juanjoemi" && age == 18) {
        document.getElementById("login").style.display = "none";
        document.getElementById("birthdayCard").style.display = "block";
        document.getElementById("birthdayMessage").innerText = "¡Happy Birthday, " + username + "!";
    } else {
        errorMessage.innerText = "Credenciales incorrectas.";
    }
}

function showSurprise() {
    document.getElementById("surpriseMessage").innerText = "🎂 ¡No hay sorpresa porque no sé cómo xDD! 🎂";
}
