import Destination from "../models/destination.js";  // Importa el modelo Destination para interactuar con la base de datos
import { resolve, setQuery } from "../utils/index.js";  // Importa las funciones 'resolve' y 'setQuery' de las utilidades

// Maneja la creación de un nuevo destino
export const createDest = async ({ body }, res) => 
    resolve(res, await Destination(body));  // Llama a la función 'resolve' con el resultado de la creación del destino

// Maneja la obtención de destinos, con soporte para consultas dinámicas
export const getDest = (req, res) => 
    resolve(res, Destination.find(setQuery(req)));  // Llama a la función 'resolve' con el resultado de la búsqueda de destinos, aplicando filtros de consulta

// Maneja la actualización de un destino específico por ID
export const updateDest = ({ body, params: { id: _id } }, res) =>
    resolve(res, Destination.updateOne({ _id }, { $set: body }));  // Llama a la función 'resolve' con el resultado de la actualización del destino

// Maneja la eliminación de un destino específico por ID
export const deleteDest = ({ params: { id: _id } }, res) =>
    resolve(res, Destination.updateOne({ _id }));  // Llama a la función 'resolve' con el resultado de la actualización del destino para marcarlo como eliminado

// Verifica si un destino con un campo específico existe
export const getIfExists = ({ params: { id } }, res) =>
    resolve(res, Destination.find({ [id]: { $exists: true } }));  // Llama a la función 'resolve' con el resultado de la búsqueda de destinos donde el campo especificado exista
