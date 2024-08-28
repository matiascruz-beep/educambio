import Welcome from "@/components/Platform/Welcome";
import Image from "next/image";
import Link from "next/link";

export default function Platform () {
    return (
    <main>
        <div>
                <div claseName="bg-[#0063C7] #355ea5 text-white p-5 font-poppins flex justify-between items-center">
                    <h1 claseName="font-semibold text-3xl tracking-widest">EDU<span claseName="text-blue-400">CAMBIO</span></h1>
                    <div claseName="pt-0 pr-10 relative flex items-center">
                        <div claseName="mr-2" id="userIcon">
                            //* Imagen de perfil de usuario *//       
                            <div id="userMenu" claseName="bg-white rounded-2xl p-4 text-clip opacity-0 absolute top-full right-0 mt-2 w-36 z-10 hidden">
                                <a claseName="text-black w-full hover:bg-gray-200" href="#" id="perfil">Perfil</a>
                                <p claseName="text-black">Cerrar sesión</p>
                            </div>
                            
                        </div>
                        <div>
                            <p claseName="text-white">Nombre usuario</p>
                        </div>
                    </div>
                </div>
        </div>


        <div claseName="bg-[#071320] fixed min-h-full w-28 group hover:w-60 transition-all duration-150">
                <div claseName="flex-row justify-center">

                
                <div claseName="w-[150px] group-hover:opacity-100 transition duration-150 delay-[45ms] bg-custom-gradient text-white p-5">
                    <div claseName="flex flex-col items-center group-hover:opacity-100 transition duration-150 delay-[45ms]">
                        <img src="./assets/img/student3.jpg" alt="Profile Picture" claseName="profile-pic  rounded-full object-cover w-[100px] h-[100px]"/>
                        <div claseName="ml-2.5 opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms] p-5">
                        <h2 claseName="text-center font-poppins text-2xl font-bold p-2">Elsa Capuntas</h2>
                        <p claseName="text-center  font-poppins ">Profesora</p>
                        </div>
                        
                    </div>
                    </div>
                    
                    
                    <div claseName="flex pt-10">   
                        <img src="images/icon _home_.png" claseName="pl-6 w-18"/>
                        <p claseName="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Inicio</p>
                    </div>
    
                    <div claseName="flex pt-10">
                        <img src="images/icon _Edit.png" claseName="pl-8"/>
                        <Link href="/plataforma_alumno/clases_alumno" claseName="text-white pl-4 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-75 delay-[45ms] whitespace-nowrap">Anotarse a clase</Link>
                    </div>
    
                    <div claseName="flex pt-10">
                        <img src="images/icon_comment.png" claseName="pl-8 w-18"/>
                        <p claseName="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Soporte</p>
                    </div>
    
                    <div claseName="flex pt-10">
                        <img src="images/icon _calendar.png" claseName="pl-8 w-18"/>
                        <p claseName="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Calendario</p>
                    </div>
    
                </div> 
            </div>    

        <div claseName="">
        
        <Welcome name="alan"/>

        </div>
        
    </main>
    );
}