//import fs from "fs"
//import fs from "fs/promises"

//fs.readFile("",()=>{})
//await fs.readFile("")

//const data = await fs.readFile("mensajes.txt", { encoding: "utf-8" })
//console.log(data)


//fs.writeFile("mensajes.txt","primer mensaje de prueba")


import http from "http"

const servidor = http.createServer() //Este es mi servidor web

const PORT = 5000;

/* 

servidor.addListener("request", () => {
    console.log("Solicitud recibida")
}) 
*/

servidor.on("request", (req, res) => {
    console.log(req.url)
    console.log(req.method)
    //if(req.url === "/" && req.method == "GET") {}
    //req : request : solicitud
    //res : response : respuesta
    console.log("Solicitud recibida")
    res.end("Ada Lovelace")
})

servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})