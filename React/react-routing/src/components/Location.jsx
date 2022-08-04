import React from 'react'
import { useParams } from 'react-router';

const Location = (props) => {

    const { city } = useParams();

    return (
    <div>
        <p>Location</p>
        <h1>Location Component Loaded!</h1>
        <h2>Welcome to {city} !</h2>
    </div>
    )
}

export default Location