import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer_registro ({}) {
    return (
    <div className="bg-gradient-to-r from-[#56AEFF] to-[#003366] p-8 md:grid md:grid-cols-3 md:gap-4 flex flex-col items-center">

        <div>
            <a className="no-underline text-[19px] md:text-[25px] text-white transition duration-300 hover:text-[#004A9F]" href="#">
            EDUCAMBIO
            </a>
        </div>


        <div className="flex items-center justify-center text-white">
            <ul className="flex flex-col md:flex-row list-none md:gap-8 text-center">
                <li className="md:p-4 hover:text-gray-400">
                <a className="no-underline text-inherit text-lg leading-7" href="#">
                Nosotros
                </a>
                </li>
                <li className="md:p-4 hover:text-gray-400">
                <a className="no-underline text-inherit text-lg leading-7" href="#">
                Nuestras clases
                </a>
                </li>
                <li className="md:p-4 hover:text-gray-400">
                <a className="no-underline text-inherit text-lg leading-7" href="#contacto">
                Contacto
                </a>
                </li>
            </ul>
        </div>


        <div className="text-white flex justify-center align-center">
            <div className="mt-4 px-4"><FaFacebook /></div>
            <div className="mt-4 px-4"><FaLinkedin /></div>
            <div className="mt-4 px-4"><FaYoutube /></div>
            <div className="mt-4 px-4"><FaInstagram /></div>
        </div>
    </div>
    )
}