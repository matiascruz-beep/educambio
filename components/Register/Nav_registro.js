import React from 'react'

export default function Nav_registro ({}) {
    return (
        <div className="bg-gradient-to-r from-[#56AEFF] to-[#003366] p-5 h-20 w-full relative flex items-center justify-between">
            <div className="flex items-center">
                <ul>
                <li className="p-4">
                    <a className="hover:text-gray-400 no-underline text-white font-poppins font-normal md:text-xl" href="#">
                    Volver
                    </a>
                </li>
                </ul>
            </div>
            <div>
                <a className="no-underline font-poppins text-[18px] md:text-[31px] text-white transition duration-300 hover:text-[#004A9F]" href="#">
                EDUCAMBIO
                </a>
            </div>
        </div>
        
    )
}