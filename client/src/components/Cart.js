import React, { useState, useEffect, useContext } from 'react';
import { Table } from 'reactstrap';
import { CartContext } from './CartContext';

export default function Cart(props) {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div>
        <h5 className='infoTitle'>My Cart</h5>
        <p>total items in cart : {cart.length}</p>
        <Table>
        <thead>
            <tr>
            <th>Product Image</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Remove from Cart</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><button>Remove</button></td>
            </tr>
        </tbody>
        </Table>
        <div>Total Amount: $</div>
        </div>
    )
}

