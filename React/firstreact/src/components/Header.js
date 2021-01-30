import React, { Component } from 'react';

class Test extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                {/* Destructuring allows us to use them like variables. This is just a small amount of syntactical sugar. */}
                <h1> { firstName},  { lastName }</h1>
                <h4> Age: {age} </h4>
                <h4> Hair Color : {hairColor} </h4>
            </div>
        );
    }
}
export default Test; 