import React from 'react'

export default function Create ({}) {
    return ( 

        <div>

        <div className="flex align-middle justify-center font-poppins">
            <p className="text-[2.9rem] text-white mt-16">
                Crear clase
            </p>
        </div>


            <div className="mx-auto msj-bienvenida w-[8in] h-[6in] rounded-[30px] mt-[4.15rem] flex text-center items-center justify-center shadow-[10px_10px_20px_rgba(0,0,0,0.5)]">
                
      

                        <div className="grid grid-cols-1 align-middle">
                           

                          <form id=""/>
                              <div className="">
                                  <div className="mr-10">
                                      <div className="flex flex-col mt-4">
                                          <label className="text-white" for="materia">Materia:</label>
                                          <input className="text-black w-[400px] h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="materia" name="materia" placeholder="ej: matemática" required/>
                                      </div>
                                      <div className="flex flex-col mt-4">
                                          <label className="text-white" for="contenido">Contenido:</label>
                                          <input placeholder="ej: Función cuadrática" className="text-black w-[400px] h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="contenido" name="contenido" required/>
                                      </div>
                                      <div className="flex flex-col mt-4">
                                          <label className="text-white" for="fecha">Fecha:</label>
                                          <input placeholder="dd/mm/aa" className="text-black w-[400px] h-[40px] rounded-[40px] pl-4 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="date" id="fecha" name="fecha" required/>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="flex flex-col mt-4">
                                          <label className="text-white" for="horario">Horario:</label>
                                          <input className="text-black w-[400px] h-[40px] rounded-[40px] pl-5 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="time" id="horario" name="horario" required/>
                                      </div>
                                      <div className="flex flex-col mt-4">
                                          <label className="text-white" for="duracion">Duración:</label>
                                          <select className="text-black w-[400px] h-[40px] rounded-[40px] pl-4 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="duracion" name="duracion" required>
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
                                      <div className="flex flex-col mt-4">
                                      <label className="text-white" for="meet">Meet:</label>
                                      <input  placeholder="ej: https://meet.google.com/abc-def-fgh" className="text-black w-[400px] h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="meet" name="meet" required/>
                                      </div>  
                                  </div> 
                              </div>
                              <div className="w-[200px] h-[40px] rounded-3xl bg-[#0082D6] ml-28 mt-6">
                                  <button className="text-white w-[200px] h-[40px]" type="submit" id="crear">Crear Clase</button>
                              </div> 
                </div>
                </div>
         </div>
    )
}