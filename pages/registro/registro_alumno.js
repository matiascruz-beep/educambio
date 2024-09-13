import Register from "@/components/Register/Form"
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export default function() {
    return (
        <main>

        <div className="bg-gradient-to-r   from-[#003366] to-[#56AEFF] h-20 w-full relative">
    <div className="flex">
        <div className="flex text-center mt-4 ml-4">
            <div>
            <p className="text-white text-3xl tracking-[10px] font-bold uppercase">Edu</p>
            </div>
            <div>
            <p className="text-[#0063C7] text-3xl tracking-[10px] font-bold uppercase">Cambio</p>
            </div>
      </div>
    </div>
        </div>


    

    <div className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-[#003366] to-[#06358d]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Formulario de registro</h2>
        <p className="mt-2 text-lg leading-8 text-white">Completa los siguientes datos personales</p>
      </div>  

    <Register sect1="Nombre y Apellido/s" sect2="¿A qué escuela y año asistís?" sect3="Número telefónico (opcional)" sect4="Provincia" sect5="Documento" sect6="Localidad"/>

    </div>

    <div className="bg-[#0063C7] h-24 w-full relative">

  <div className="flex justify-between">
      <div className="ml-10 mt-8">
        <p className="text-white text-3xl tracking-[10px] font-bold uppercase">Educambio</p>
      </div>
      
      <div className="mt-10 mr-54 text-white">
        <a href="" className="m-10 ">Nosotros</a>
        <a href="" className="m-10">Nuestras clases</a>
        <a href="" className="m-10">Contacto</a>

      </div>


      <div className="mr-16 mt-6 w-44 h-12 shadow-2xl shadow-black flex justify-between">
      <div className="mt-4"><FaFacebook /></div>
      <div className="mt-4"><FaLinkedin /></div>
      <div className="mt-4"><FaYoutube /></div>
      <div className="mt-4"><FaInstagram /></div>
      </div>



  </div>

</div>





    </main>

    )
}