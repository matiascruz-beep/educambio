import Navegation from "@/components/Platform/Navegation"
import Perfil from "@/components/Platform/Perfil"
import Formulario_perfil from "@/components/Platform/Formulario_perfil"

export default function Platform () {
    return (
        <main className="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF]  h-screen w-full">
        
        <div className="w-full">
        <Navegation user="Ramiro" name="Juan Rodriguez" title="Alumno 6to E.S.B" link1="/plataforma_alumno/panel_de_alumno" link2="/plataforma_alumno/clases_alumno" link3="/plataforma_alumno/soporte_alumno" link4="/plataforma_alumno/calendario"/>        
        </div>
        
        <div className="flex flex-col h-screen mt-[-80px] md:flex-row md:justify-center md:items-center">
        
        <div className="flex justify-center items-center mb-4 md:mb-0">
            <Perfil image ="/images/alumno.png" name="Juan" prop="Estudiante" />
        </div>

        <div className="flex justify-center items-center md:ml-8">
            <Formulario_perfil />
        </div>
        </div>

        </main>

    )
}