import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productos from '../productos.json';

const ItemDetailContainer = () => {
    const { id } = useParams(); 
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = () => {
            const foundItem = productos.find(product => product.id === id);
            setItem(foundItem);
            setLoading(false);
        };

        fetchItem();
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!item) {
        return <div>Item no encontrado!</div>;
    }

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;


