import UserModel from "../models/users.model.js"



export const createUser = async (req, res) => {
    //BSON = Como JSON pero binario
    //UserModel.create({ }) -> Paso
    //UserModel.create({ nombre : "Horacio" }) -> Paso
    //UserModel.create({ nombre : 30 }) -> Paso pero transformo el 30 a string "30"
    //UserModel.create({ edad: 35 }) -> Paso pero no me lo guarda en la DB el campo edad porque no esta en el schema

    //Desestructuracion de objetos
    const { edad, nombre, email } = req.body //{}

    const respuesta = await UserModel.create({
        edad: edad,
        nombre: nombre,
        email: email
    })

    res.send(respuesta)
}

export const getAllUsers = async (req, res) => {

    //db.users.find()
    /* const respuesta = await UserModel.find({
        edad : {
            $gt : 30,
        }
    })
 */
    /* const respuesta = await UserModel.find({
        edad: {
            $gt: 30,
            $lt: 40
        }
    }) */

    /* const respuesta = await UserModel.find({
        edad: {
            $gt: 30,
            $lt: 40
        }
    },{
        edad : 1,
        email : 1,
        _id : 0
    }) */


    //const respuesta = await UserModel.find({}).limit(1)
    //const respuesta = await UserModel.find({}).skip(1)
    //const respuesta = await UserModel.find({}).sort({ edad : 1 })
    //Paginador : Es la funcionalidad de mostrar una cantidad de datos determinada y luego mostrar la siguiente cantidad de datos determinada

    res.send(respuesta)
}

export const getUserById = async (req, res) => {

    const { id } = req.params
    const respuesta_mongoose = await UserModel.findById(id)
    //const respuesta_mongodb = await UserModel.find({ _id: id, nombre: "Horacio" })
    const respuesta_mongodb = await UserModel.find({ _id: id })

    res.send({
        error: false,
        payload: {
            //respuesta_mongodb : respuesta_mongodb,
            respuesta_mongodb,
            respuesta_mongoose
        }
    })
}

export const updateUser = async (req, res) => {

    //req.body = {}
    //req.body.id === undefined
    const { id } = req.params
    const { nombre } = req.body

    console.log(id)
    console.log(nombre)

    const resultado = await UserModel.updateOne({ _id: id }, { nombre: nombre })

    res.send({
        error: false,
        payload: resultado
    })
}

export const deleteUser = async (req, res) => {

    const { id } = req.params

    const resultado = await UserModel.deleteOne({ _id: id })

    res.send({
        error: false,
        payload: resultado
    })

}


export const getUsersByFilters = async (req, res) => {
    //localhost:3000/users?limit=5&skip=0
    const { limit, skip } = req.query
    console.log("🚀 ~ getUsersByFilters ~ limit:", limit)
    console.log("🚀 ~ getUsersByFilters ~ skip:", skip)

    const respuesta = await UserModel.find({}).limit(limit).skip(skip)

    res.send({
        error: false,
        payload: {
            respuesta
        }
    })
}