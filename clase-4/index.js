//Me traigo la libreria express
import express from "express"
import fs from "fs/promises"

//Creo mi servidor web
const servidor = express()

const PORT = 5000;

//miServidor.use(middleware)
// { email : "test@test.com", password : "123456"}
// { file : "archivo.txt" }
servidor.use(express.json())


class MessageManager {

    constructor() {
        this.id = Math.random()
        //leer el archivo de mensajes y hacer condiciones y guardar la data en this.messages
        this.messages = []
    }

    enviarTexto() {
        console.log("Enviando whatsapp...")
        console.log(this)
        //guardar los ids en un archivo
        //que se sume a this.messages
    }

    leerMensajes() {
        fs.readFile("info.txt", { encoding: "utf-8" })
            .then(function (data) {
                console.log(data)
            })
            .catch(function () {
                console.log("Hubo un error")
            })
    }

    async leerMensajesAsync() {
        try {
            const data = await fs.readFile("info.txt", { encoding: "utf-8" })
            console.log("🚀 ~ MessageManager ~ leerMensajesAsync ~ data:", data)
            return data
        } catch {
            console.log("Hubo un error")
        }
    }

    crearArchivo() {
        fs.writeFile("mensajes.txt", "primer mensaje de prueba")
            .then(function () {
                console.log("Se creo el archivo!")
            })
            .catch(function () {
                console.log("Hubo un error")
            })
    }

    async crearArchivoAsync(file) {

        try {
            await fs.writeFile(file, "primer mensaje de prueba")
            console.log("Se creo el archivo!")
        } catch {
            console.log("Hubo un error")
        }
    }


}

const manager = new MessageManager()


//Ruta
//miServidor.METODO("RUTA",callback)
servidor.get("/", (req, res) => {
    console.log("Ruta 1")
    const data = manager.leerMensajesAsync()//pausa
    data
        .then((respuesta) => {
            res.send(respuesta)
        })
    //res.end("Ruta de GET")
    //res.json()
})

servidor.post("/", (req, res) => {
    
    console.log("Ruta 2")

    //console.log(req.url)
    //console.log(req.method)
    console.log(req.body) // { "file" : "test.txt" }

    const data = manager.crearArchivoAsync(req.body.file)//pausa
    data
        .then((respuesta) => {
            res.send(respuesta)
        })
    res.end("Ruta de POST")
})

servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})



/* 
fetch("url",{
    method : "POST",
    body : JSON.stringify({email : "test@test.com", password : "123456"})
}) */