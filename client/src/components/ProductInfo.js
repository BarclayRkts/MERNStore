import React from 'react';
import { Table } from 'reactstrap';
import './style/ProductInfo.css';

export default function ProductInfo(props) {
    return (
        <div>
            <h5 className='infoTitle'>Product Information</h5>
            <Table>
        <thead>
            <tr>
            <th className='priceth'>Price</th>
            <th>Country</th>
            <th>Condition</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>${props.detail.price}</td>
            <td>{props.detail.country}</td>
            <td>Used</td>
            </tr>
        </tbody>
        </Table>
        <p>Description: {props.detail.description}</p>
        </div>
    )
}

