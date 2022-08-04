import React from "react";
import { Component } from "react";

class Test extends Component {    
    render(){        
        return (            
            <>                
                <h1>Hello World</h1>                
                <p>This is a paragraph</p>  
                <h2> Hello Dojo! </h2>   
                <table>
                    <thead>
                        <tr>
                            <td>Things I need to Do</td>
                            <td>Things Done </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Read React Class and Functional Components
                            </td>
                            <td>
                                Solve The first React JSX
                                <ul>
                                    <li>Learn React</li>
                                    <li>CLimb Mt. Everst </li>
                                    <li>Run a Marathon </li>
                                    <li>Feed the CATS </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>       
            </>        
        );    
    }
}

export default Test;