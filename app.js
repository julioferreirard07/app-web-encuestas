// Autenticación de usuario
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se recargue la página

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificación de usuario y contraseña
    if (username === "Central" && password === "123@encuestas") {
        document.getElementById("login-form").style.display = "none"; // Ocultar el formulario de login
        document.getElementById("survey-container").style.display = "block"; // Mostrar la encuesta
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Generar y mostrar el QR después de seleccionar la calificación
document.getElementById("submit-rating").addEventListener("click", function() {
    const rating = document.getElementById("rating").value;
    if (rating >= 1 && rating <= 5) {
        const whatsappLink = `https://wa.me/595981444992?text=Encuesta%20calificación%20${rating}`;
        const qrContainer = document.getElementById("qr-container");
        qrContainer.style.display = "block"; // Mostrar el contenedor del QR

        // Generar el QR para WhatsApp
        QRCode.toCanvas(document.getElementById("qr"), whatsappLink, function(error) {
            if (error) console.error(error);
            console.log("QR generado!");
        });

        // Ocultar el QR después de 3 minutos
        setTimeout(() => {
            qrContainer.style.display = "none";
        }, 180000); // 3 minutos en milisegundos

        // Cerrar el QR al hacer clic en "Cerrar"
        document.getElementById("close-qr").addEventListener("click", function() {
            qrContainer.style.display = "none";
        });
    }
});

