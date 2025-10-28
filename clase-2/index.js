/* 
require("./mi-archivo.js")
*/

/* import { edad, saludar } from "./constants.js";

console.log("🚀 edad:", edad)

saludar() */

/* 

Promesas

solicitudes a api / fetch

Eventos


Timers : setTimeout - setInterval - setImmediate
Trigger : click - submit - change
Recursos : peticion a api - lectura de archivo - etc


*/

/* setTimeout(()=>{
    console.log("1")
},5000);

setTimeout(function(){
    console.log("2")
},3000);

console.log("3") */


/* 

document.addEventListener("click",()=>{
    console.log("1")
})

console.log("2")

*/


/* 
fetch("https://jsonplaceholder.typicode.com/users")
    .then(() => {
        console.log("1")
    })

console.log("2") 
*/


/* const usuarios = [
    { id: 1, nombre: "Horacio" },
    { id: 2, nombre: "David" },
    { id: 3, nombre: "Marlene" }
]
 */

/* function traerUsuarios() {

    const promesa = new Promise(function (res, rej) {
        setTimeout(function () {

            const unNumeroRandom = Math.random()//0-1

            if (unNumeroRandom > 0.5) {
                console.log("Random bien")
                res()
            } else {
                console.log("Random mal")
                rej()
            }

            res()
        }, 2000)
    })

    return promesa
}
 */

/* 
const resultado = traerUsuarios()

resultado
    .then(function(){
        console.log("Salio bien")
    })
    .catch(function(){
        console.log("Salio mal")
    })
 */

/* 
try {
    const resultado = traerUsuarios()//pausa linea 78
    console.log("🚀 ~ resultado:", resultado)
    console.log("Salio todo bien")
} catch (error) {
    console.log("🚀 ~ error:", error)
} */

//Async / await

/* async function traerUsuariosAsync() {
    try {
        const resultado = await traerUsuarios()//pausa
        console.log("salio todo bien")
    } catch (error) {
        console.log("Salio todo mal")
    }
} */

/* const resultado = traerUsuariosAsync() */ //{}



/* 
const Persona = () => {}

Persona()


function Persona(){
    return 
}

Persona()
new Persona()

 */

class Persona {}

const resultado = new Persona() //{}

console.log("🚀 ~ resultado:", resultado)

//this