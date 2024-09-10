import User from "../models/user.js";  // Importa el modelo User para interactuar con la base de datos
import { resolve } from "../utils/index.js";  // Importa la función 'resolve' de las utilidades
import bcrypt from "bcrypt";  // Importa bcrypt para el hashing seguro de contraseñas

// Maneja la creación de un nuevo usuario
export const createUser = async (req, res) => {
    const { password } = req.body;  // Obtiene la contraseña del cuerpo de la solicitud
    const hashedPassword = await bcrypt.hash(password[0], 10);  // Encripta la contraseña con bcrypt
    const newUser = new User({ ...req.body, password: hashedPassword });  // Crea un nuevo objeto User con la contraseña encriptada
    resolve(res, newUser.save());  // Guarda el nuevo usuario en la base de datos y llama a 'resolve' con el resultado
};

// Maneja la obtención de usuarios, con soporte para búsquedas por ID o por otros campos
export const getUsers = ({ params: { id: _id, key, value } }, res) => {
    // Construye la consulta basada en los parámetros proporcionados
    const query = _id ? { _id } : key && value ? { [key]: value } : {};
    resolve(res, User.find(query));  // Busca los usuarios en la base de datos según la consulta y llama a 'resolve' con el resultado
};

// Maneja la actualización de un usuario específico por ID o nombre de usuario
export const updateUser = ({ url, params: { id }, body }, res) => {
    resolve(res, User.updateOne({ $or: { _id: id, username: id } }, { $set: filterFields(body) }));  // Actualiza el documento de usuario con el ID o nombre de usuario especificado, aplicando los cambios del cuerpo de la solicitud
};

// Maneja la eliminación de un usuario específico por ID
export const deleteUser = ({ params: { id: _id } }, res) => {
    resolve(res, User.deleteOne({ _id }));  // Elimina el documento de usuario con el ID especificado y llama a 'resolve' con el resultado
};
