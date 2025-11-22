document.getElementById("submit-rating").addEventListener("click", function() {
    const rating = document.getElementById("rating").value;
    if (rating >= 1 && rating <= 5) {
        const whatsappLink = `https://wa.me/595981444992?text=Encuesta%20calificación%20${rating}`;
        const qrContainer = document.getElementById("qr-container");
        qrContainer.classList.remove("hidden");

        QRCode.toCanvas(document.getElementById("qr"), whatsappLink, function(error) {
            if (error) console.error(error);
            console.log("QR generado!");
        });

        setTimeout(() => {
            qrContainer.classList.add("hidden");
        }, 300000);

        document.getElementById("close-qr").addEventListener("click", function() {
            qrContainer.classList.add("hidden");
        });
    }
});

