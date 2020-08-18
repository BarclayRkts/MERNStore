//make request get to db to get all info and display
import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function ProductInfo(props) {

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
        <div>
        {Product.title}
        {console.log(`the variable Product  - ${Product}`)}
        </div>
    )
}