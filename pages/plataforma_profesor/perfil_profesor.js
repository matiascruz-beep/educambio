import Navegation from "@/components/Platform/Navegation"
import Perfil from "@/components/Platform/Perfil"
import Formulario_perfil from "@/components/Platform/Formulario_perfil"

export default function Platform () {
    return (
        <main className="bg-cover bg-gradient-to-r from-[#003366] to-[#56AEFF]  h-screen w-full">
        
        <div className="w-full">
        <Navegation user="Ramiro" name="Ramiro Ramirez" title="Profesor de Matemática" link1="/plataforma_profesor/panel_de_profesor" link2="/plataforma_profesor/clases_profesor" link3="/plataforma_profesor/soporte_profesor"/>
        </div>

        <div className="flex flex-col h-screen mt-[-80px] md:flex-row md:justify-center md:items-center">
        
            <div className="flex justify-center items-center mb-4 md:mb-0">
            <Perfil image ="/images/profe.png" name="Rosario" prop="Profesora" />
            </div>

            <div className="flex justify-center items-center md:ml-8">
                <div className="formulario flex flex-col md:flex-row justify-center md:justify-evenly">
                    <form className="form items-center flex flex-col w-full md:w-auto">
                        <div className="flex flex-col mt-4 w-full max-w-[400px]">
                            <label className="text-white" htmlFor="nombre">Nombre y apellido</label>
                            <input className="text-black w-full h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="nombre" name="nombre" required />
                        </div>
                        <div className="flex flex-col mt-4 w-full max-w-[400px]">
                            <label className="text-white" htmlFor="telefono">Teléfono celular</label>
                            <input className="text-black w-full h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="telefono" name="telefono" required />
                        </div>
                        <div className="flex mt-4 w-full max-w-[400px]">
                            <div className="flex flex-col mr-2 w-1/3">
                                <label className="text-white" htmlFor="documento">Tipo de doc.</label>
                                <select className="text-black w-full h-[40px] rounded-[40px] pl-4 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" id="documento" name="documento" required>
                                    <option value="">Seleccione un tipo de documento</option>
                                    <option value="dni">DNI</option>
                                    <option value="passport">Pasaporte</option>
                                    <option value="license">Licencia de Conducir</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-2/3">
                                <label className="text-white" htmlFor="numeroDocumento">Número</label>
                                <input className="text-black w-full h-[40px] rounded-[40px] pl-4 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="numeroDocumento" name="numeroDocumento" required />
                            </div>
                        </div>
                    </form>

                    <form className="form items-center flex flex-col w-full md:w-auto mt-8 md:mt-0 md:ml-8">
                        <div className="flex flex-col mt-4 w-full max-w-[400px]">
                            <label className="text-white" htmlFor="escuela">Profesión/Título</label>
                            <input className="text-black w-full h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="escuela" name="escuela" required />
                            <label className="text-white" htmlFor="documento">Estado:</label>
                                <select className="text-black w-full h-[40px] rounded-[40px] pl-4 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" id="documento" name="documento" required>
                                    <option value="">Seleccione el estado</option>
                                    <option value="completo">Completo</option>
                                    <option value="en_curso">En curso</option>
                                    <option value="abandonado">Abandonado</option>
                                </select>
                        </div>
                        <div className="flex flex-col mt-4 w-full max-w-[400px]">
                            <label className="text-white" htmlFor="provincia">Provincia</label>
                            <input className="text-black w-full h-[40px] rounded-[40px] pl-4 pr-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="provincia" name="provincia" required />
                        </div>
                        <div className="flex flex-col mt-4 w-full max-w-[400px]">
                            <label className="text-white" htmlFor="localidad">Localidad</label>
                            <input className="text-black w-full h-[40px] rounded-[40px] pl-4 border-2 border-transparent focus:border-custom-blue2 focus:outline-none" type="text" id="localidad" name="localidad" required />
                        </div>
                        <div className="flex justify-center items-center w-full max-w-[150px] h-[50px] rounded-3xl bg-[#0082D6] mt-5">
                            <button className="text-white w-full h-[40px]" type="submit" id="crear">Guardar cambios</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

        </main>

    )
}