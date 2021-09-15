import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {

    var myID = props.id;

    return (
        <div>
            <h2>All products: </h2>
            {props.products.map( (products, i) =>
                <p key={i}>{products.title}</p>
            )}
            <hr/>
        </div>
    )
}
    
export default ProductList;