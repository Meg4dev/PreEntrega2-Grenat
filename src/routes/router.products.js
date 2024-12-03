import { Router } from "express";

const router = Router();

let products = [];

// Ruta para listar todos los productos
router.get("/", (req, res) => {
    res.json(products);
});

// Ruta para agregar un producto
router.post("/", (req, res) => {
    const { brand, model, price, stock, id, category } = req.body;

    // Validar datos obligatorios
    if (!brand || !model || !price || !stock || !id || !category) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Verificar si el producto ya existe
    if (products.some(product => product.id === id)) {
        return res.status(409).json({ error: "El producto ya existe" });
    }

    // Crear y agregar el producto
    const newProduct = { brand, model, price, stock, id, category };
    products.push(newProduct);

    res.status(201).json({ message: "Producto agregado con éxito", product: newProduct });
});

// Ruta para eliminar un producto por ID
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
