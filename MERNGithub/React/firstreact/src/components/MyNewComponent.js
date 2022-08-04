import React, { Component } from 'react';

class MyNewComponent extends Component{
    constructor (props) {
        super(props);
        this.state = { 
            counter: 0
        }
    }

    changeCounter(){
        const count = this.state.counter + 1;
        this.setState({counter: count});
        return count;
    }
    render(){
        return(
            <div>
            <h2>We're in the new Component!</h2>
            {this.props.someText}
            {this.props.children}
            <button onClick={() =>alert("Button Clicked "+ this.changeCounter() +" times.")}> Click Here!</button>
            </div>
            
        );
    }
}
export default MyNewComponent;