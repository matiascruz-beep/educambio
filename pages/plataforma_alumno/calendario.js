import React from "react";
import Navegation from "@/components/Platform/Navegation";
import Calendar from "@/components/Platform/Calendar";

export default function calendario () {
    return (

<main>

<Navegation user="Ramiro" name="Juan Rodriguez" title="Alumno 6to E.S.B" link1="/plataforma_alumno/panel_de_alumno" link2="/plataforma_alumno/clases_alumno" link3="/plataforma_alumno/soporte_alumno" link4="/plataforma_alumno/calendario"/>

        <Calendar/>

</main>
    )
}