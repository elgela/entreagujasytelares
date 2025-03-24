var jq = jQuery.noConflict();
jq('#miElemento').click(function() {
    console.log('Sin conflictos aquí');
});

// Seleccionar las imágenes con la clase "image-display"
const images = document.querySelectorAll('#image-display');

// Función para activar el modo pantalla completa
function goFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { // Compatibilidad con Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Compatibilidad con IE/Edge
        element.msRequestFullscreen();
    }
}
// Agregar evento de clic a las imágenes
images.forEach(img => {
    img.addEventListener('click', (e) => {
        // e.stopPropagation(); // Evita que el clic en la imagen cierre el fullscreen
        goFullScreen(img); // Poner la imagen en pantalla completa
    });
});

// Función para salir de pantalla completa
function exitFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else if (document.webkitFullscreenElement) { // Compatibilidad con Safari
        document.webkitExitFullscreen();
    } else if (document.msFullscreenElement) { // Compatibilidad con IE/Edge
        document.msExitFullscreen();
    }
}

document.addEventListener('click', () => {
    exitFullScreen();
});

////////////obtener la fecha actual/////////////
