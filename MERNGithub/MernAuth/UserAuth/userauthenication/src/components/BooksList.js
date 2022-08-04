import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from './DeleteButton';


export default props => {
    //const [products, setProducts] = useState([])
    
    //for delete process
    const [book, setBook] = useState([])
    const [allBooks, setAllBooks] = useState([])

    //For deleting a product
    const { removeFromDom, books } = props;

    useEffect( () => {
        setAllBooks(books)
    },[books])
    
    //For the delete button
    const deleteBook = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div className="container1">
            <div className="row">
                <div className="col-6">
                    <p>Book</p>
                </div>
            </div>
            {allBooks.length > 0 && allBooks.map((item,index)=>
                {
                    return(
                    <div> 
                        <div className="row" key={index}>
                            <div className="col">
                                <p>
                                <Link to={"/book/" + item._id}>
                                    {item.name}
                                </Link>
                                </p>
                            </div>
                            <div className="col">
                            <DeleteButton productId={item._id} successCallback={() => navigate("/")} />
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}