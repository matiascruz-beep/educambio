import Navegation from "@/components/Platform/Navegation"
import Soporte from "@/components/Platform/Soporte"

export default function() {
    return (
        <main className="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF] pb-[6.7rem]">
        
        <div>
        <Navegation user="Ramiro" name="Ramiro Ramirez" title="Profesor de Matemática" link1="/plataforma_profesor/panel_de_profesor" link2="/plataforma_profesor/clases_profesor" link3="/plataforma_profesor/soporte_profesor" link4="/plataforma_profesor/calendario"/>
        </div>

        <div>
        
        <Soporte />

        </div>
        
    </main>
    )
}