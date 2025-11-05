import express from "express";
import handlebars from "express-handlebars"
import rootRouter from "./routes/root.route.js"
import usersRouter from "./routes/users.route.js"
import productsRouter from "./routes/products.route.js"

//config
const PORT = 5000;

//El "Servidor"
const app = express();


//Con esta linea le "instalamos" a express nuevos motores de HTML
//app.engine("nombre fantasia",motor)

//Con esta linea le decimos a express cual motor usar
//app.set("view engine","nombre fantasia")

app.engine('handlebars',handlebars.engine());
app.set('view engine', 'handlebars');


//middleware
app.use(express.json())


//rutas
app.use("/", rootRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)


//global error handling
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send("Error interno del servidor")
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})