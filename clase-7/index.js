import express from "express";
import http from "http";
import { Server } from "socket.io";
/* import socketIO from "socket.io"; */
import handlebars from "express-handlebars"
import rootRouter from "./routes/root.route.js"
import usersRouter from "./routes/users.route.js"
import productsRouter from "./routes/products.route.js"

//config
const PORT = 5000;

//Ahora express se encarga de la capa de aplicacion, osea la "logica" del servidor
const app = express();

//Este es el servidor HTTP que responde solicitudes que vengan de : http://localhost:5000
const servidor = http.createServer(app);

//Este es el servidor de WebSockets que responde solicitudes que vengan de : ws://localhost:5000
/* const servidorWS = new socketIO.Server() */
const servidorWS = new Server(servidor);


servidorWS.on("connection", (socket) => {
    console.log("Nuevo cliente conectado")

    //Esto es analogo a una ruta en express, pero sin usar el prefijo "/"
    //socket.addEventListener("mensaje", (data) => {})
    socket.on("mensaje", () => {
        //Este "emit" le envia algo al mismo socket conectado
        socket.emit("respuesta", "Hola desde el servidor")

        //Este "emit" le envia algo a todos los sockets conectados excepto al que lo emitió
        socket.broadcast.emit("respuesta", "Hola desde el servidor")
    })

});



//Con esta linea le "instalamos" a express nuevos motores de HTML
//app.engine("nombre fantasia",motor)

//Con esta linea le decimos a express cual motor usar
//app.set("view engine","nombre fantasia")

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');


//middleware
app.use(express.json())

//Esto significa que : 
//Si me hacen un pedido con metodo GET y la ruta es /index.css (por ejemplo) busco el archivo en la carpeta public, si existe lo devuelvo, si no existe devuelvo un error 404.
app.use(express.static("public"))


//rutas
app.use("/", rootRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)


//global error handling
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send("Error interno del servidor")
})

/* 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
}) 
*/

servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})


