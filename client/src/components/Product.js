//make request get to db to get all info and display
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo';
import { Container, Row, Col } from 'reactstrap';
import './style/Product.css'
import ProductImage from './ProductImage';

export default function Product(props) {

    const productId = props.match.params.productId;
    const [Product, setProduct] = useState([])
    // console.log(` the variable productId - ${productId}`);
    //console.log(`the variable Product  - ${Product}`);

    useEffect(() => {
        //api/items
        ///api/items/product/products_by_id?id=${productId}&type=single
        axios.get(`/api/items/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    return (
        <div className="postPage">
            <h1 className='productTitle'>{Product.title}</h1>
            <Container>
            
            <Row>
                <Col xs="6"><ProductImage detail={Product}/>
                </Col>

                <Col xs="6"><ProductInfo detail={Product}/>
                </Col>
            </Row>
            </Container>
            
            <Container className='btnContainer'>
                <button className='cartBtn'>Add to Cart</button>
            </Container>
        </div>
    )
}