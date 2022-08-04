import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const UpdateAuthor = (props) => {
    const { id } = props;
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
                .then(res => {
                setName(res.data.name);
            })
    }, [])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name,
        })
            // .then(res => console.log(res));
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
    
    // Material-UI
    const styles = {
        paper: {
            width: "20rem", padding: "1rem"
        },
        input: {
            marginBottom: "1rem"
        },
        button: {
            width: "100%"
        }
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
                <Paper elevation={3} style={styles.paper}>
                    {/* Using Material-UI  */}
                <form onSubmit={updateAuthor}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Author Name</InputLabel>
                        <OutlinedInput type="text"onChange={(e)=>setName(e.target.value)} value={name}/>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                            Update Author
                    </Button>
                        {/* Using Normal Forms */}
                    {/* <div className="form-group">
                        <label>Name:</label>
                        <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control"/>
                    </div>
                    <div className="form-group text-right">
                        <button onClick={()=>navigate("/")} type="button" className="btn btn-secondary btn-sm">Cancel</button>
                        <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}>Update Author</button>
                    </div> */}
                </form>
                </Paper>
            </div>
        </div>
    </div>
    )
}

export default UpdateAuthor;