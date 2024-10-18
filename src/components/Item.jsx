import React from 'react';
import { NavLink } from 'react-router-dom';
import '../global/style.css';

export const Item = ({ item }) => {
    let price = `$${item.price}`
  return (
    <div className='cardContainer'>
      <div className='card'>
        <div className='prodImg'>
        <img src={item.img} />
        </div>
      <h2>{item.brand}</h2>
      <h3>{item.model}</h3>
      <NavLink to={`/detail/${item.id}`}>
        <div className='buttonContainer'>
        <button>Ver Detalles</button>
        </div>
      </NavLink>
      </div>
    </div>
  );
};

export default Item;

