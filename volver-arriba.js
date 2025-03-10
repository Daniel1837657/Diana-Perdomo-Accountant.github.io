// Mostrar u ocultar el botón "Volver arriba"
window.addEventListener("scroll", function () {
    const boton = document.getElementById("volver-arriba");
    if (window.scrollY > 300) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
});

// Desplazamiento suave al hacer clic en el botón
document.getElementById("volver-arriba").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});