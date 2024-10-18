import React from 'react';
import Item from './Item';
import '../global/style.css';

const ItemList = ({ products }) => {
  return (
    <div className='itemList'>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <Item item={product} key={product.id} />
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ItemList;

