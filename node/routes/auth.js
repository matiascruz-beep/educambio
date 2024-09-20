import * as a from "../controllers/auth.js"  // Importa todos los exportados de 'auth.js' como el objeto 'a'
import { Router } from "express"  // Importa el constructor 'Router' de Express

const auth = Router();  // Crea una nueva instancia de un enrutador

auth.get("/home", a.homePage)  // Define una ruta GET para la página principal, manejada por 'a.homePage'

auth.get("/login", a.loginForm)  // Define una ruta GET para mostrar el formulario de acceso, manejada por 'a.loginForm'
auth.post("/login", a.getLogin)  // Define una ruta POST para procesar el acceso y devolver un token, manejada por 'a.getLogin'

auth.get("/signin", a.signinForm)  // Define una ruta GET para mostrar el formulario de registro, manejada por 'a.signinForm'
auth.post("/signin", a.getSignIn)  // Define una ruta POST para procesar el registro y devolver un token, manejada por 'a.getSignIn'

export default auth  // Exporta el enrutador 'auth' para que pueda ser usado en otros módulos
