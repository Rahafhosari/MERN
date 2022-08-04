import React from 'react'
import axios from 'axios';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default props => {
    const { authorId, successCallback } = props;

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

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        // <button onClick={deleteAuthor} className="btn btn-danger btn-sm">
        //     Delete
        // </button>
        <Button onClick={deleteAuthor} variant="outlined" size="meduim" color="primary" className={classes.margin}>
            Delete
        </Button>
    )
}