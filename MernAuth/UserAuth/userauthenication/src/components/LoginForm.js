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
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput type="email"onChange={(e)=>setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setPassword(e.target.value)}/>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                            Login
                        </Button>
                    </form>
                    </Paper>
                </div>
            </div>            
        </div>
    )
}

export default LoginForm
