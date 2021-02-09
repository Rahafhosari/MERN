import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/people/' + productId)
        .then(res => {
            removeFromDom(productId)
        })
}
    return (
        <div>
            {props.product.map((product, idx)=>{
                return <p key={idx}>
                    <Link to={"/" + person._id}>
                    {product.title}, {product.price}
                    </Link>
                    <button onClick={(e)=>{deletePerson(product._id)}}>
                        Delete
                    </button>
                    </p>
            })}
        </div>
    )
}