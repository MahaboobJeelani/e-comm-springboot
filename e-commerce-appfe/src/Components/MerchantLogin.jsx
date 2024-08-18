import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const MerchantLogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigation = useNavigate();

    function verifyMerchant(e) {
        e.preventDefault()
        // checking the email and password is correct or not in database
        axios.post(`http://localhost:8080/merchants/verify-by-email?email=${email}&password=${password}`)
            .then((res) => {
                console.log(res.data.body);
                localStorage.setItem("Merchant", JSON.stringify(res.data.body))
                // redirecting to MerchantHomePage Component
                navigation('/merchanthomepage');
                alert("Login Successfull")
            })
            .catch((res) => { console.log(res); alert("Account is Not Activated") })
    }
    return (
        <div className='merchantlogin'>
            <Form>
                <h1>Merchant Login</h1>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>
                <Form.Group>
                    <button onClick={verifyMerchant} className='btn btn-success mx-5'>Sign in</button>
                    <button className='btn btn-danger mx-5'><Link to="/merchantsignup">Sign Up</Link></button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default MerchantLogin
