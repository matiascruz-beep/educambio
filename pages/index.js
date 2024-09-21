import Cardindex from "@/components/Home/Cardindex"
import Integrantes from "@/components/Home/Integrantes"
import Footer from "@/components/Home/Footer"


export default function Home() {
  return (
    <main >

      <div className="max-w-[2000px] mx-auto">
        <div className="p-5 flex justify-between items-center">
          <div className="educambio">
            <a
              className="no-underline font-bold text-[24px] md:text-[31px] tracking-wider text-[#0063C7] transition duration-300 hover:text-[#004A9F]"
              href="#inicio"
            >
              EDUCAMBIO
            </a>
          </div>

          <div className="hidden md:flex">
            <ul className="flex list-none gap-4 md:gap-8">
              <li className="p-2 md:p-4 hover:text-gray-400">
                <a
                  className="no-underline text-inherit text-sm md:text-lg font-normal leading-7"
                  href="#inicio"
                >
                  Inicio
                </a>
              </li>
              <li className="p-2 md:p-4 hover:text-gray-400">
                <a
                  className="no-underline text-inherit text-sm md:text-lg font-normal leading-7"
                  href="#sabiasque"
                >
                  ¿Sabías que?
                </a>
              </li>
              <li className="p-2 md:p-4 hover:text-gray-400">
                <a
                  className="no-underline text-inherit text-sm md:text-lg font-normal leading-7"
                  href="#nosotros"
                >
                  Nosotros
                </a>
              </li>
              <li className="p-2 md:p-4 hover:text-gray-400">
                <a
                  className="no-underline text-inherit text-sm md:text-lg font-normal leading-7"
                  href="#contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex">
            <ul className="flex">
              <li className="flex justify-center items-center w-[120px] md:w-[150px] h-[40px] md:h-[50px] text-center bg-[#0063C7] text-white rounded-[43px] shadow-lg transition duration-300 hover:translate-y-0.5 hover:shadow-2xl mr-2">
                <a
                  className="w-full h-full flex justify-center items-center"
                  href="/registro/inicio_sesion"
                >
                  Iniciar sesión
                </a>
              </li>
              <li className="flex justify-center items-center w-[120px] md:w-[150px] h-[40px] md:h-[50px] text-center bg-[#56AEFF] text-white rounded-[43px] shadow-lg transition duration-300 hover:translate-y-0.5 hover:shadow-2xl ml-2">
                <a
                  className="w-full h-full flex justify-center items-center"
                  href="/registro/first_registro"
                >
                  Registrate
                </a>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
              className="text-[#0063C7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className="hidden md:hidden">
          <ul className="flex flex-col items-center bg-gray-100 p-4">
            <li className="p-4 hover:text-gray-400">
              <a href="#inicio" className="no-underline text-inherit text-lg font-normal">
                Inicio
              </a>
            </li>
            <li className="p-4 hover:text-gray-400">
              <a href="#sabiasque" className="no-underline text-inherit text-lg font-normal">
                ¿Sabías que?
              </a>
            </li>
            <li className="p-4 hover:text-gray-400">
              <a href="#nosotros" className="no-underline text-inherit text-lg font-normal">
                Nosotros
              </a>
            </li>
            <li className="p-4 hover:text-gray-400">
              <a href="#contacto" className="no-underline text-inherit text-lg font-normal">
                Contacto
              </a>
            </li>
            <li className="m-4 p-4 bg-[#0063C7] text-white rounded-lg shadow-lg hover:bg-[#004A9F]">
              <a href="/registro/inicio_sesion" className="w-full text-center block">
                Iniciar sesión
              </a>
            </li>
            <li className="m-4 p-4 bg-[#56AEFF] text-white rounded-lg shadow-lg hover:bg-[#359aff]">
              <a href="/registro/first_registro" className="w-full text-center block">
                Registrate
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="flex items-center justify-center h-screen bg-[url('/images/FONDO.png')] bg-cover bg-no-repeat" id="inicio">
        <div className="bg-gradient-to-r from-[#5DAEF9] via-transparent to-transparent h-screen w-screen flex items-center justify-center">
          <div className="flex items-center max-w-screen-2xl w-full h-full sm:mx-10 pb-10 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="flex flex-col w-full text-left justify-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                APRENDE, CRECE, Y ALCANZA <br className="hidden sm:block" /> TUS METAS CON
              </h3>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0082D6] py-4 sm:py-5 lg:py-6">
                EDUCAMBIO
              </h1>

              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                CLASES DE APOYO GRATUITAS PARA<br className="hidden sm:block" /> ESTUDIANTES DE SECUNDARIA
              </h5>
            </div>

            <img
              src="/images/robotito.png"
              alt="Robot hipervinculo"
              className="fixed bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-4 mr-4"
            />
          </div>
        </div>
      </div>


<div className="bg-[url('/images/fondoSQ.png')] bg-cover bg-no-repeat flex justify-center items-center h-screen" id="sabiasque">
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
            <div className="py-6">
              <ul>
                <li className="rounded-[43px] w-[160px] h-[55px] bg-[#0063C7] text-white uppercase font-bold hover:bg-[#004A9F] text-center">
                  <a href="/registro/first_registro" className="flex items-center justify-center h-full">
                    Registrate
                  </a>
                </li>
              </ul>
            </div>
        </div>
    </div>
</div>




<div className="bg-[url('/images/FONDO.png')] bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center bg-neutral-700" id="nosotros">

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

        <Cardindex title="Clases Sincronicas" cardImage="/images/card1.png" description="Retroalimentacion inmediata durante las clases para aclarar dudas o corregir errores, aprovechando las funciones de chat en vivo."/>
        <Cardindex title="Videos Educativos" cardImage="/images/card2.png" description="Conceptos clave de tus materias utilizando ejemplos y graficos visuales para facilitar la comprensión"/> 
        <Cardindex title="Material Didáctico" cardImage="/images/card3.png" description="Actividades practicas, material de lectura, infografias para que puedan profundizar en los temas y desarrollar habilidades de comprension lectora"/>
       
      </div>

    </div>


    <Footer id="contacto"/>

    </main>
  );
}
