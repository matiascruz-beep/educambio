import React from "react";
import { FaHome, FaFileSignature, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


export default function Navegation ({user, name, title}) {
    return (
        <div>
                <div>
                    <div class="bg-[#0063C7] #355ea5 text-white p-5 font-poppins flex justify-between items-center">
                        <h1 class="font-semibold text-3xl tracking-widest">EDU<span class="text-blue-400">CAMBIO</span></h1>
                             <div class="pt-0 pr-10 relative flex items-center">
                                 <div class="mr-2" id="userIcon">
                                        <FaRegUserCircle className="w-8 h-8 ml-1"/>      
                                      <div id="userMenu" class="bg-white rounded-2xl p-4 text-clip opacity-0 absolute top-full right-0 mt-2 w-36 z-10 hidden">
                                           <a class="text-black w-full hover:bg-gray-200" href="#" id="perfil">Perfil</a>
                                            <p class="text-black">Cerrar sesión</p>
                                     </div>
                                                        
                                 </div>
                                      <div>
                                         <p class="text-white">{user}</p>
                                     </div>
                                </div>
                              </div>
                     </div>


                     <div class="bg-[#1b2f85] fixed min-h-full w-28 group hover:w-60 transition-all duration-150">
                <div class="flex-row justify-center">

                    <div>
                    
                    <div>
                        <img src="/images/student1.jpg" className="rounded-full mt-12"/>
                        <h2 className="text-white ml-12 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">{name}</h2>
                        <p className="text-white ml-6 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">{title}</p>
                    </div>


                    </div>

                    <div class="flex pt-10">
                        <div>   
                        <FaHome className="text-white w-10 h-10 ml-1" />
                        </div>
                        <p class="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Inicio</p>
                    </div>
    
                    <div class="flex pt-10">
                        <div>
                        <FaFileSignature className="text-white w-10 h-10 ml-2" />
                        </div>
                        <p class="text-white pl-4 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-75 delay-[45ms] whitespace-nowrap">Anotarse a clase</p>
                    </div>
    
                    <div class="flex pt-10">
                        <div>
                        <IoChatbubbleEllipsesOutline className="text-white w-10 h-10 ml-2" />
                        </div>
                        <p class="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Soporte</p>
                    </div>
    
                    <div class="flex pt-10">
                        <div>
                        <FaCalendarAlt className="text-white w-10 h-10 ml-2"/>
                        </div>
                        <p class="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Calendario</p>
                    </div>
    
                </div> 
            </div>    
        </div>
        
    )
}