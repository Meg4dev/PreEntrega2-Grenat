import express from "express";

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
});

app.get ("/", (req, res) => {
    res.send("Hello World! aaaaaaaaaaaaa");
});