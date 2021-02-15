import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

import {
  Card,
  CardContent
} from '@material-ui/core';

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/books')
            .then(response => setBooks((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])
    return (
        <div className="container">
            <div className="row">
                <Card>
                    <CardContent>
                        <h3>Favourite Books</h3>
                    </CardContent>
                </Card>
            </div>
            <div className="row1">
                <div className="col-4">
                    List of All Books
                    
                </div>
                <div className="col-8">
                    My Favourite Books
                </div>
            </div>
            
        </div>
    )
}

export default Books
