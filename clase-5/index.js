import express from "express";
import rootRouter from "./routes/root.route.js"
import usersRouter from "./routes/users.route.js"

//El "Servidor"
const app = express();

//middleware : es una funcion que se ejecuta antes de la respuesta
//app.use(middleware)
//middleware : function(Request,Response,NextFunction){}
app.use((req, res, next) => {
    console.log("middleware")
    estaLogueado()
    /* const error = new Error("Error de prueba")
    next(error) */
    next()
})

app.use(express.json())

//config
const PORT = 5000;


//Puntos de entrada - endpoints - rutas
//elServidor.metodoHTTP("path",callback)
//elServidor.metodoHTTP("path",middleware,callback)
//callback : function(Request,Response){}
/* 
app.get("/", (req, res) => {
    //estaLogueado()
    res.send("Raiz")
}) 
*/
app.use("/", rootRouter)
app.use("/users", usersRouter)



/* 
app.post("/users", validarUsuario, (req, res) => {
    //estaLogueado()
    console.log(req.body) // { "name" : "John", "age" : 20 }
    res.send("Hola POST usuarios")
})


app.get("/users", (req, res) => {
    //estaLogueado()
    res.send("todos los usuarios")
})

app.get("/users/:id", (req, res) => {
    //estaLogueado()
    console.log(req.params)
    console.log(req.query)//?param1=valor1&paramN=valorN
    const userId = parseInt(req.params.id)
    res.send(`Un solo usuario : ${userId}`)
}) 
*/


app.post("/products", validarProducto, (req, res) => {
    //estaLogueado()
    console.log(req.body) // { "title" : "Product 1", "price" : 100 }
    res.send("Hola POST productos")
})


//global error handling
//elServidor.use(function(err,req,res,next){})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send("Error interno del servidor")
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

//http://localhost:5000


//https://www.google.com/search?q=rick+y+morty&rlz=1C1FKPE_enAR1142AR1142&oq=rick+y+morty&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPNIBCDE3MjdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8

//https://listado.mercadolibre.com.ar/computadora#D[A:computadora]


// <----  middleware   response   callback   ----> 


function estaLogueado() {
    console.log("estas logueado")
}

function validarUsuario(req, res, next) {
    console.log("validando usuario")
    next()
}

function validarProducto(req, res, next) {
    console.log("validando producto")
    next()
}