import React from 'react'

export default function Perfil ({image, name, prop}) {
    return (
        <div className="foto flex flex-col pr-3 ml-20 rounded-[100px] bg-custom-focus w-[400px] h-[380px] justify-center items-center shadow-[20px_20px_20px_rgba(0,0,0,0.5)]">
        <img src={image} className="rounded-full object-cover w-[220px] h-[220px]"/>
        <p className="text-white font-poppins text-[18px] md:text-[20px] mt-5">{name}</p>
        <p className="text-white font-poppins text-[13px] md:text-[15px] mt-3">{prop}</p>
</div>

    )
}