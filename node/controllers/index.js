import models from "../models/index.js";  // Importa todos los modelos de la base de datos desde el archivo 'index.js'
import { resolve, setQuery } from "../utils/index.js";  // Importa las funciones 'resolve' y 'setQuery' de las utilidades

// Maneja la creación de un nuevo documento en la base de datos
export const createDoc = ({ url, body }, res) => {
    const Model = setModel(url);  // Determina el modelo a usar basado en la URL
    resolve(res, Model(body));  // Llama a la función 'resolve' con el resultado de la creación del documento
};

// Maneja la lectura de documentos desde la base de datos, aplicando filtros de consulta
export const readDocs = (req, res) => {
    const Model = setModel(req.url);  // Determina el modelo a usar basado en la URL de la solicitud
    resolve(res, Model.find(setQuery(req)));  // Llama a la función 'resolve' con el resultado de la búsqueda de documentos, aplicando filtros de consulta
};

// Maneja la actualización de un documento específico por ID
export const updateDoc = ({ params: { id: _id }, body }, res) => {
    const Model = setModel(req.url);  // Determina el modelo a usar basado en la URL de la solicitud
    resolve(res, Model.updateOne({ _id }, { $set: body }));  // Llama a la función 'resolve' con el resultado de la actualización del documento
};

// Maneja la eliminación de un documento específico por ID
export const deleteDoc = ({ params: { id: _id } }, res) => {
    const Model = setModel(req.url);  // Determina el modelo a usar basado en la URL de la solicitud
    resolve(res, Model.deleteOne({ _id }));  // Llama a la función 'resolve' con el resultado de la eliminación del documento
};

// Verifica si una URL incluye un texto específico
const check = (url, text) => {
    return url.includes(text);  // Devuelve true si la URL incluye el texto, de lo contrario false
};

// Determina el modelo a usar basado en la URL
export const setModel = (url) =>
    Object.keys(models).forEach(k => {
        if (check(url, k)) return models[k];  // Devuelve el modelo correspondiente si la URL contiene el texto del modelo
    });
