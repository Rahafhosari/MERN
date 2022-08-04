import axios from 'axios'
import React,{useState} from 'react'
import {navigate} from '@reach/router'

const Form = () => {
    const [firstName, setFirstName]=useState("")
    const [lastName, setlastName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")

    const registerHandler = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/register",{
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
        .then(() =>navigate('/success'))
    }
    return (
        <div>
            <form onSubmit={registerHandler}>
            <div className="form-group">
                            <label>Name:</label>
                            <input onChange={(e)=>setFirstName(e.target.value)} type="text"/>
                            <label>Last Name:</label>
                            <input onChange={(e)=>setlastName(e.target.value)} type="text"/>
                            <label>email:</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="text"/>
                            <label>password:</label>
                            <input onChange={(e)=>setPassword(e.target.value)} type="password"/>
                            <label>confirm Password:</label>
                            <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password"/>
                            <button type='submit'>add</button>
                        </div>
                </form>
        </div>
    )
}

export default Form
