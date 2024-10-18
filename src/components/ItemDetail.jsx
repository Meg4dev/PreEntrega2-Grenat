import React, { useState } from 'react';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        if (quantity < item.stock) {
            setQuantity(prevQuantity => prevQuantity + 1); 
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        setQuantity(1);
    };

    return (
      <>
      <div className='itemDetail'>
        <img src={item.img} alt={item.model} />
        </div>
        <div className='detailDescription'>
            <h2>{item.brand} {item.model}</h2>
            <h3>Precio: ${item.price}</h3>
            <p>Stock disponible: {item.stock}</p>

            <div className="controlesCantidad">
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
            </div>

            <button 
                onClick={handleAddToCart}
                disabled={quantity > item.stock}>
                Agregar al carrito
            </button>
        </div>
        </>
    );
};

export default ItemDetail;
