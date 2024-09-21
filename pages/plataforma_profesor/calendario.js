import React from "react";
import Navegation from "@/components/Platform/Navegation";
import Calendar from "@/components/Platform/Calendar";

export default function calendario () {
    return (

<main>

<Navegation user="Ramiro" name="Ramiro Ramirez" title="Profesor de Matemática" link1="/plataforma_profesor/panel_de_profesor" link2="/plataforma_profesor/clases_profesor" link3="/plataforma_profesor/soporte_profesor"/>

        <Calendar/>

</main>
    )
}