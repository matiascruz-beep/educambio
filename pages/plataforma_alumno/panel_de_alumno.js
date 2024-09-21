import Welcome from "@/components/Platform/Welcome";
import Navegation from "@/components/Platform/Navegation"

export default function Platform () {
    return (
        <main class="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF] pb-[6.7rem]">
        
        <div>
        
        <Navegation user="Ramiro" name="Juan Rodriguez" title="Alumno 6to E.S.B" link1="/plataforma_alumno/panel_de_alumno" link2="/plataforma_alumno/clases_alumno" link3="/plataforma_alumno/soporte_alumno" link4="/plataforma_alumno/calendario"/>
       
        </div>

        <div>
        
        <Welcome name="Juan"/>

        </div>
        
    </main>
    )
}