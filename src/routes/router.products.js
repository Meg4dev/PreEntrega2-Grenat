import { Router } from "express";
import { v4 as uuidv4 } from "uuid"; 

const router = Router();

let products = [];


router.get("/", (req, res) => {
    res.render("home", { products });
})

// Ruta para agregar un producto
router.post("/", (req, res) => {
    const { brand, model, price, stock, category } = req.body;

    // Validacion de datos
    if (!brand || !model || !price || !stock || !category) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Generar un id unico
    const id = uuidv4();

    // Crear y agregar el producto
    const newProduct = { brand, model, price, stock, id, category };
    products.push(newProduct);


    // Respondemos con un mensaje de éxito
    res.status(201).send("Producto agregado correctamente");
});

// Ruta para eliminar un producto por id
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    // Buscar el índice del producto
    const productIndex = products.findIndex(product => product.id === id);

    // Validar si el producto existe
    if (productIndex === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Eliminar el producto
    const deletedProduct = products.splice(productIndex, 1);

    res.status(200).json({ message: "Producto eliminado con éxito", product: deletedProduct[0] });
});

export default router;
