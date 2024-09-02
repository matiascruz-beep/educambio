import Navegation from "@/components/Platform/Navegation"
import Perfil from "@/components/Platform/Perfil"
import Formulario_perfil from "@/components/Platform/Formulario_perfil"

export default function Platform () {
    return (
        <main class="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF] pb-[6.7rem] h-screen w-full">
        <div class="w-full">
            <Navegation user="Juan" />
        </div>

        <div class="flex justify-center items-center mt-8">
            
            <div>
            <Perfil />
            </div>
            
            <div className="flex items-center justify-center ml-8">
            <Formulario_perfil />
            </div>

        </div>
        </main>

    )
}