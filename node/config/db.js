import mongoose from "mongoose";
import dotenv from "dotenv";

//Accedo a las variables de entorno

//acceso a .env
dotenv.config()

const {DB_PROT,DB_USER,DB_PASS,DB_HOST,DB_PORT,DB,URI
} = process.env


//Conexion con servidor mondodb
const dbConn = () => mongoose.connect(URI ?? "mongodb://localhost:27017")
    .then(()=>{
        console.log(`Conectado con DB ${DB}`)
})
    .catch((e)=>{
    console.log(`Error: ${e}`)
})

export default dbConn;