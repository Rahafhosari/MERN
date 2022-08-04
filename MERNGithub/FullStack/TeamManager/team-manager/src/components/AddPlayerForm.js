import React, {useState} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import {Paper} from '@material-ui/core';

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

const AddPlayerForm = () => {
    const [name,setName]=useState("");
    const [position,setPosition]=useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/addplayer", {
            name: name,
            position: position
        })
            .then(() => navigate("/players/list"))
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

    //Button is enabled when length is greated than 2
    const [formError, setFormError] = useState(" ")
    const isEnabled = name.length > 1;
    // const isEnabled = e =>{
    //     if (e.target.value.length < 1)
    //         setFormError("Player Name is required")
    //     else if (e.target.value.length < 2)
    //         setFormError("Player Name must be at least 2 characters long")
    //     else{
    //         setName(e.target.value);
    //         setFormError("");
    //     }
    // }    
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>ManagePlayers | <Link to="/status/game/1">Manage Player Status</Link></p>
                </div>
                <div className="col-12">
                    <p><Link to="/players/list"> List </Link> | Add Player</p>
                    <p><h3>Add a new Player:&nbsp;</h3>
                    <p style={{color:"red"}}>{formError}</p>
                        <p>
                        {errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)}
                        </p>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <center>
                    <Paper elevation={3} style={styles.paper}>
                    <form onSubmit={ onSubmitHandler }>
                        <div className="form-group">
                            <label>Name:</label>
                            <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="player name" required/>  
                        </div>
                        <div className="form-group">
                            <label>Position:</label>
                            <input onChange={(e)=>setPosition(e.target.value)} type="text" className="form-control" placeholder="player position" />
                        </div>
                        <div className="form-group text-right">
                            <button onClick={()=>navigate("/")} type="button" className="btn btn-secondary btn-sm">Cancel</button>
                            <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}
                                disabled={!isEnabled}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    </Paper>
                    </center>
                </div>
            </div>            
        </div>
    )
}

export default AddPlayerForm
