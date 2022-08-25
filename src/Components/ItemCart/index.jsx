import React from 'react';
import'./itemcart.css';
import {useCartContext} from '../../context/CartContext';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.title} />
            <div>
                <p>Title: {product.title}</p>
                <p>units: {product.quantity}</p>
                <p>Price u.: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
            </div>
        </div>
    )
}

export default ItemCart
