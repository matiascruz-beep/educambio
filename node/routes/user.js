import * as u from "../controllers/user.js";  // Importa todos los exportados de 'user.js' como el objeto 'u'
import * as p from "../controllers/payment.js";  // Importa todos los exportados de 'payment.js' como el objeto 'p'
import { Router } from "express";  // Importa el constructor 'Router' de Express
import { auth, verify } from "../utils/auth.js";  // Importa las funciones 'auth' y 'verify' para autenticación y verificación

const usr = Router();  // Crea una nueva instancia de un enrutador para manejar las rutas relacionadas con 'user'

// Rutas de Usuario
usr.post("/", u.createUser);  // Define una ruta POST para crear un nuevo usuario, manejada por 'u.createUser'
usr.get("/", u.getUsers);  // Define una ruta GET para obtener una lista de usuarios, manejada por 'u.getUsers'
usr.get("/:id", u.getUsers);  // Define una ruta GET para obtener un usuario específico por ID, manejada por 'u.getUsers'
usr.put("/:id", verify, u.updateUser);  // Define una ruta PUT para actualizar un usuario específico por ID, requiere verificación, manejada por 'u.updateUser'
usr.delete("/:id", verify, u.deleteUser);  // Define una ruta DELETE para eliminar un usuario específico por ID, requiere verificación, manejada por 'u.deleteUser'

// Rutas para datos de Pago
usr.get("/:id/payment", verify, p.getPaymentData);  // Define una ruta GET para obtener los datos de pago de un usuario específico, requiere verificación, manejada por 'p.getPaymentData'
usr.post("/:id/payment", verify, p.addPaymentData);  // Define una ruta POST para agregar datos de pago a un usuario específico, requiere verificación, manejada por 'p.addPaymentData'
usr.put("/:id/payment", verify, p.updatePaymentData);  // Define una ruta PUT para actualizar los datos de pago de un usuario específico, requiere verificación, manejada por 'p.updatePaymentData'
usr.delete("/:id/payment", verify, p.deletePaymentData);  // Define una ruta DELETE para eliminar los datos de pago de un usuario específico, requiere verificación, manejada por 'p.deletePaymentData'

export default usr;  // Exporta el enrutador 'usr' para que pueda ser usado en otros módulos
