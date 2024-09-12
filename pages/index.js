import Image from "next/image";
import Card from "@/components/Home/Card"
import Integrantes from "@/components/Home/Integrantes"
import Footer from "@/components/Home/Footer"


export default function Home() {
  return (
    <main >

<div className="max-w-[2000px] mx-auto ">
    <div className="p-5 flex justify-between items-center">
        <div className="educambio"><a class="no-underline font-bold text-[31px] tracking-wider text-[#0063C7] transition duration-300 hover:text-[#004A9F]" href="#">EDUCAMBIO</a></div>
            <div className="lista">
                <ul className="flex list-none gap-8"> 
                    <li className="p-4 hover:text-gray-400"><a className="no-underline text-inherit text-lg font-normal leading-7" href="#inicio">Inicio</a> </li>
                    <li className="p-4 hover:text-gray-400"> <a className="no-underline text-inherit text-lg font-normal leading-7" href="#sabiasque">¿Sabías que?</a> </li>
                    <li className="p-4 hover:text-gray-400"> <a className="no-underline text-inherit text-lg font-normal leading-7" href="#nosotros">Nosotros</a> </li>
                    <li className="p-4 hover:text-gray-400"> <a className="no-underline text-inherit text-lg font-normal leading-7" href="#contacto">Contacto</a> </li>
                </ul>  
            </div>
            <div>
                <ul className="flex">
                  <li className="flex justify-center  items-center w-[150px] h-[50px] text-center bg-[#0063C7] text-white rounded-[43px] shadow-lg transition duration-300 hover:translate-y-0.5 hover:shadow-2xl">
                    <a className="w-full h-full flex justify-center items-center" href="/registro/inicio_sesion">Iniciar sesión</a>
                  </li>
                  <li className="flex justify-center items-center w-[150px] h-[50px] text-center bg-[#56AEFF] text-white rounded-[43px] shadow-lg transition duration-300 hover:translate-y-0.5 hover:shadow-2xl">
                    <a className="w-full h-full flex justify-center items-center">Registrate</a>
                  </li>
                </ul>
              </div>
              
    </div>
   
</div>

<div className="bg-[url('/images/FONDO.png')] bg-cover bg-no-repeat flex items-center h-screen ">
    <div className="flex flex-col mx-20 pb-20">
      <h3 className="text-4xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
        APRENDE, CRECE, Y ALCANZA <br/> TUS METAS CON 
      </h3>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0082D6] py-6">
        EDUCAMBIO
      </h1>
      <h5 className="text-4xl sm:text-l md:text-l lg:text-xl text-white">
        CLASES DE APOYO GRATUITAS PARA<br/>ESTUDIANTES DE SECUNDARIA
      </h5>
    </div>
</div>


<div className="bg-[url('/images/fondoSQ.png')] bg-cover bg-no-repeat flex justify-center h-screen">
    <div className="p-6 sm:p-12 max-w-screen-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0082D6]">
            ¿Sabías qué?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            <p className="text-white text-lg sm:text-xl md:text-2xl pr-0 lg:pr-40">
                Todas nuestras clases son impartidas por <span className="font-bold text-[#0063C7]">profesores y profesores</span> en formación que se ofrecen como voluntarios. Ellos están comprometidos con la excelencia educativa y dedicados a <span className="font-bold text-[#0063C7]">brindar un apoyo personalizado y eficaz. </span>
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl">
                Muchos estudiantes enfrentan desafíos debido a la falta de pedagogía efectiva en sus entornos educativos, y falta de recursos economicos. Nuestra plataforma busca llenar ese vacío, proporcionando una <span className="font-bold">educación gratuita de calidad</span> que se enfoca en las necesidades individuales de cada estudiante.
            </p>
        </div>
        <div className="pt-10 sm:pt-14">
            <h3 className="text-2xl sm:text-3xl text-white font-bold">
                ¿Te gustaría unirte como voluntario?
            </h3>
            <p className="text-white text-lg sm:text-2xl">
                Si eres profesor recibido o en formación y <span className="font-bold">te gustaría unirte</span> a nuestra causa, <span className="font-bold">¡te invitamos a hacerlo!</span> Juntos, podemos hacer una diferencia significativa en la educación de nuestros jóvenes.
            </p>
            <div className="pt-5">
                <button className="rounded-[43px] w-[160px] h-[55px] bg-[#0063C7] text-white uppercase font-bold" href="/registro/registro_profesor">Registrate</button>
            </div>
        </div>
    </div>
</div>




<div className="bg-[url('/images/FONDO.png')] bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center bg-neutral-700">

<div className="container mx-auto p-8 mt-12">
    <h2 className="text-4xl font-bold text-center mb-8 text-[#0082D6]">¿Quiénes Somos?</h2>

    <div className="flex flex-wrap justify-center gap-8">

    <Integrantes cardimage="/images/D.jpg" name="Diana Corregidor" prof="Full-Stack Developer" state="Estudiante" link="https://www.linkedin.com/in/daiana-corregidor-35049a227/"/>
    <Integrantes cardimage="/images/M.jpg" name="Matias Cruz" prof="Full-Stack Developer" state="Estudiante" link=""/>
    <Integrantes cardimage="/images/AL.jpg" name="Alan Wozniezka" prof="Full-Stack Developer" state="Estudiante" link=""/>
    <Integrantes cardimage="/images/L.jpg" name="Lucas Felix" prof="Full-Stack Developer" state="Estudiante" link=""/>
    <Integrantes cardimage="/images/C.png" name="Camila Velazquez" prof="Full-Stack Developer" state="Estudiante" link=""/>
    <Integrantes cardimage="/images/AILEN.jpg" name="Ailen Vera" prof="Full-Stack Developer" state="Estudiante" link=""/>

    </div>


    <div className="text-center mt-16 text-white">
        <p>
            OFRECEMOS TUTORIAS GRATUITAS A ESTUDIANTES DE SECUNDARIA DE AREAS DESFAVORECIDAS,
            APOYO ACADEMICO DE ALTA CALIDAD SIN INCURRIR EN COSTOS ADICIONALES. REDUCIMOS LAS DISPARIDADES
            EDUCATIVAS BRINDANDO A TODOS LOS ESTUDIANTES LA OPORTUNIDAD DE ALCANZAR SU MAXIMO POTENCIAL
            ACADEMICO.
        </p>
    </div>

</div>

</div>


    <div className="bg-[#5EAFF9]/10 size-full md:size-auto pb-10">
      <div className="md:container mx-auto flex justify-between pb-5">
        <div className="mt-5">
          <p className="text-xl font-semibold">
            Aprende a tu ritmo con recursos multimedia, interactivos y profesores dedicados
          </p>
        </div>


        <div className="p-3">
          <button className="rounded-[43px] w-[160px] h-[55px] bg-[#0063C7] active:scale-75 transition duration-150 text-white uppercase font-bold">Reserva una clase</button>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-10">

        <Card title="Clases Sincronicas" cardimage="/images/card1.png" description="Retroalimentacion inmediata durante las clases para aclarar dudas o corregir errores, aprovechando las funciones de chat en vivo."/>
        <Card title="Videos Educativos" cardimage="/images/card2.png" description="Conceptos clave de tus materias utilizando ejemplos y graficos visuales para facilitar la comprensión"/> 
        <Card title="Material Didáctico" cardimage="/images/card3.png" description="Actividades practicas, material de lectura, infografias para que puedan profundizar en los temas y desarrollar habilidades de comprension lectora"/>
       
      </div>

    </div>


    <Footer/>

    </main>
  );
}
