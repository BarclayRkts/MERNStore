import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

export default function Cart(props) {
    return (
        <div>
        <h5 className='infoTitle'>My Cart</h5>
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

