import Navegation from "@/components/Platform/Navegation"
import Soporte from "@/components/Platform/Soporte"

export default function() {
    return (
        <main className="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF] pb-[6.7rem]">
        
        <div>
            <Navegation user="Juan" name="Juan Rodriguez" title="Alumno 6to E.S.B"/>
        </div>

        <div>
        
        <Soporte />

        </div>
        
    </main>
    )
}