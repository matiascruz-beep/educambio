import React from 'react';

export default function Create() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const clase = {
            materia: document.getElementById('materia').value,
            contenido: document.getElementById('contenido').value,
            fecha: document.getElementById('fecha').value,
            horario: document.getElementById('horario').value,
            duracion: document.getElementById('duracion').value,
            meet: document.getElementById('meet').value
        };

 
        const clases = JSON.parse(localStorage.getItem('clases')) || [];
        

        clases.push(clase);
        

        localStorage.setItem('clases', JSON.stringify(clases));


        document.getElementById('crearClaseForm').reset();
    };

    return (
        <div className="align-middle justify-center font-poppins grid">
            <p className="text-[2.9rem] text-white mt-16 ml-60">Crear clase</p>
            <div className="mx-auto msj-bienvenida w-[8in] h-[6in] rounded-[30px] mt-[4.15rem] flex text-center items-center justify-center shadow-[10px_10px_20px_rgba(0,0,0,0.5)]">
                <div className="grid grid-cols-1 align-middle">
                    <form id="crearClaseForm" onSubmit={handleSubmit}>
                        <div>
                            {}
                            <div className="flex flex-col mt-4">
                                <label className="text-white" htmlFor="materia">Materia:</label>
                                <input className="text-black w-[400px] h-[40px]" type="text" id="materia" placeholder="ej: matemática" required />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="text-white" htmlFor="contenido">Contenido:</label>
                                <input className="text-black w-[400px] h-[40px]" type="text" id="contenido" placeholder="ej: Función cuadrática" required />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="text-white" htmlFor="fecha">Fecha:</label>
                                <input className="text-black w-[400px] h-[40px]" type="date" id="fecha" required />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="text-white" htmlFor="horario">Horario:</label>
                                <input className="text-black w-[400px] h-[40px]" type="time" id="horario" required />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="text-white" htmlFor="duracion">Duración:</label>
                                <select className="text-black w-[400px] h-[40px]" id="duracion" required>
                                    <option value="">Seleccione la duración</option>
                                    <option value="1 hora">1 hora</option>
                                    <option value="2 horas">2 horas</option>
                                </select>
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="text-white" htmlFor="meet">Meet:</label>
                                <input className="text-black w-[400px] h-[40px]" type="text" id="meet" placeholder="https://meet.google.com/abc-def-fgh" required />
                            </div>
                        </div>
                        <div className="w-[200px] h-[40px] rounded-3xl bg-[#0082D6] ml-28 mt-6">
                            <button className="text-white w-[200px] h-[40px]" type="submit">Crear Clase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}