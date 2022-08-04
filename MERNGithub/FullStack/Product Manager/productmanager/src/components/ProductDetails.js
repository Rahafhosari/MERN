import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ProductDetails = (props) => {
// export default props => {
    const [product, setProduct] = useState({})
    
    //For deleting a product
    const { removeFromDom } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    
    //For the delete button
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
                // navigate ("/")
            }
            )
            
    }
    return (
        <div className="container2">
            <div className="row">
                <div className="col">
                    <h1>{product.title}</h1>
                    <p><h4>Price:</h4> {product.price}</p>
                    <p><h4>Description:</h4> {product.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link
                        Link to={"/product/" + product._id + "/edit"}>
                        <h4>Edit</h4>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"/"}>
                        <h4> Home </h4>
                    </Link>
                </div>
                <div className="col">
                    <button onClick={(e)=>{deleteProduct(product._id)}} className="btn btn-danger btn-sm">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;