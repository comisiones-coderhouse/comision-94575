const boton = document.querySelector("button")
const conexionDelFront = io();

conexionDelFront.on("connect", () => {
    console.log("Conectado al servidor")
})

boton.addEventListener("click", () => {
    console.log("Enviando mensaje")
    //.emit() seria analogo a un fetch()
    conexionDelFront.emit("mensaje", "Hola desde el front")
})

conexionDelFront.on("respuesta",(data)=>{
    //<p></p>
    const mensaje = document.createElement("p")
    //<p>Hola desde el servidor</p>
    mensaje.textContent = data
    //<body>
    //    <p>Hola desde el servidor</p>
    //</body>
    document.body.append(mensaje)
})
