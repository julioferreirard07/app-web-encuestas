document.getElementById("submit-admin").addEventListener("click", function() {
    const adminCode = document.getElementById("admin-code").value;

    if (adminCode === "25012020") {
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("admin-dashboard").style.display = "block";
        // Aquí puedes mostrar los datos de las encuestas
    } else {
        alert("Código incorrecto");
    }
});
