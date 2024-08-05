document.getElementById('crearClaseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Hola recibi")
    const materia = document.getElementById('materia').value;
    const contenido = document.getElementById('contenido').value;
    const fecha = document.getElementById('fecha').value;
    const horario = document.getElementById('horario').value;
    const duracion = document.getElementById('duracion').value;
    const meet = document.getElementById('meet').value;

    console.log('Materia:', materia);
    console.log('Contenido:', contenido);
    console.log('Fecha:', fecha);
    console.log('Horario:', horario);
    console.log('Duración:', duracion);
    console.log('Meet:', meet);

    // Crear un nuevo objeto para la clase
    const clase = {
        materia: materia,
        contenido: contenido,
        fecha: fecha,
        horario: horario,
        duracion: duracion,
        meet: meet
        
    };
    // Obtener las clases almacenadas en localStorage
    let clases = JSON.parse(localStorage.getItem('clases')) || [];

    // Agregar la nueva clase al array de clases
    clases.push(clase);

    // Guardar el array de clases actualizado en localStorage
    localStorage.setItem('clases', JSON.stringify(clases));

    // Cargar la vista de "inicio" dentro de la SPA
    loadPage('inicio.html');
});

function loadPage(page) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', page);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.querySelector('main').innerHTML = xhr.responseText;
            history.pushState({ template: xhr.responseText }, "", page);
            initPageJS(page); // Re-inicializar JS de la SPA
        }
    };
    xhr.send();
}


