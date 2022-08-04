import React from 'react'

const StyleParam = (props) => {
    { 
        var x = isNaN(props.var) 
        ? "word" 
        : "number"
    }
    const Style = {
        background : props.color1,
        color : props.color2
    }
    return (
          //style = {{ background: props.color, background: props.color}}
        <div>
            <h1 style = {Style} >
            We're passing a parameter inside the url with Style:   
            </h1>
            <h3 style = {Style}> which is a {x}  and it's value is {props.var} </h3>
        </div>
    )
}

export default StyleParam;