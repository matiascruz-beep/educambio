import Welcome from "@/components/Platform/Welcome";
import Navegation from "@/components/Platform/Navegation"

export default function () {
    return (
        <main class="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF] pb-[6.7rem]">
        
        <div>
            <Navegation user="Ramiro" name="Ramiro Ramirez" title="Profesor de Matemática"/>
        </div>

        <div>
        
        <Welcome name="Ramiro"/>

        </div>
        
    </main>
    )
}