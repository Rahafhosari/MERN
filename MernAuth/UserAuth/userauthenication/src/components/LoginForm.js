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

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
        axios.post("http://localhost:8000/api/login", {
            email,
            password
        })
            .then(res => navigate("/success"))
            .catch(err=>console.log(err))
            // .catch(err => {
            //     const errorResponse = err.response.data.errors;
            //     const errorArray = [];
            //     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            //         errorArray.push(errorResponse[key].message)
            //     }
            //     // Set Errors
            //     setErrors(errorArray);
            // })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p><h3>Login&nbsp;</h3>
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
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput type="email"onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput type="password"onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </FormControl>
                        {/* <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                            Login
                        </Button> */}
                        <input type="submit" value="Login"/>
                    </form>
                    </Paper>
                </div>
            </div> 
            <div className="row">
                <Link to={"/success"}>
                    All Books
                </Link>
            </div>           
        </div>
    )
}

export default LoginForm
