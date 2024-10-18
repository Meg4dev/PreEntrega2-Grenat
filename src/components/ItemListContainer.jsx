import React, { useEffect, useState } from "react";
import jsonProducts from '../productos.json';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import '../global/style.css';

const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(jsonProducts);
        }, 1000); 
    });
};

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true); 
            try {
                const data = await fetchProducts();
                let productsFilter = [];

                if (categoryId) {
                    productsFilter = data.filter(f => f.category === categoryId);
                } else {
                    productsFilter = data; 
                }

                setProducts(productsFilter);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, [categoryId]);

    if (loading) {
        return <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
            <div className="wheel"></div>
            <div className="hamster">
                <div className="hamster__body">
                    <div class="hamster__head">
                        <div className="hamster__ear"></div>
                        <div className="hamster__eye"></div>
                        <div className="hamster__nose"></div>
                    </div>
                    <div className="hamster__limb hamster__limb--fr"></div>
                    <div className="hamster__limb hamster__limb--fl"></div>
                    <div className="hamster__limb hamster__limb--br"></div>
                    <div className="hamster__limb hamster__limb--bl"></div>
                    <div className="hamster__tail"></div>
                </div>
            </div>
            <div class="spoke"></div>
        </div>;
    }

    return <ItemList products={products} />;
};

export default ItemListContainer;

