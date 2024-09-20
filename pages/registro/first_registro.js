import Footer_registro from "@/components/Register/Footer_registro";
import Nav_registro from "@/components/Register/Nav_registro";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export default function() {
    return (
        <main className="h-screem">
            <div>
                <Nav_registro/>
            </div>

            <div className="bg-[url('/images/fondoRG.png')] bg-cover bg-center bg-no-repeat flex justify-center flex-grow">
                <div className="bg-black/70 w-full flex items-center justify-center">
                    <div className="bg-white/50 py-10 px-6 w-full max-w-md h-auto my-14" style={{ borderRadius: '5rem' }}>
                        <h1 className="py-6 text-center text-3xl font-inter">
                        ¡Bienvenido a
                        <br />
                        <span className="text-[#0063C7]">Educambio!</span>
                        </h1>

                        <form 
                            className="flex flex-col space-y-4 w-full"
                            /*onSubmit={(e) => {
                                e.preventDefault();
                            
                                const isProfesor = document.getElementById('profesor').checked;
                                const isEstudiante = document.getElementById('estudiante').checked;
                            
                                if (isProfesor) {
                                    window.location.href = './registro_profesor';
                                } else if (isEstudiante) {
                                    window.location.href = './registro_alumno';
                                } else {
                                alert('Por favor, selecciona una opción antes de continuar.');
                                }
                            }}*/
                        method="post" action="/signin" id="signin">
                                <input type="text" 
                                name="username" 
                                id="username"  
                                placeholder="usuario" 
                                class="rounded-lg pl-2 py-1" 
                                autocomplete="true"/>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email@domain.com"
                            required
                            className="rounded-lg pl-2 py-1"
                            />
                            <input
                            type="password"
                            name="password"
                            id="pass1"
                            placeholder="contraseña"
                            required
                            className="rounded-lg pl-2 py-1"
                            />
                            <input
                            type="password"
                            name="password"
                            id="pass2"
                            placeholder="repita la contraseña"
                            required
                            className="rounded-lg pl-2 py-1"
                            />
                            <input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="dd/mm/aaaa"
                            required
                            className="rounded-lg pl-2 py-1"
                            />
                            <div className="flex items-center justify-center text-white">
                                <div className="pr-6">
                                    <input
                                    type="checkbox"
                                    id="profesor"
                                    name="rol"
                                    className="p-4"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                        document.getElementById('estudiante').checked = false;
                                        }
                                    }}
                                    />
                                    <label htmlFor="profesor" className="p-4">
                                    Soy profesor
                                    </label>
                                </div>

                                <div>
                                    <input
                                    type="checkbox"
                                    id="estudiante"
                                    name="rol"
                                    className="p-4"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                        document.getElementById('profesor').checked = false;
                                        }
                                    }}
                                    />
                                    <label htmlFor="estudiante" className="p-4">
                                    Soy estudiante
                                    </label>
                                </div>
                                </div>

                        <button className="bg-[#0063C7] text-white font-xl rounded-lg text-center py-1">
                        Continuar
                        </button>
                        </form>

                        <div className="flex items-center py-5">
                            <div className="flex-grow border-t border-white"></div>
                            <span className="mx-4 text-white text-[14px]">o continuar con</span>
                            <div className="flex-grow border-t border-white"></div>
                        </div>
                        <button className="flex items-center justify-center bg-white rounded-lg w-full py-1 font-xl">
                        <img src="/images/google.png" alt="Logo de Google" className="w-6 h-6 mr-2" />
                        <span>Google</span>
                        </button>

                        <div className="w-full py-4">
                            <h5 className="text-center">
                            ¿No eres miembro? - <a href="#">Registrate</a>
                            </h5>
                            <p className="text-[11px] text-[#3E3C3C] text-center">
                            Si continúas, aceptas los{' '}
                            <span className="text-black underline">Términos del servicio</span> de Educambio y
                            confirmas que has leído nuestra{' '}
                            <span className="text-black underline">Política de privacidad</span>{' '}
                            <span className="text-black underline">Aviso de recopilación de datos.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer_registro/>
            </div>
        </main>
    )
}