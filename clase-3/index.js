//Los objetos se pasan por referencia
/* const persona_1 = {
    nombre : "Horacio"
}

const persona_2 = persona_1

console.log(persona_1)
console.log(persona_2)

persona_2.nombre = "Juan"

console.log(persona_1)
console.log(persona_2) */



/* class MessageManager {

    constructor() {
        this.id = 2397862893
    }

    enviarTexto() {
        console.log("Enviando whatsapp...")
        console.log(this)
    }
}


const manager = new MessageManager()
 */
//manager.enviarTexto()

//document.addEventListener("click",manager.enviarTexto)
//document.manager.enviarTexto()
/* class Persona  {

    //Atributos
    constructor(nombre){
        this.nombre = nombre;
    }

    //Metodos
    enviarMensaje(){
        //???
        const manager = new MessageManager()
        manager.enviarTexto()
    }
} */

/* class Persona {

    constructor(nombre,callback) {
        this.nombre = nombre;
        this.callback = callback;
    }

    enviarMensaje() {
        this.callback()
    }
}


function handleSendText() {
    manager.enviarTexto()
}

 */


/* const persona = new Persona("Horacio",handleSendText)
persona.enviarMensaje() */

/* const persona_1 = new Persona()
const persona_2 = new Persona()

console.log(persona_1) //{nombre : ""}
console.log(persona_2) //{nombre : ""}

persona_2.nombre = "Juan" //{nombre : "Juan"}

console.log(persona_1) //{}
console.log(persona_2) //{nombre : "Juan"}
 */


//this : Contexto de funcion*
//Contexto de una funcion : El objeto que contiene a la funcion*

//console.log(this)
/* 
const persona = {
    nombre: "Horacio",
    saludar: function () {

        //const self = this
        //console.log(self)
        console.log(this)//persona

        setTimeout(function(){
            console.log(self)
        },0)

        setTimeout(() => {
            console.log(this)
        }, 0)

    }
}

persona.saludar()
 */


//Function.bind() / Function.apply() / Function.call()



/* function saludar(nombre,edad){
    console.log(this)
    console.log(`Hola, soy ${nombre} y tengo ${edad}!`)
}

saludar("Horacio",35)
saludar.call("call","Horacio",35)
saludar.apply("apply",["Horacio",35])

const saludar_2 = saludar.bind("bind","Horacio",35)

console.log(saludar)
console.log(saludar_2)

saludar_2() */

/* 

Primitivos : String - Number - Boolean - undefined - null - Symbol

Objetos 
*/
/* 
const nombre_1 = "Horacio";
const nombre_2 = nombre_1;

 */

//const fs = require("fs/promises")
import fs from "fs/promises"






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
            console.log("🚀 ~ leerArchivoAsync ~ data:", data)
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

    async crearArchivoAsync() {

        try {
            await fs.writeFile("mensajes.txt", "primer mensaje de prueba")
            console.log("Se creo el archivo!")
        } catch {
            console.log("Hubo un error")
        }
    }


}

const manager = new MessageManager()
//const manager2 = new MessageManager()

manager.leerMensajesAsync()
manager.leerMensajes()
manager.crearArchivoAsync()