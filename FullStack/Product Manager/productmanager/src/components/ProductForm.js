import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [errors, setErrors] = useState([])

    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description
        })
            .then(() => navigate ("/"))
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
                        <legend>Product Form</legend>
                    <form onSubmit={onSubmitHandler}>
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
                            <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}>Add A New Product</button>
                        </div>
                    </form>
                    </fieldset>
                </div>
            </div>
    </div>
    )
}