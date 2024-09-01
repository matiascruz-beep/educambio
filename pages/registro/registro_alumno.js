import Register from "@/components/Register/Form"
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export default function() {
    return (
        <main>

        <div class="bg-gradient-to-r   from-[#003366] to-[#56AEFF] h-20 w-full relative">
    <div class="flex">
        <div class="flex text-center mt-4 ml-4">
            <div>
            <p class="text-white text-3xl tracking-[10px] font-bold uppercase">Edu</p>
            </div>
            <div>
            <p class="text-[#0063C7] text-3xl tracking-[10px] font-bold uppercase">Cambio</p>
            </div>
      </div>
    </div>
        </div>


    

    <div class="isolate px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-[#003366] to-[#06358d]">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Formulario de registro</h2>
        <p class="mt-2 text-lg leading-8 text-white">Completa los siguientes datos personales</p>
      </div>  

    <Register sect1="Nombre y Apellido/s" sect2="¿A qué escuela y año asistís?" sect3="Número telefónico (opcional)" sect4="Provincia" sect5="Documento" sect6="Localidad"/>

    </div>

    <div class="bg-[#0063C7] h-24 w-full relative">

  <div class="flex justify-between">
      <div class="ml-10 mt-8">
        <p class="text-white text-3xl tracking-[10px] font-bold uppercase">Educambio</p>
      </div>
      
      <div class="mt-10 mr-54 text-white">
        <a href="" class="m-10 ">Nosotros</a>
        <a href="" class="m-10">Nuestras clases</a>
        <a href="" class="m-10">Contacto</a>

      </div>


      <div class="mr-16 mt-6 w-44 h-12 shadow-2xl shadow-black flex justify-between">
      <div class="mt-4"><FaFacebook /></div>
      <div class="mt-4"><FaLinkedin /></div>
      <div class="mt-4"><FaYoutube /></div>
      <div class="mt-4"><FaInstagram /></div>
      </div>



  </div>

</div>





    </main>

    )
}