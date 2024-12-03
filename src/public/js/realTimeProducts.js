
// const socket = io();

// // Renderizar productos
// const renderProducts = (products) => {
//     const productList = document.getElementById("product-list");
//     productList.innerHTML = "";

//     products.forEach(product => {
//         const productCard = document.createElement("div");
//         productCard.className = "product-card";
//         productCard.innerHTML = `
//             <h2>${product.brand} - ${product.model}</h2>
//             <p>Precio: $${product.price}</p>
//             <p>Stock: ${product.stock}</p>
//             <p>Categoría: ${product.category}</p>
//             <button onclick="deleteProduct('${product.id}')">Eliminar</button>
//         `;
//         productList.appendChild(productCard);
//     });
// };

// // Escuchar actualizaciones del servidor
// socket.on("updateProducts", (products) => {
//     renderProducts(products);
// });

// // Eliminar producto
// const deleteProduct = async (id) => {
//     try {
//         const response = await fetch(`/api/products/${id}`, {
//             method: "DELETE",
//         });

//         if (response.ok) {
//             alert("Producto eliminado correctamente");
//         } else {
//             alert("Error al eliminar el producto");
//         }
//     } catch (error) {
//         alert("Error de conexión con el servidor");
//     }
// };

// socket.emit("mensaje", 'hola soy el cliente');

// Establecer la conexión con el servidor Socket.IO





