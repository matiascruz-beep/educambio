import React from 'react'

export default function Soporte ({}) {
    retun (
<div>

        <div className="mx-auto msj-bienvenida w-[900px] h-[265px] bg-custom-bg rounded-[30px] my-12 flex text-center items-center justify-center shadow-[10px_10px_20px_rgba(0,0,0,0.5)]">
        <div className="robotito">
            <img src="./assets/img/Robotito.png" alt=""/>
            </div>
        <div className="">
        <h1 className="text-white m-2.5 font-poppins text-3xl font-bold">¿Tenes alguna duda?</h1>
        <p className="text-white m-2.5 text-left leading-5 font-poppins">En este apartado podrás contactarte con el soporte, ¡Adelante!</p>
        </div>
    </div>  
      <div className="crearclase mx-auto  bg-blue-400 bg-opacity-50 w-[950px] h-[550px] rounded-[6rem] text-center p-10 flex items-center justify-center shadow-[30px_30px_30px_rgba(0,0,0,0.5)]">
        <form className="w-full px-4">
            <div className="mb-4 flex flex-row pb-6">
                <label for="subject" className="text-white p-4 text-xl">Asunto</label>
                <input type="text" id="subject" className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Consulta sobre límites de cupo"/>
            </div>
            <div className="mb-4 flex flex-row">
                <label for="message" className="text-white text-xl p-4">Mensaje</label>
                <textarea id="message" className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows="5" placeholder="Hola, quería preguntar sobre la extención de cupos..."></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="text-white text-lg mt-16 py-4 px-6 bg-boton-iniciar  w-[200px] h-[40px] rounded-3xl flex justify-center items-center">Enviar</button>
            </div>
        </form> 
    </div>
</div>
    )
}