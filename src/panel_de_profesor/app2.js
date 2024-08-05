document.addEventListener('DOMContentLoaded', () => {
    initAppJS();
});

function initAppJS() {
    let links = document.querySelectorAll("nav a");
    let main = document.querySelector("main");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            let id = link.id;
            loadPage(id + ".html");
        });
    });

    // Cargar la página inicial si no se ha especificado ninguna ruta
    if (!location.pathname.endsWith('crear_clase.html') && !location.pathname.endsWith('inicio.html')) {
        loadPage('inicio.html');
    }
}

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

function initPageJS(page) {
    if (page === 'inicio.html') {
        /*--- nuevo codigo----*/
    const clasesTable = document.getElementById('clasesTabla');
    if (clasesTable) {
        const tbody = clasesTable.getElementsByTagName('tbody')[0];
        // Obtener las clases desde localStorage
        let clases = JSON.parse(localStorage.getItem('clases')) || [];

        
        // Iterar sobre las clases y agregarlas a la tabla
        clases.forEach((clase,index) => {
            let row = tbody.insertRow();
            // Crear celdas con clases de Tailwind CSS
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);

            // Agregar clases de Tailwind CSS a cada celda
            cell1.classList.add('bg-trfondo', 'border-gray-300', 'rounded-l-3xl','pt-8','pb-8','px-px','text-center');
            cell2.classList.add('bg-trfondo', 'border-gray-300','px-px','text-center');
            cell3.classList.add('bg-trfondo','text-center');
            cell4.classList.add('bg-trfondo', 'border-gray-300','px-px','text-center');
            cell5.classList.add('bg-trfondo', 'border-gray-300','px-px','text-center');
            cell6.classList.add('bg-trfondo', 'border-gray-300','px-px','text-center');
            cell7.classList.add('bg-trfondo', 'border-gray-300', 'rounded-r-3xl','px-px','text-center');

            cell1.innerText = clase.materia;
            cell2.innerText = clase.contenido;
            cell3.innerText = clase.fecha;
            cell4.innerText = clase.horario;
            cell5.innerText = clase.duracion;
            cell6.innerHTML = `<div class="flex justify-center">
            <img src="../assets/img/student1.jpg" alt="Student" class="w-10 h-10 rounded-full">
                <img src="../assets/img/student2.webp" alt="Student" class="w-10 h-10 rounded-full">
                <img src="../assets/img/student3.jpg" alt="Student" class="w-10 h-10 rounded-full">
                <img src="../assets/img/student4.webp" alt="Student" class="w-10 h-10 rounded-full">
                <img src="../assets/img/student5.jpg" alt="Student" class="w-10 h-10 rounded-full">
            </div>
                `;
            cell7.innerHTML = `
                <div class="flex space-x-2 justify-center">
                    <button class="bg-boton-iniciar text-white px-4 py-2 rounded-full w-[120px]">
                        <a href="${clase.meet}" target="_blank" class="link-estilo">Iniciar</a>
                    </button>
                    <button class="delete bg-boton-borrar text-white px-4 py-2 rounded-full w-[120px]" data-index="${index}">Borrar</button>
                    <button class="edit text-white px-4 py-2 rounded-full"><img src="../assets/icons/class_edit.png" alt=""></button>
                </div>
            `;

    // Obtener el botón "Borrar"
    const deleteButton = row.querySelector('.delete');

    // Agregar evento de clic al botón "Borrar"
    deleteButton.addEventListener('click', function() {
        // Obtener el índice del botón
        const index = this.getAttribute('data-index');

        // Mostrar modal de confirmación
        const confirmModal = document.getElementById('confirmModal');
        confirmModal.style.display = 'block';
        // Aplicar desenfoque al body
        const mainContent = document.getElementById('mainContent');
        mainContent.classList.add('blur');

        // Manejar confirmación al hacer clic en Confirmar
        const confirmButton = document.getElementById('confirmButton');
        confirmButton.addEventListener('click', function() {
            // borro la fila
            clases.splice(index, 1);
            localStorage.setItem('clases', JSON.stringify(clases));
            // Eliminar la fila de la tabla
            tbody.deleteRow(row.rowIndex - 1);

            // Ocultar modal después de confirmar
            confirmModal.style.display = 'none';
        });

        // Manejar cancelación al hacer clic en Cancelar
        const cancelButton = document.getElementById('cancelButton');
        cancelButton.addEventListener('click', function() {
            // Ocultar modal al cancelar
            confirmModal.style.display = 'none';
            mainContent.classList.remove('blur');
        });

        // Manejar cancelación al hacer clic en aceptar
        confirmButton.addEventListener('click', function() {
            // Ocultar modal al cancelar
            confirmModal.style.display = 'none';
            mainContent.classList.remove('blur');
        });
    });
     // Manejar cancelación al hacer clic en Cancelar
     const cancelButton = document.getElementById('cancelButton');
     cancelButton.addEventListener('click', function() {
         // Ocultar modal al cancelar
         confirmModal.style.display = 'none';
         document.body.classList.remove('blur');
     });


});
         /*--- nuevo codigo----*/

    }
} else if (page === 'crear_clase.html') {
    document.getElementById('crearClaseForm').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Hola recibi el submit")
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
}
}





window.addEventListener("popstate", (e) => {
    if (e.state && e.state.template) {
        document.querySelector('main').innerHTML = e.state.template;
        initPageJS(location.pathname.split('/').pop());
    } else {
        loadPage(location.pathname.split('/').pop());
    }
});
















/*window.addEventListener("hashchange", () => {
    console.log("cambio la url")
     //["" , "perfil"]
    let archivo = location.hash.split("#")[1] + ".html"
    console.log("archivo es: " + archivo)
    let xhr = ajax(archivo) 
        xhr.addEventListener("load",()=>{
            if(xhr.status == 200){
                main.innerHTML = xhr.response
            }

        })
}) 
        */