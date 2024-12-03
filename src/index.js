import express from "express";
import { Router } from "express";
import Products from "./routes/router.products.js";
import { __dirname } from "./utils.js";

const app = express();
const router = Router();
const PORT = 8080;

//! Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//! Routes
app.use("/api/products", Products);

















//! Telemetria
app.get ("/ping", (req, res) => {
    res.send("pong");
});

app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
});
export default router;