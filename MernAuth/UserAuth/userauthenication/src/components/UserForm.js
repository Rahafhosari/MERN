import React, {useState} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    MenuItem,
    Select,

} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

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

const UserForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [errors, setErrors] = useState([])

    //Material-UI Button
    const useStyles = makeStyles((theme) => ({
        margin: {
        margin: theme.spacing(1),
        },
        extendedIcon: {
        marginRight: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            country: country
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
                    <p><h3>Register New User:&nbsp;</h3>
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
                            <InputLabel>First Name</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setFirstName(e.target.value)}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Last Name</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setLastName(e.target.value)}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput type="email"onChange={(e)=>setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setPassword(e.target.value)}/>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            label="Country"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>From Data Base</MenuItem>
                            </Select>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                            Register
                        </Button>
                    </form>
                    </Paper>
                    <div class="col-6">
                        <Link to="/login">
                            Already A User, Login Now
                        </Link>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default UserForm
