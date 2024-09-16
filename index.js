// Importacion de Modulos
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars"

import dbConn from "./node/config/db.js";
import auth from "./node/routes/auth.js";
import dest from "./node/routes/destination.js";
import post from "./node/routes/post.js";
import usr from "./node/routes/user.js";

//1/9
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//------

// Declaraciones
const app = express(); // Servidor Web
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const msg = `servidor iniciado en ${HOST}:${PORT}`
// Dependencias de Desarrollo
app.use(morgan('dev'))
// Decodificacion de parametros URL y BODY
app.use(express.urlencoded({extended: false}))
// Conexion Base de Datos
dbConn()
// Motor de Plantillas
const view = process.cwd()+"/views/";
const config = {
    partialsDir: view+"partials",
    layoutsDir: view+"layouts",
    defaultLayout: view+"index",
    extname: "hbs"
}
app.engine("hbs", engine(config))
app.set("view engine", "hbs")
// Procesamiento de Rutas
app.use("/", auth);
app.use("/destinations", dest);
app.use("/users", usr);
app.use("/posts", post)

// Servir archivos estáticos desde la carpeta 'src/panel_de_profesor/assets'
app.use('/assets', express.static(path.join(__dirname, 'src/panel_de_profesor/assets')));

// Servir imágenes desde la carpeta 'src/panel_de_profesor/images'
app.use('/images', express.static(path.join(__dirname, 'src/panel_de_profesor/images')));

// Configurar la carpeta 'src/panel_de_profesor' para servir archivos estáticos
app.use('/panel_de_profesor', express.static(path.join(__dirname, 'src/panel_de_profesor')));

// Servir la carpeta 'src' completa para archivos estáticos generales
app.use(express.static(path.join(__dirname, 'src')));

// Esta ruta debe ir al final para no interferir con las otras rutas
app.get("*", express.static("./src/inicio_sesion"));

// Ruta para servir el archivo HTML después del inicio de sesión
app.get('/inicio', (req, res) => {
    const filePath = path.join(__dirname, '.', 'src', 'panel_de_profesor', 'index.html');
    res.sendFile(filePath);
});

app.get('/test-js', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/panel_de_profesor/app2.js'));
});
// Inicializacion del Servidor
app.listen(PORT, HOST, console.log(msg))
export default app;