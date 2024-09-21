import Link from "next/link";
import React from "react";
import Profile from "@/components/Platform/Profile"
import { FaHome, FaFileSignature, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";





export default function Navegation ({user, name, title, link1, link2, link3, link4}) {
    return (
        <div>
                <div>
                    <div className="bg-[#0063C7] #355ea5 text-white p-5 font-poppins flex justify-between items-center">
                        <h1 className="font-semibold text-3xl tracking-widest">EDU<span className="text-blue-400">CAMBIO</span></h1>
                             <div className="pt-0 pr-10 relative flex items-center">
                                 <div className="mr-2" id="userIcon">
                                        <FaRegUserCircle className="w-8 h-8 ml-1"/>      
                                      <div id="userMenu" className="bg-white rounded-2xl p-4 text-clip opacity-0 absolute top-full right-0 mt-2 w-36 z-10 hidden">
                                           <Link className="text-black w-full hover:bg-gray-200" href="/plataforma_profesor/perfil_profesor">Perfil</Link>
                                            <p className="text-black">Cerrar sesión</p>
                                     </div>
                                                        
                                 </div>
                                      <div>
                                         <p className="text-white">{user}</p>
                                     </div>
                                </div>
                              </div>
                     </div>


                     <div className="bg-[#1b2f85] fixed min-h-full w-28 group hover:w-60 transition-all duration-150">
                <div className="flex-row justify-center">

                    <div>
                    
                    <div>
                        <img src="/images/student1.jpg" className="rounded-full w-20 ml-4 mt-20 text-clip group-hover:opacity-100 group-hover:w-40 group-hover:ml-[2.5rem] transition duration-150 delay-[5ms] "/>
                        <h2 className="text-white text-center pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">{name}</h2>
                        <p className="text-white text-center pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">{title}</p>
                    </div>


                    </div>

                    <div className="flex pt-10">
                        <div>   
                        <FaHome className="text-white w-10 h-10 ml-[1.6rem] transition duration-150 delay-[45ms]" />
                        </div>
                        <Link href={link1 || "#"} className="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Inicio</Link>
                    </div>
    
                    <div className="flex pt-10">
                        <div>
                        <FaFileSignature className="text-white w-10 h-10 ml-[1.9rem] transition duration-150 delay-[45ms]" />
                        </div>
                        <Link href={link2 || "#"} className="text-white pl-4 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-75 delay-[45ms] whitespace-nowrap">Anotarse a clase</Link>
                    </div>
    
                    <div className="flex pt-10">
                        <div>
                        <IoChatbubbleEllipsesOutline className="text-white w-10 h-10 ml-[1.6rem] transition duration-150 delay-[45ms]" />
                        </div>
                        <Link href={link3 || "#"} className="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Soporte</Link>
                    </div>
    
                    <div className="flex pt-10">
                        <div>
                        <FaCalendarAlt className="text-white w-10 h-10 ml-[1.6rem] transition duration-150 delay-[45ms]"/>
                        </div>
                        <Link href={link4 || "#"} className="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Calendario</Link>
                    </div>
    
                </div> 
            </div>    
            <Profile />
        </div>
        
    )
}

