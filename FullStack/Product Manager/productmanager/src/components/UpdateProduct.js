import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const UpdateProduct = (props) => {
    const { id } = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
                .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            // .then(res => console.log(res));
            .then(() => navigate ("/product/"+id))
            .catch(err=> {
                //to show Validation messages
                const errorResponse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArray.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArray);
            })
    }

    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
                <p>{errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)}</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <fieldset>
                    <legend>Update a Product</legend>
                <form onSubmit={updateProduct}>
                    <div className="form-group">
                        <label>Title</label><br/>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control" placeholder="product name"/>
                    </div>
                    <div className="form-group" >
                        <label>Price</label><br/>
                        <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} className="form-control" placeholder="price $"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label><br/>
                        <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} className="form-control" placeholder="brief description"/>
                    </div>
                    <div className="form-group text-right">
                        {/* <input type="submit" value="Create"/> */}
                        <button className="btn btn-primary" style={{marginLeft: "10px"}}>Update Product</button>
                    </div>
                </form>
                </fieldset>
            </div>
        </div>
    </div>
    )
}

export default UpdateProduct
