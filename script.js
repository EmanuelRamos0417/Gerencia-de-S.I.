function mostrarSemana(num) {
    const semanas = document.querySelectorAll(".semana");

    semanas.forEach(seccion => {
        seccion.style.display = "none";
    });

    const seleccionada = document.getElementById("semana" + num);
    seleccionada.style.display = "block";
}

// Mostrar la primera por defecto
document.addEventListener("DOMContentLoaded", () => {
    mostrarSemana(1);
});
