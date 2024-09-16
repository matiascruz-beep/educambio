import bcrypt from "bcrypt";  // Importa bcrypt para el hashing seguro de contraseñas
import User from "../models/user.js";  // Importa el modelo User para interactuar con la base de datos
import { UserDao } from "../dao/index.js";  // Importa UserDao para manipular datos de usuario
import { auth } from "../utils/index.js";  // Importa la función de autenticación para generar tokens
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Renderiza la página principal del sitio
export const homePage = (req, res) => {
    res.render("layouts/home", {});
};

// Renderiza el formulario de registro con un mensaje de bienvenida
export const signinForm = (req, res) => {
    // Construye la ruta completa al archivo HTML
    const filePath = path.join(__dirname, '..', 'src','inicio_sesion', 'registro_general.html');
    // Envía el archivo HTML al cliente
    res.sendFile(filePath);
};

// Renderiza el formulario de inicio de sesión con un mensaje de bienvenida
export const loginForm = (req, res) => {

    //res.render("layouts/login",{messageError: "h"})
     // Construye la ruta completa al archivo HTML
        const filePath = path.join(__dirname, '..', 'src','inicio_sesion', 'login.html');
    
     // Envía el archivo HTML al cliente
        res.sendFile(filePath);
};

// Maneja el inicio de sesión de usuarios
export const getLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar el usuario por nombre de usuario
        const user = await User.findOne({ username });

        // Verificar si el usuario existe
        if (!user) {
            return res.render("layouts/login", { messageError: "Revise su usuario y contraseña" });
        }

        // Comparar la contraseña proporcionada con la contraseña hasheada almacenada
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.render("layouts/login", { messageError: "Revise su contraseña" });
        }

        // Si la contraseña coincide, crear un objeto plano como payload
        const payload = { id: user._id, username: user.username }; // Asegúrate de que este es un objeto simple

        const authResult = await auth(payload); // Usa tu función auth para generar el token

        if (authResult.error) {
            return res.json(authResult);
        }

        const token = authResult.token;

        // Enviar la respuesta con el token
        res.header({
            Authorization: "Bearer " + token
        });
       // Redirige a la ruta '/login-success'
        //res.redirect('/inicio/');
        res.render("layouts/home", {usuario : username}) //tiene que hacer esto
        // Construye la ruta completa al archivo HTML
        //const filePath = path.join(__dirname, '..', 'src','panel_de_profesor', 'inicio.html');
        // Envía el archivo HTML al cliente
        //res.sendFile(filePath);
    } catch (error) {
        // Agregar detalles del error a la consola para depuración
        console.log("error")
        console.error("Error durante el inicio de sesión:", error);
        res.json({
            error: true,
            message: "Ocurrió un error durante el inicio de sesión.",
            details: error.message // Agregar detalles del error en la respuesta
        });
    }
};


// Maneja el registro de nuevos usuarios
export const getSignIn = async (req, res) => {
    const { username, email, password,profesor,estudiante } = req.body;  // Obtiene el nombre de usuario, email y contraseña del cuerpo de la solicitud
    const [p0, p1] = password;  // Se espera que 'password' sea un array con dos elementos

    if (p0 === p1) {  // Verifica que las contraseñas coincidan
        const hash = await bcrypt.hash(p0, 10);  // Encripta la contraseña con bcrypt
        const user = new UserDao({ username, email, password: hash });  // Crea un nuevo objeto UserDao con los datos del nuevo usuario
        const newUser = new User(user);  // Crea un nuevo objeto User para interactuar con la base de datos
        newUser.save()  // Guarda el nuevo usuario en la base de datos
        .then(() => {
            if(profesor){
                 // Construye la ruta completa al archivo HTML dentro de la carpeta 'inicio_sesion'
            const filePath = path.join(__dirname, '..', 'src','formulario', 'forumlario_profesor.html');
            // Envía el archivo HTML al cliente
            res.sendFile(filePath);
            }else if(estudiante){
                 // Construye la ruta completa al archivo HTML dentro de la carpeta 'inicio_sesion'
                const filePath = path.join(__dirname, '..', 'src','formulario', 'formulario_alumno.html');
                // Envía el archivo HTML al cliente
                res.sendFile(filePath);
            }    
        })
            .catch((err) => res.json(err));  // Devuelve un mensaje de error si la operación de guardado falla
    } else {
        res.render("layouts/signin", {
            error: true,
            message: "Revise los datos ingresados"  // Renderiza la página de registro con un mensaje de error si las contraseñas no coinciden
        });
    }
};
