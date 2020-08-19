import React from 'react'

export default function ProductImage(props) {
    return (
        <div>
            <img src={props.detail.image}/>
        </div>
    )
}
