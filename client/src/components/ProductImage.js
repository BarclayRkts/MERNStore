import React from 'react'

export default function ProductImage(props) {
    return (
        <div>
            <img className="productImg" src={props.detail.pictureURL} alt={props.detail.title}/>
        </div>
    )
}
