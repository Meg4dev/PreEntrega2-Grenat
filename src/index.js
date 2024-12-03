import express from "express";
import { Router } from "express";
import productsRouter from "./routes/router.products.js";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";

const app = express();
const router = Router();
const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT} de forma exitosa.`);
});

//TODO Socket.io

const io = new Server(httpServer);


io.on("connection", (socket) => {
    console.log("Cliente conectado");
    socket.on("disconnect", () => {
        console.log("Cliente desconectado");
    });
});


app.get("/real-time-products", (req, res) => {
    res.render("realTimeProducts");
});

//! Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");


//! Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//! Routes
app.use("/home", productsRouter);


//! Handlebars

app.get("/add-product", (req, res) => {
    res.render("addProduct" , {
        
    });
});


//! Telemetria
app.get ("/ping", (req, res) => {
    res.send("pong");
});




export default router;