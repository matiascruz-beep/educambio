import Post from "../models/post.js";  // Importa el modelo Post para interactuar con la base de datos
import { resolve, setQuery } from "../utils/index.js";  // Importa las funciones 'resolve' y 'setQuery' de las utilidades

// Maneja la creación de un nuevo post
export const createPost = ({ body }, res) => 
    resolve(res, new Post(body).save());  // Crea un nuevo documento de tipo Post y guarda en la base de datos, luego llama a 'resolve' con el resultado

// Maneja la obtención de todos los posts
export const getPosts = (req, res) => 
    resolve(res, Post.find());  // Busca todos los documentos de tipo Post en la base de datos y llama a 'resolve' con el resultado

// Maneja la actualización de un post específico por ID
export const updatePost = ({ body, params: { id: _id } }, res) => 
    resolve(res, Post.updateOne({ _id }, { $set: body }));  // Actualiza el documento de tipo Post con el ID especificado, aplicando los cambios del cuerpo de la solicitud, luego llama a 'resolve' con el resultado

// Maneja la eliminación de un post específico por ID
export const deletePost = ({ params: { id: _id } }, res) => 
    resolve(res, Post.deleteOne({ _id }));  // Elimina el documento de tipo Post con el ID especificado, luego llama a 'resolve' con el resultado
