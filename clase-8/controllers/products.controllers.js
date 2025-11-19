export const createProduct = (req, res) => {
    res.send("Hola POST 2 productos")
}

export const getProductsView = (req,res) => {
    res.render("products")
}