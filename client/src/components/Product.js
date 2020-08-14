import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                This a page for {this.props.title}
                {console.log(this.props)}
                {console.log(this.props.title)}
                {this.props.title}
                {this.props.price}
                {this.props.img}
                This a change
            </div>
        )
    }
}
