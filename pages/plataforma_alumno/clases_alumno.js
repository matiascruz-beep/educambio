import React from 'react'


export default function clases_alumno() {
  return (
    <main>
            
                <form class="form items-center flex flex-col mt-5" id="crearClaseForm"/>
                    <div class="flex">
                        <div class="mr-3">
                            <div class="flex flex-col mt-4">
                                <label class="text-white" for="materia">Materia:</label>
                                <input class="text-black w-[400px] h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="materia" name="materia" placeholder="ej: matemática" required/>
                            </div>
                            <div class="flex flex-col mt-4">
                                <label class="text-white" for="contenido">Contenido:</label>
                                <input placeholder="ej: Función cuadrática" class="text-black w-[400px] h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="contenido" name="contenido" required/>
                            </div>
                            <div class="flex flex-col mt-4">
                                <label class="text-white" for="fecha">Fecha:</label>
                                <input placeholder="dd/mm/aa" class="text-black w-[400px] h-[40px] rounded-[40px] pl-4 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="date" id="fecha" name="fecha" required/>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col mt-4">
                                <label class="text-white" for="horario">Horario:</label>
                                <input class="text-black w-[400px] h-[40px] rounded-[40px] pl-5 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="time" id="horario" name="horario" required/>
                            </div>
                            <div class="flex flex-col mt-4">
                                <label class="text-white" for="duracion">Duración:</label>
                                <select class="text-black w-[400px] h-[40px] rounded-[40px] pl-4 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="duracion" name="duracion" required>
                                    <option value="">Seleccione la duración </option>
                                    <option value="1 hora">1 hora</option>
                                    <option value="1.5 horas">1.5 horas</option>
                                    <option value="2 horas">2 horas</option>
                                    <option value="2.5 horas">2.5 horas</option>
                                    <option value="3 horas">3 horas</option>
                                    <option value="3.5 horas">3.5 horas</option>
                                    <option value="4 horas">4 horas</option>
                                    <option value="4.5 horas">4.5 horas</option>
                                    <option value="5 horas">5 horas</option>
                                </select>
                            </div>
                            <div class="flex flex-col mt-4">
                            <label class="text-white" for="meet">Meet:</label>
                            <input  placeholder="ej: https://meet.google.com/abc-def-fgh" class="text-black w-[400px] h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="meet" name="meet" required/>
                            </div>  
                        </div> 
                    </div>
                    <div class="flex justify-center w-[200px] h-[40px] rounded-3xl bg-[#0082D6] mt-5">
                        <button class="text-white w-[200px] h-[40px]" type="submit" id="crear">Crear Clase</button>
                    </div> 
                    
                
       
     
    </main>
  )
}
