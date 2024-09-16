import * as c from "../controllers/index.js";  // Importa todos los exportados de 'index.js' como el objeto 'c'
import { Router } from "express";  // Importa el constructor 'Router' de Express

const r = Router();  // Crea una nueva instancia de un enrutador

// Definición de rutas dinámicas
["/users", "/posts", "/destinations"].forEach(path => {  // Itera sobre cada ruta base y define rutas para las operaciones CRUD
    r.get(path, c.readDocs);  // Define una ruta GET para leer documentos en cada ruta base, manejada por 'c.readDocs'
    r.post(path, c.createDoc);  // Define una ruta POST para crear un nuevo documento en cada ruta base, manejada por 'c.createDoc'
    r.put(path+"/:id", c.updateDoc);  // Define una ruta PUT para actualizar un documento específico por ID en cada ruta base, manejada por 'c.updateDoc'
    r.delete(path+"/:id", c.deleteDoc);  // Define una ruta DELETE para eliminar un documento específico por ID en cada ruta base, manejada por 'c.deleteDoc'
});

export default r;  // Exporta el enrutador 'r' para que pueda ser usado en otros módulos
