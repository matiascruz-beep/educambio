import * as d from "../controllers/destination.js";  // Importa todos los exportados de 'destination.js' como el objeto 'd'
import { Router } from "express";  // Importa el constructor 'Router' de Express

// Creación del Enrutador
const dest = Router();  // Crea una nueva instancia de un enrutador para manejar las rutas relacionadas con 'destination'

// Rutas de la aplicación
dest.get("/", d.getDest)  // Define una ruta GET en la raíz que obtiene una lista de destinos, manejada por 'd.getDest'
dest.get("/:id", d.getDest)  // Define una ruta GET para obtener un destino específico por su ID, manejada por 'd.getDest'
dest.post("/", d.createDest)  // Define una ruta POST para crear un nuevo destino, manejada por 'd.createDest'
dest.put("/:id", d.updateDest)  // Define una ruta PUT para actualizar un destino específico por su ID, manejada por 'd.updateDest'
dest.delete("/:id", d.deleteDest)  // Define una ruta DELETE para eliminar un destino específico por su ID, manejada por 'd.deleteDest'

// Filtros
dest.get("/city/:cityId", d.getDest)  // Define una ruta GET para obtener destinos filtrados por ID de ciudad, manejada por 'd.getDest'
dest.get("/country/:countryId", d.getDest)  // Define una ruta GET para obtener destinos filtrados por ID de país, manejada por 'd.getDest'
dest.put("/:id/pension/", d.updateDest)  // Define una ruta PUT para actualizar la pensión de un destino específico, manejada por 'd.updateDest'
dest.delete("/:id/pension/:pensionId", d.deleteDest)  // Define una ruta DELETE para eliminar una pensión específica de un destino, manejada por 'd.deleteDest'

// Búsqueda General
// dest.get("/key/:id", d.getDest)  // Comentar estas rutas indica que se han dejado para posibles funcionalidades futuras
// dest.get("/:key/:value", d.getDest)  // Estas rutas comentadas podrían haberse usado para una búsqueda más flexible

// Exportación del Enrutador
export default dest;  // Exporta el enrutador 'dest' para que pueda ser usado en otros módulos
