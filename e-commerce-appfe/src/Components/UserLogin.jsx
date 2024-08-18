import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate, Link} from 'react-router-dom';

const UserLogin = () => {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    let navigation = useNavigate();

    function verifyUser(e) {
        e.preventDefault()
        // checking the email and password is correct or not in database
        axios.post(`http://localhost:8080/users/verify-by-email?email=${email}&password=${password}`)
            .then((res) => {
                // console.log(res);
                localStorage.setItem("Merchant", JSON.stringify(res.data.body))
                // redirecting to MerchantHomePage Component
                navigation('/userhomepage/home');
                alert("Login Successfull")
            })
            .catch((res) => { console.log(res); alert("Invalid Credencials") })
    }
    return (
        <div className='userlogin'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>{setemail(e.target.value); console.log(e);}} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>{setpassword(e.target.value); console.log(e)}}  type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <button className='btn btn-success mx-5' onClick={verifyUser}>Sign in</button>
                    <button className='btn btn-danger mx-5'><Link to=''>Sign Up</Link></button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default UserLogin
