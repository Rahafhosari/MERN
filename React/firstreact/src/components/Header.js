import React, { Component } from 'react';

class Test extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            firstName : this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            hairColor: this.props.hairColor

        };
    }
    addAge = () => {
        // const birthayCount = this.state.ageCount + 1;
        this.setState({
            age: this.state.age += 1});
    }
    render() {
        const { firstName, lastName, age, hairColor } = this.state;
        
        return (
            <div>
                {/* Destructuring allows us to use them like variables. This is just a small amount of syntactical sugar. */}
                <h1> { firstName},  { lastName }</h1>
                <h4> Age: {age} </h4>
                <h4> Hair Color : {hairColor} </h4>
                <button onClick={this.addAge}>Birthday Button for {firstName} {lastName} </button>
            </div>
        );
    }
}
export default Test; 