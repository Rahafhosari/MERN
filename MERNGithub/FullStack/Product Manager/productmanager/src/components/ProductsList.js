import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const ProductsList = (props) => {
// export default props => {
    const [products, setProducts] = useState([])
    
    //for delete process
    const [product, setProduct] = useState([])

    //For deleting a product
    const { removeFromDom } = props;

    useEffect( () => {
        axios.get('http://localhost:8000/api/allProducts')
            .then(response => setProducts((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[product.id])
    
    //For the delete button
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div className="container1">
            <h2>This is a List of All Products: </h2>
            <div className="row">
                <div className="col">
                    <p>Title</p>
                </div>
                {/* <div className="col-4">
                    <p>Price</p>
                </div>
                <div className="col-4">
                    <p>Description</p>
                </div>
                <div className="col">
                    <div key={index}>{item.title}: {item.price}, {item.description}</div> 
                </div> */}
            </div>
            {products.length > 0 && products.map((item,index)=>
                {
                    return(
                    <div key={index}> 
                        <div className="row" >
                            <div className="col">
                                <p>
                                <Link to={"/product/" + item._id}>
                                    {item.title}
                                </Link>
                                </p>
                            </div>
                            <div className="col">
                            <button onClick={(e)=>{deleteProduct(item._id)}} className="btn btn-danger btn-sm">
                                Delete
                            </button>
                            </div>
                            {/* <div className="col">
                                <p>{item.price}</p>
                            </div>
                            <div className="col">
                                <p>{item.description}</p>
                            </div> */}
                        </div>
                    </div>
                    )
                })
            }
            {/* <input type='button' value='Click Here to Add a New Author' onClick={navigateToNewRoute}/> */}
        </div>
    )
}

export default ProductsList;

