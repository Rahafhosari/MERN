import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

import {
    Button,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AllAuthors = () => {
    const [authors, setAuthors] = useState([])
    const [author, setAuthor] = useState({})


    useEffect( () => {
        //axios.get("URL IS HERE")
        axios.get('http://localhost:8000/api/authors')
            .then(response => setAuthors((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])

    const navigateToNewRoute = () => {
        navigate("/new");
    }

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

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }

    return (
        <div className="Container">
            <div className="row">
                <Card>
                    <CardContent>
                        <h1>Favourite Authors</h1>
                    </CardContent>
                </Card>
            </div>
            <div className="rowrow">
                <h2>This is a List of All Favourite Authors: </h2>
                    <TableContainer component={Paper}>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>_id</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Actions Availabe</TableCell>
                        </TableRow>
                    </TableHead>
                    {authors.length > 0 && authors.map((item,index)=>
                        {
                            
                            return( 
                                <div className="row1">
                                    {/* <div className="col">
                                    <div key={index}>{item.name}</div>
                                    </div>
                                    <div className="col">
                                        <Button onClick={navigateToNewRoute} variant="contained"  size="meduim" color="primary"className={classes.margin}>
                                            Edit
                                        </Button>
                                    </div>
                                    <div className="col">
                                        <Button onClick={navigateToNewRoute} variant="outlined" size="meduim" color="primary" className={classes.margin}>
                                            Delete
                                        </Button>
                                    </div> */}
                                    <div className="row">
                                        <TableBody>
                                            <TableRow >
                                                    <TableCell>
                                                        {item._id}
                                                    </TableCell>
                                                    <TableCell align="middle">{item.name}</TableCell>
                                                    <TableCell align="middle">
                                                        <Button variant="contained"  size="meduim" color="primary"className={classes.margin}>
                                                            <Link to={"/author/" + item._id + "/edit"}>
                                                                Edit
                                                            </Link>
                                                        </Button>
                                                        <DeleteButton authorId={item._id} successCallback={()=>removeFromDom(item._id)} />
                                                            {/* Needs to Refresh Page to see when deleted */}
                                                        {/* <DeleteButton authorId={item._id} successCallback={() => navigate("/") } /> */}
                                                    </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </div>
                                </div>
                                )
                        }
                        )     
                    }
                    </Table>
                    </TableContainer>
            </div>
            <div className="row">
                <Button onClick={navigateToNewRoute} variant="contained" color="secondary">
                    Click Here to Add a New Author
                </Button>
                {/* <input type='button' value='Click Here to Add a New Author' onClick={navigateToNewRoute}/> */}
            </div>
        </div>
    )
}

export default AllAuthors;


