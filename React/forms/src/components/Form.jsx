import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setconfirmPassword] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUsernameError("Name is required!");
        } else if(e.target.value.length < 3) {
            setUsernameError("Name must be 3 characters or longer!");
        }
        else {
            setUsernameError ("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        }else if(e.target.value.length < 4) {
            setEmailError("Email must be 4 characters or longer!");
        }
        else {
            setEmailError ("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password required!");
        } else if(e.target.value.length < 6) {
            setPasswordError("Password  be 6 characters or longer!");
        }
        else{
            setPasswordError("")
        }
    }

    const handleconfirmPassword = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            confirmPasswordError("Password required!");
        } else if(e.target.value !== password) {
            setconfirmPasswordError("Opps Password doesn't match..Password confirmation must match Password");
        }
        else if
            (e.target.value === password ){
            setconfirmPasswordError("")
        }
    }
    return (
        <>
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                {/* <input type="text" onChange={ (e) => setUsername(e.target.value) } /> */}
                <input type="text" onChange={ handleUsername } />
                {
                    usernameError ?
                    <p style={{color:'red'}}>{ usernameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                {/* <input type="email" onChange={ (e) => setEmail(e.target.value) } /> */}
                <input type="email" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                {/* <input type="text" onChange={ (e) => setPassword(e.target.value) } /> */}
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                {/* <input type="text" onChange={ (e) => setconfirmPassword(e.target.value)} /> */}
                <input type="text" onChange={ handleconfirmPassword } />
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
        <div>
            <h3> Form Information </h3>
            <p>Username: {username} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {confirmPassword} </p>
        </div>
        </>
    );
};
    
export default UserForm;