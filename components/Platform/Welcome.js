import React from 'react'

export default function Welcome({name, tematic, content, date, hour, student, image}) {
    return (
    
       <div className="grid-flow-col grid-cols-2">
            
            
            <div class="bg-[#0063C7] bg-opacity-50 rounded-[80px] w-[6in] ml-[7in] mt-6 h-[2in] text-center">
                <h1 className="font-bold">¡Hola! Bienvenido {name}</h1>
                <p className="font-semibold">En este apartado, podas ver las clases en las que te encuentras inscripto <br/> ¡Empecemos a aprender!</p>
                <img src="/images/robotito.png" className="flex w-20 ml-20"/>
            </div>
    

            <div class="rounded-[80px] w-[15in] ml-[3in] mt-20 h-[5in]">
            <table class="mt-16 w-full text-white border-separate border-spacing-y-4">
            <thead class="bg-[#0063C7] ">
                <tr>
                    <th class="text-center px-2.5 h-[95px] uppercase rounded-tl-[20px] rounded-bl-[20px]">Materia</th>
                    <th class="text-center px-2.5 h-[95px] uppercase">Contenido</th>
                    <th class="text-center px-2.5 h-[95px] uppercase">Fecha</th>
                    <th class="text-center px-2.5 h-[95px] uppercase">Horario</th>
                    <th class="text-center px-2.5 h-[95px] uppercase">Duración</th>
                    <th class="text-center px-2.5 h-[95px] uppercase">Estudiantes</th>
                    <th class="text-center px-2.5 h-[95px] uppercase rounded-tr-[20px] rounded-br-[20px]">Acciones</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>

            </div>
            
        </div>

    )
}
