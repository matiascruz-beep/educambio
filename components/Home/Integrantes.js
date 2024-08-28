import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Integrantes({name, prof, state, descripcion, cardimage, link}) {
    return (
        <div class="max-w-lg rounded-lg overflow-hidden shadow-md bg-white bg-opacity-75 hover:scale-110 hover:shadow-[#003366] transition duration-150">
        <div class="px-6 py-4">
            <div class="text-center">
                <img src={cardimage} class="w-36 h-36 rounded-full mx-auto"/>
                <h4 class="text-xl font-semibold mt-4">{name}</h4>
                <h6 class="text-blue-500">{prof}</h6>
                <p class="text-gray-700">{state}</p>
            </div>
            <div class="mt-4 flex justify-center">
                <a href={link} target="_blank"
                    class="text-blue-500 hover:text-blue-700 mx-2 text-2xl"><FaLinkedin /></a>
                <a href={link} target="_blank"
                    class="text-blue-500 hover:text-blue-700 mx-2 text-2xl"><FaGithub /></a>
                <a href={link}
                    class="text-blue-500 hover:text-blue-700 mx-2 text-2xl"><FaEnvelope /></a>
            </div>
        </div>
    </div>   
    )
}   
   
   
    



