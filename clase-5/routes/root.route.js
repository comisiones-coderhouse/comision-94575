import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Raiz")
})

export default router