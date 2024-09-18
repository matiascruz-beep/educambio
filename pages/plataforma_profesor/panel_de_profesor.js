import Welcome from "@/components/Platform/Welcome";
import Navegation from "@/components/Platform/Navegation"

export default function () {
    return (
        <main className="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF] pb-[6.7rem]">
        
        <div>
            <Navegation user="Ramiro" name="Ramiro Ramirez" title="Profesor de Matemática" link1="/plataforma_profesor/perfil_profesor" link2="/plataforma_profesor/clases_profesor" link3="/plataforma_profesor/soporte_profesor"/>
        </div>

        <div>
        
        <Welcome name="Ramiro"/>

        </div>
        
    </main>
    )
}