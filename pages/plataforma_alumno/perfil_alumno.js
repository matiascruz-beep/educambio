import Navegation from "@/components/Platform/Navegation"
import Perfil from "@/components/Platform/Perfil"
import Formulario_perfil from "@/components/Platform/Formulario_perfil"

export default function Platform () {
    return (
        <main className="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF]  h-screen w-full">
        
        <div className="w-full">
            <Navegation user="Juan" />
        </div>

        <div className="flex flex-col h-screen mt-[-80px] md:flex-row md:justify-center md:items-center">
        
        <div className="flex justify-center items-center mb-4 md:mb-0">
        <Perfil name="Juan" prop="Estudiante" />
        </div>

        <div className="flex justify-center items-center md:ml-8">
        <Formulario_perfil />
        </div>
        </div>

        </main>

    )
}