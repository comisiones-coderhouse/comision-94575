import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
/* 
__dirname : un string con la ruta absoluta del directorio
__filename : un string con la ruta absoluta del archivo
*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); //E:/....../controllers


export const rootHandler = (req, res) => {
    //res.end() : metodo nativo de HTTP
    //res.send("") //metodo de express
    /* console.log(__dirname) */
    //res.sendFile(join(__dirname, "..", "vistas", "index.html"))
    res.render("index")
    /* 
    http/1.1 200 OK
    Content-Type : text/html
    Body : "Raiz"
    */
}


/* 


// convertir la URL en una ruta de archivo normal



*/