import React from 'react'

const Parameter = (props) => {
    {{var x = isNaN(props.var) 
        ? "word" : "number"
    }}
    return (
        <div>
            <h2>
                We're passing a parameter inside the url: {props.var}
            </h2>
        </div>
    )
}

export default Parameter; 