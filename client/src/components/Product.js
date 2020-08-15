//make request get to db to get all info and display
import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
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
        axios.get('/api/items/id').then((res) => {
            const data = res.data;
            this.setState({ products: data});
            console.log('All products recieved!!')
            console.log(this.state);
            })
    .catch(() => {
        alert("error retrieveing data")
    }); 
    }
    render() {
        return (
            <div>
            This product information
            {this.state.products}
            {
                this.state.products.map((item,i) => <div key={i}>{item.price}</div>)

            }

            {/*console.log(this.state.products.price)*/}
            </div>
        )
    }
}

export default Product;