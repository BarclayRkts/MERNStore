import React, { Component } from 'react';
import Form from './Form';
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
    // toggle(){
    //     alert('this toggling inside the home');
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }
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
    //{/*<div title={item.title}>title: {item.title}, description: {item.description}!</div>*/}
    render() {
    return (
        <div>
            <Container>
                <h1 id='title'>Sell Your Products Here Today!</h1>
            
                {this.state.products.map((item, index) => (
                    <ProductBox title={item.title} img={item.pictureURL} price={item.price} id={item._id}/>
                ))}
            </Container>
        </div>
        );
    }
}
