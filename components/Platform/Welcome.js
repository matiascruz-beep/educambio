import React, { useEffect, useState } from 'react';

export default function Welcome({name}) {
    const [clases, setClases] = useState([]);

    useEffect(() => {
        const storedClases = JSON.parse(localStorage.getItem('clases')) || [];
        setClases(storedClases);
    }, []); 

   
    const handleDelete = (index) => {
        const updatedClases = clases.filter((_, i) => i !== index);
        setClases(updatedClases);
        localStorage.setItem('clases', JSON.stringify(updatedClases));
    };

    return (
        <div className="grid-flow-col grid-cols-2">

            <div className="bg-[#0063C7] bg-opacity-50 mx-auto msj-bienvenida w-[90%] max-w-[900px] h-auto bg-custom-bg rounded-[30px] my-12 flex flex-col md:flex-row text-center  items-center justify-center shadow-[10px_10px_20px_rgba(0,0,0,0.5)] py-14">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-white text-2xl md:text-3xl font-bold mb-2">¡Hola! Bienvenidx {name}</h1>
                    <p className="text-white text-sm md:text-base leading-5 font-poppins">
                    En este apartado, podrás ver las clases en las que te encuentras inscripto.
                    </p>
                </div>
                <div className="robotito mb-4 md:mb-0 md:mr-4 flex justify-center md:justify-start">
                    <img 
                    src="/images/robotito.png" 
                    alt="Robotito" 
                    className="w-[65px] h-[65px] md:w-[90px] md:h-[90px] object-contain"
                    />
                </div>
                </div>

            <div className="rounded-[80px] w-[15in] ml-[3in] mt-20 h-[5in]">
                <table className="mt-16 w-full text-white border-separate border-spacing-y-4" id="clasesTabla">
                    <thead className="bg-[#0063C7]">
                        <tr>
                            <th className="rounded-tl-[40px] text-center px-2.5 h-[95px] uppercase">Materia</th>
                            <th className="text-center px-2.5 h-[95px] uppercase">Contenido</th>
                            <th className="text-center px-2.5 h-[95px] uppercase">Fecha</th>
                            <th className="text-center px-2.5 h-[95px] uppercase">Horario</th>
                            <th className="text-center px-2.5 h-[95px] uppercase">Duración</th>
                            <th className="rounded-tr-[40px] text-center px-2.5 h-[95px] uppercase">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
    {clases.map((clase, index) => (
        <tr key={index} className="text-center">
            <td className="px-4 py-2">{clase.materia}</td>
            <td className="px-4 py-2">{clase.contenido}</td>
            <td className="px-4 py-2">{clase.fecha}</td>
            <td className="px-4 py-2">{clase.horario}</td>
            <td className="px-4 py-2">{clase.duracion}</td>
            <td className="px-4 py-2">
                <div className="flex justify-center space-x-4">
                    
                    <a href={clase.meet} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                        Iniciar
                    </a>
                    
                    <button onClick={() => handleDelete(index)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg">
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    ))}
</tbody>
                </table>
            </div>
        </div>
    );
}
