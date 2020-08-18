import React, { Component } from 'react';
import './style/ProductBox.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Product from './Product';
import ProductInfo from './ProductInfo';

export default class ProductBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false
        }
    } 
    handleClick = () => {
        //alert('this handle click')
        this.setState({
            toggle: !this.state.toggle,
        });
    }
    render() {
        return (
        <Route>
            <div className='containerBox'>
                    <div className='imgBox'>
                    <Link to= {`/product/${this.props.id}`} onClick={this.handleClick}>
                        <img alt={this.props.title} src={this.props.img}/>
                        <p className='title'>{this.props.title}</p>
                        <span className='price'>{this.props.price}</span>
                    </Link>  
                    </div>
                    {this.state.toggle ?  
                        <Product status={this.state.toggle} title={this.props.title} price={this.props.price} img={this.props.img}/>
                    : null} 
                    
                    {/*this.state.toggle ?  
                        <Route path={`/product/${this.props.id}`}><Product status={this.state.toggle} title={this.props.title} price={this.props.price} img={this.props.img}/></Route>
                    : null*/} 
            </div>
        </Route>
        )
    }
}

