import * as p from "../controllers/post.js";  // Importa todos los exportados de 'post.js' como el objeto 'p'
import { Router } from "express";  // Importa el constructor 'Router' de Express

const post = Router();  // Crea una nueva instancia de un enrutador para manejar las rutas relacionadas con 'post'

// Definición de rutas para las operaciones CRUD de 'post'
post.post("/", p.createPost);  // Define una ruta POST para crear un nuevo post, manejada por 'p.createPost'
post.get("/:id?", p.getPosts);  // Define una ruta GET para obtener posts. Si se proporciona un ID, obtiene un post específico, sino obtiene todos, manejado por 'p.getPosts'
post.put("/:id", p.updatePost);  // Define una ruta PUT para actualizar un post específico por ID, manejada por 'p.updatePost'
post.delete("/:id", p.deletePost);  // Define una ruta DELETE para eliminar un post específico por ID, manejada por 'p.deletePost'

post.get("/username/:id", p.getPosts);  // Define una ruta GET para obtener posts filtrados por el ID de usuario, manejada por 'p.getPosts'

export default post;  // Exporta el enrutador 'post' para que pueda ser usado en otros módulos
