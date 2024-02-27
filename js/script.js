function toggleMenu() {
    var navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const imagenes = document.querySelectorAll(".imagen");

    function mostrarImagen(index) {
        imagenes.forEach((imagen, i) => {
            if (i === index) {
                imagen.classList.add("active");
            } else {
                imagen.classList.remove("active");
            }
        });
    }

    function siguienteImagen() {
        currentIndex = (currentIndex + 1) % imagenes.length;
        mostrarImagen(currentIndex);
    }

    setInterval(siguienteImagen, 3000);

    if (!localStorage.getItem('cookiesAceptadas')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});

function aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}
