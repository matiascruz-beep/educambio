import Welcome from "@/components/Platform/Welcome";
import Navegation from "@/components/Platform/Navegation"

export default function Platform () {
    return (
        <main class="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF] pb-[6.7rem]">
        
        <div>
            <Navegation user="Juan"/>
        </div>

        <div>
        
        <Welcome name="Juan"/>

        </div>
        
    </main>
    )
}