import React, {useState} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
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


const AuthorsForm = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {
            name: name,
        })
            .then(() => navigate("/"))
            .catch(err => {
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
                    <p><Link to="/"> Home </Link></p>
                    <p><h3>Add a new author:&nbsp;</h3>
                        <p>
                        {
                            errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                        }
                        </p>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Paper elevation={3} style={styles.paper}>
                    <form onSubmit={ onSubmitHandler }>
                        {/* Using Material-UI  */}
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Author Name</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setName(e.target.value)}/>
                        </FormControl>
                        <Button onClick={()=>navigate("/")} className="btn btn-secondary btn-sm">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                            Submit
                        </Button>
                        {/* Using Normal Forms */}
                        {/* <div className="form-group">
                            <label>Name:</label>
                            <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group text-right">
                            <button onClick={()=>navigate("/")} type="button" className="btn btn-secondary btn-sm">Cancel</button>
                            <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}>Submit</button>
                        </div> */}
                    </form>
                    </Paper>
                </div>
            </div>            
        </div>
    )
}

export default AuthorsForm;
