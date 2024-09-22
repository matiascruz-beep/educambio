import React from 'react'

export default function Soporte() {
    return (
        <div>

            <div className="bg-[#0063C7] bg-opacity-50 mx-auto msj-bienvenida w-[90%] max-w-[900px] h-auto bg-custom-bg rounded-[30px] my-12 flex flex-col md:flex-row text-center  items-center justify-center shadow-[10px_10px_20px_rgba(0,0,0,0.5)] p-5">
                <div className="robotito mb-4 md:mb-0 md:mr-4 flex justify-center md:justify-start">
                    <img 
                    src="/images/robotito.png" 
                    alt="Robotito" 
                    className="w-[65px] h-[65px] md:w-[90px] md:h-[90px] object-contain"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-white text-2xl md:text-3xl font-bold mb-2">¿Tenes alguna duda?</h1>
                    <p className="text-white text-sm md:text-base leading-5 font-poppins">
                    En este apartado podrás contactarte con el soporte, ¡Adelante!
                    </p>
                </div>
                </div>
    
            <div className="crearclase mx-auto bg-[#0063C7] bg-opacity-50 w-[90%] max-w-[950px] h-auto md:h-[550px] rounded-[2rem] md:rounded-[6rem] text-center p-6 md:p-10 flex items-center justify-center shadow-[30px_30px_30px_rgba(0,0,0,0.5)]">
                <form className="w-full px-4">
                    <div className="mb-4 flex flex-col md:flex-row pb-6">
                    <label htmlFor="subject" className="text-white p-2 md:p-4 text-lg md:text-xl">
                        Asunto
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Consulta sobre límites de cupo"
                    />
                    </div>
        
                    <div className="mb-4 flex flex-col md:flex-row">
                    <label htmlFor="message" className="text-white p-2 md:p-4 text-lg md:text-xl">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows="5"
                        placeholder="Hola, quería preguntar sobre la extención de cupos..."
                    ></textarea>
                    </div>
        
                    <div className="flex items-center justify-center">

                    <button
                        type="submit"
                        className="text-white text-lg mt-4 md:mt-16 py-2 px-6 md:py-4 md:px-6 bg-[#0082D6] w-[150px] md:w-[200px] h-[40px] rounded-3xl flex justify-center items-center shadow-[10px_10px_10px_rgba(0,0,0,0.4)]"
                    >
                    Enviar
                    </button>

                    </div>
                </form>
            </div>
        </div>
    );
}