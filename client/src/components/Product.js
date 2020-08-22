//make request get to db to get all info and display
import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo';
import { Container, Row, Col } from 'reactstrap';
import './style/Product.css'
import ProductImage from './ProductImage';
import Cart from './Cart';
import {CartProvider} from './CartContext';
import {CartContext} from './CartContext';

export default function Product(props) {

    const productId = props.match.params.productId;
    const [Product, setProduct] = useState([]);
    const [cart, setCart] = useContext(CartContext);

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

    // select product to cart
    const addToCart = (evt) => {
        console.log('its clicked');
        const product = {title: props.title, price: props.price}
        setCart(currentCart => [...currentCart, product])
    }

    return (
    <CartProvider>
        <div className="postPage">
            <h1 className='productTitle'>{Product.title}</h1>
            <Container>
            
            <Row>
                <Col xs="6" className='ProductImage'><ProductImage detail={Product}/>
                </Col>

                <Col xs="6"><ProductInfo detail={Product}/>
                </Col>
            </Row>
            </Container>
            
            <Container className='btnContainer'>
                <Cart/>
                <button className='cartBtn' onClick={addToCart}>Add to Cart</button>
            </Container>
        </div>
    </CartProvider>
    )
}