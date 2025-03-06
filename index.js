// Importacion de Modulos
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars"
import path from 'path'
import { fileURLToPath } from 'url';
import next from 'next';
// Obtener __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dbConn from "./node/config/db.js";
import auth from "./node/routes/auth.js";
import dest from "./node/routes/destination.js";
import post from "./node/routes/post.js";
import usr from "./node/routes/user.js";

// Declaraciones
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev }); // Instancia de Next.js
const handle = app.getRequestHandler(); // Manejador de solicitudes de Next.js
const nextApp = next({ dev });
const app2 = express(); // Servidor Web
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const msg = `servidor iniciado en ${HOST}:${PORT}`
// Dependencias de Desarrollo
app2.use(morgan('dev'))
// Decodificacion de parametros URL y BODY
app2.use(express.urlencoded({extended: false}))
// Conexion Base de Datos
dbConn()

// Configurar el motor de plantillas Handlebars
app2.engine('handlebars', engine());
app2.set('view engine', 'handlebars');
app2.set('views', path.join(__dirname, 'views'));


// Procesamiento de Rutas
app2.use("/", auth);
app2.use("/destinations", dest);
app2.use("/users", usr);
app2.use("/posts", post)


// Inicializa Next.js
app.prepare().then(() => {
    // Configura la ruta para el formulario de login
    app2.get('/', (req, res) => {
        return app.render(req, res, '/'); // Renderiza la página de inicio
    });
    //Este middleware permite que Next.js maneje todas las demás rutas
    app2.all('*', (req, res) => {
        return handle(req, res);
    });

    app2.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
   // Inicializacion del Servidor
//app2.listen(PORT, HOST, console.log(msg))
});

export default app;