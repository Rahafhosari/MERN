import React from 'react'

const Parameter = (props) => {
        {var x = isNaN(props.var) 
        ? "word" : "number"
        }
    
    return (
        <div>
            <h2>
                We're passing a parameter inside the url: {props.var}
            </h2>
        </div>
    )
}


export default Parameter; 

//App.js
// <Router>
// <Show path="/home" variable={"Welcome"} />
// <Show path="/:variable" />
// <Show path="/:variable/:color/:backgroundColor" />
// </Router> 


//Show Component
// const { variable, color, backgroundColor } = props;
// return (
//     <h1 style={{ color: color, backgroundColor: backgroundColor }}>
//         {isNaN(variable) ?
//             variable === "Welcome" ? variable : `The word is: ${variable}`
//             : `The number is: ${variable}`}
//     </h1>
// )