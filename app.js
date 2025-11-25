document.getElementById("submit-rating").addEventListener("click", function() {
    const rating = document.getElementById("rating").value;
    if (rating >= 1 && rating <= 5) {
        // Crear el link de WhatsApp
        const whatsappLink = `https://wa.me/595981444992?text=Encuesta%20calificación%20${rating}`;
        const qrContainer = document.getElementById("qr-container");
        qrContainer.style.display = "block"; // Mostrar el contenedor del QR

        // Generar el QR
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
