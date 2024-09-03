import React from "react"

export default function Notification ({status}) {
    return (
        <div className="top-0 left-0 right-0 bottom-0 m-auto">

            <div className="bg-[#5EAFF9] bg-opacity-50 absolute w-[8in] h-[6in] top-0 left-0 right-0 bottom-0 m-auto content-center rounded-[80px]">
                    <div>
                        <p className="text-center text-4xl">¡{status} con éxito!</p>
                        <img src="images/check_circle.png" className="m-auto"/>
                        <p className="text-center mt-10">Ve a "Inicio" para poder visualizarla</p>
                    </div>

                    <div className="flex justify-center mt-14">
                        <button className="rounded-[43px] w-[160px] h-[55px]  bg-[#003366] active:scale-75 transition duration-150 text-white uppercase font-bold">Ir al Inicio</button>
                    </div>
            </div>

    </div>
    )
}