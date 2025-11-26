import express from "express"
import { createUser, getAllUsers, getUserById, updateUser, deleteUser, getUsersByFilters } from "../controllers/users.controllers.js"

const router = express.Router()

router.post("/", createUser)
router.get("/", getUsersByFilters)
router.get("/", getAllUsers)
//router.get("/:limit/:skip", getUsersByFilters)
//http://localhost:3000/users/5/0 -> Esto me traeria los primeros 5 usuarios (1-5)
//http://localhost:3000/users/5/5 -> Esto me traeria los siguientes 5 usuarios (6-10)
//http://localhost:3000/users/5/10 -> Esto me traeria los siguientes 5 usuarios (11-15)
//http://localhost:3000/users?limit=5&skip=0 -> Esto me traeria los primeros 5 usuarios (1-5)
//http://localhost:3000/users?limit=5&skip=5 -> Esto me traeria los siguientes 5 usuarios (6-10)
//http://localhost:3000/users?limit=5&skip=10 -> Esto me traeria los siguientes 5 usuarios (11-15)
router.get("/:id", getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router