import UserModel from "../models/users.model.js"



export const createUser = async (req, res) => {
    //BSON = Como JSON pero binario
    //UserModel.create({ }) -> Paso
    //UserModel.create({ nombre : "Horacio" }) -> Paso
    //UserModel.create({ nombre : 30 }) -> Paso pero transformo el 30 a string "30"
    //UserModel.create({ edad: 35 }) -> Paso pero no me lo guarda en la DB el campo edad porque no esta en el schema

    //Desestructuracion de objetos
    const { edad, nombre, email } = req.body

    const respuesta = await UserModel.create({
        edad: edad,
        nombre: nombre,
        email: email
    })

    res.send(respuesta)
}

export const getAllUsers = async (req, res) => {
    
    //db.users.find()
    const respuesta = await UserModel.find()

    res.send(respuesta)
}

export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id)
    res.send(`Un solo usuario : ${userId}`)
}