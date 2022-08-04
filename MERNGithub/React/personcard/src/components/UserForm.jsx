import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");  

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value)} value={ username } /> {/*value "name" same as useState variable*/}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value)} value={ email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value)} value={ password } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setconfirmPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
        <div>
            <h2>Your Form Data</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Password Confirm: {confirmPassword}</p>
        </div>
        </>
    );
};
    
export default UserForm;