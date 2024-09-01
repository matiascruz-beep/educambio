import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Integrantes({name, prof, state, descripcion, cardimage, link}) {
    return (
        <div className="max-w-lg rounded-lg overflow-hidden shadow-md bg-white bg-opacity-75 hover:scale-110 hover:shadow-[#003366] transition duration-150">
        <div className="px-6 py-4">
            <div className="text-center">
                <img src={cardimage} className="w-36 h-36 rounded-full mx-auto"/>
                <h4 className="text-xl font-semibold mt-4">{name}</h4>
                <h6 className="text-blue-500">{prof}</h6>
                <p className="text-gray-700">{state}</p>
            </div>
            <div className="mt-4 flex justify-center">
                <a href={link} target="_blank"
                    className="text-blue-500 hover:text-blue-700 mx-2 text-2xl"><FaLinkedin /></a>
                <a href={link} target="_blank"
                    className="text-blue-500 hover:text-blue-700 mx-2 text-2xl"><FaGithub /></a>
                <a href={link}
                    className="text-blue-500 hover:text-blue-700 mx-2 text-2xl"><FaEnvelope /></a>
            </div>
        </div>
    </div>   
    )
}   
   
   
    



