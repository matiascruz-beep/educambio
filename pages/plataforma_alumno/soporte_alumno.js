import Navegation from "@/components/Platform/Navegation"
import Soporte from "@/components/Platform/Soporte"

export default function() {
    return (
        <main className="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF] pb-[6.7rem]">
        
        <div>
        <Navegation user="Ramiro" name="Juan Rodriguez" title="Alumno 6to E.S.B" link1="/plataforma_alumno/panel_de_alumno" link2="/plataforma_alumno/clases_alumno" link3="/plataforma_alumno/soporte_alumno"/>        </div>

        <div>
        
        <Soporte />

        </div>
        
    </main>
    )
}