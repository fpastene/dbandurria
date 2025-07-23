
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: desplazamiento suave para enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

cons

const world = "Mundo";
let msg = 'Hola';
console.log(`ya va : ${msg + " " + world}`);