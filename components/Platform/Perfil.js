import React from 'react'

export default function Perfil ({}) {
    return (
        <div className="foto flex flex-col pr-3 rounded-[100px] bg-custom-focus w-[530px] h-[510px] justify-center items-center shadow-[20px_20px_20px_rgba(0,0,0,0.5)]">
        <img className="rounded-full object-cover w-[300px] h-[300px]" src="/images/student1.jpg" alt="Estudiante" />
        <p className="text-white font-poppins text-[20px] mt-5">Juan</p>
        <p className="text-white font-poppins text-[15px] mt-3">Estudiante</p>
        </div>
    )
}