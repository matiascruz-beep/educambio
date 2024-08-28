import React from 'react'

export default function Soporte ({}) {
    retun (
<div>

        <div class="mx-auto msj-bienvenida w-[900px] h-[265px] bg-custom-bg rounded-[30px] my-12 flex text-center items-center justify-center shadow-[10px_10px_20px_rgba(0,0,0,0.5)]">
        <div class="robotito">
            <img src="./assets/img/Robotito.png" alt=""/>
            </div>
        <div class="">
        <h1 class="text-white m-2.5 font-poppins text-3xl font-bold">¿Tenes alguna duda?</h1>
        <p class="text-white m-2.5 text-left leading-5 font-poppins">En este apartado podrás contactarte con el soporte, ¡Adelante!</p>
        </div>
    </div>  
      <div class="crearclase mx-auto  bg-blue-400 bg-opacity-50 w-[950px] h-[550px] rounded-[6rem] text-center p-10 flex items-center justify-center shadow-[30px_30px_30px_rgba(0,0,0,0.5)]">
        <form class="w-full px-4">
            <div class="mb-4 flex flex-row pb-6">
                <label for="subject" class="text-white p-4 text-xl">Asunto</label>
                <input type="text" id="subject" class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Consulta sobre límites de cupo"/>
            </div>
            <div class="mb-4 flex flex-row">
                <label for="message" class="text-white text-xl p-4">Mensaje</label>
                <textarea id="message" class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows="5" placeholder="Hola, quería preguntar sobre la extención de cupos..."></textarea>
            </div>
            <div class="flex items-center justify-center">
              <button type="submit" class="text-white text-lg mt-16 py-4 px-6 bg-boton-iniciar  w-[200px] h-[40px] rounded-3xl flex justify-center items-center">Enviar</button>
            </div>
        </form> 
    </div>
</div>
    )
}