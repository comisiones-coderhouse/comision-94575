import express from "express"

const router = express.Router()

router.post("/", validarUsuario, (req, res) => {
    res.send("Hola POST usuarios")
})


router.get("/", (req, res) => {
    res.send("todos los usuarios")
})

router.get("/:id", (req, res) => {
    //console.log(req.params)
    //console.log(req.query)//?param1=valor1&paramN=valorN
    const userId = parseInt(req.params.id)
    res.send(`Un solo usuario : ${userId}`)
})


function validarUsuario(req, res, next) {
    console.log("validando usuario")
    next()
}

export default router