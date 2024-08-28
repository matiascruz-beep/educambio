import Welcome from "@/components/Platform/Welcome";
import Image from "next/image";
import Link from "next/link";

export default function Platform () {
    return (
    <main>
        <div>
                <div class="bg-[#0063C7] #355ea5 text-white p-5 font-poppins flex justify-between items-center">
                    <h1 class="font-semibold text-3xl tracking-widest">EDU<span class="text-blue-400">CAMBIO</span></h1>
                    <div class="pt-0 pr-10 relative flex items-center">
                        <div class="mr-2" id="userIcon">
                            //* Imagen de perfil de usuario *//       
                            <div id="userMenu" class="bg-white rounded-2xl p-4 text-clip opacity-0 absolute top-full right-0 mt-2 w-36 z-10 hidden">
                                <a class="text-black w-full hover:bg-gray-200" href="#" id="perfil">Perfil</a>
                                <p class="text-black">Cerrar sesión</p>
                            </div>
                            
                        </div>
                        <div>
                            <p class="text-white">Nombre usuario</p>
                        </div>
                    </div>
                </div>
        </div>


        <div class="bg-[#071320] fixed min-h-full w-28 group hover:w-60 transition-all duration-150">
                <div class="flex-row justify-center">

                
                <div class="w-[150px] group-hover:opacity-100 transition duration-150 delay-[45ms] bg-custom-gradient text-white p-5">
                    <div class="flex flex-col items-center group-hover:opacity-100 transition duration-150 delay-[45ms]">
                        <img src="./assets/img/student3.jpg" alt="Profile Picture" class="profile-pic  rounded-full object-cover w-[100px] h-[100px]"/>
                        <div class="ml-2.5 opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms] p-5">
                        <h2 class="text-center font-poppins text-2xl font-bold p-2">Elsa Capuntas</h2>
                        <p class="text-center  font-poppins ">Profesora</p>
                        </div>
                        
                    </div>
                    </div>
                    
                    
                    <div class="flex pt-10">   
                        <img src="images/icon _home_.png" class="pl-6 w-18"/>
                        <p class="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Inicio</p>
                    </div>
    
                    <div class="flex pt-10">
                        <img src="images/icon _Edit.png" class="pl-8"/>
                        <Link href="/plataforma_alumno/clases_alumno" class="text-white pl-4 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-75 delay-[45ms] whitespace-nowrap">Anotarse a clase</Link>
                    </div>
    
                    <div class="flex pt-10">
                        <img src="images/icon_comment.png" class="pl-8 w-18"/>
                        <p class="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Soporte</p>
                    </div>
    
                    <div class="flex pt-10">
                        <img src="images/icon _calendar.png" class="pl-8 w-18"/>
                        <p class="text-white pl-5 pt-2 text-clip opacity-0 group-hover:opacity-100 transition duration-150 delay-[45ms]">Calendario</p>
                    </div>
    
                </div> 
            </div>    

        <div class="">
        
        <Welcome name="alan"/>

        </div>
        
    </main>
    );
}