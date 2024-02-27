document.addEventListener("DOMContentLoaded", function () {
    const titulosProyecto = document.querySelectorAll(".tituloProyecto");

    titulosProyecto.forEach(titulo => {
        titulo.addEventListener("click", function () {
            const carouselProyecto = titulo.nextElementSibling;
            carouselProyecto.classList.toggle("mostrar");
            if (carouselProyecto.classList.contains("mostrar")) {
                iniciarCarrusel(carouselProyecto);
            } else {
                detenerCarrusel(carouselProyecto);
            }
        });
    });

    function iniciarCarrusel(carousel) {
        const imagenes = carousel.querySelectorAll(".imagen");
        let index = 0;

        const intervalo = setInterval(() => {
            imagenes[index].classList.remove("active");
            index = (index + 1) % imagenes.length;
            imagenes[index].classList.add("active");
        }, 3000);

        carousel.dataset.intervalo = intervalo; 
    }

    function detenerCarrusel(carousel) {
        const intervalo = carousel.dataset.intervalo;
        clearInterval(intervalo); 
    }
});

function toggleMenu() {
    var navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('active');
}
