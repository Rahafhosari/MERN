import React from 'react'
import { useParams } from 'react-router-dom'

const Word = (props) => {
    const {word, color1, color2} = useParams();
    const {num} = useParams();

    if(isNaN(word))
        {
        return (
            <>
                <div style={{color:color1, background: color2}}>
                    <em>Word</em>
                    <p>This is the word passed by URL : {word}</p> 
                </div>
            </>
        )
        }
        else{
        return (
            <>
                <div>
                    <em>Number</em>
                    <p>This {word}</p>
                </div>
            </>
        )
        }
}

export default Word