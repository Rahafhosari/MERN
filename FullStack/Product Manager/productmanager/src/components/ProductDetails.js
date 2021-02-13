import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

// const ProductDetails = (props) => {
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div className="container">
        <div className="row">
            <h1>{product.title}</h1>
            <p><h4>Price: </h4>{product.price}</p>
            <p><h4>Description: </h4>{product.description}</p>
        </div>
        <div className="row">
        <Link to={"/product/" + product._id + "/edit"}>
            <h4>Edit</h4>
        </Link>
        </div>
        <div className="row">
        <Link to={"/"}>
            <h4> Home </h4>
        </Link>
        </div>
        </div>
    )
   
}

// export default ProductDetails;