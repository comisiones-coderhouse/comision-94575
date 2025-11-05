export const createUser = (req, res) => {
    res.send("Hola POST usuarios")
}

export const getAllUsers = (req, res) => {
    res.send("todos los usuarios")
}

export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id)
    res.send(`Un solo usuario : ${userId}`)
}