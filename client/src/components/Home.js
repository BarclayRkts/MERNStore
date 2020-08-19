import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'reactstrap';
import ProductBox from './ProductBox';
import './style/Home.css';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            isOpen: false
        }
    }
    componentDidMount = () => {
        this.getAllProducts();
    }

    getAllProducts = () => {
        axios.get('/api/items').then((res) => {
            const data = res.data;
            this.setState({ products: data});
            console.log('Data has been recieved!!')
            console.log(this.state);
            })
    .catch(() => {
        alert("error retrieveing data")
    }); 
    }
    render() {
    return (
        <div>
            <Container>
                <h1 id='title'>Sell Your Products Here Today!</h1>
            
                {this.state.products.map((item, index) => (
                    <ProductBox key={item._id} title={item.title} img={item.pictureURL} price={item.price} id={item._id}/>
                ))}
            </Container>
        </div>
        );
    }
}
