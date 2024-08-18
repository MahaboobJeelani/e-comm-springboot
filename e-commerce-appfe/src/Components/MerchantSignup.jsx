import React, { useState } from 'react'
import "../Styles/MerchantSignup.css"
import axios from 'axios'

const MerchantSignup = () => {
    let [name, setname] = useState("")
    let [gst_number, setgst_number] = useState("")
    let [email, setemail] = useState("")
    let [phone, setphone] = useState("")
    let [password, setpassword] = useState("")
    let data = {name, email, gst_number, phone, password}
    
    const addMerchant = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8080/merchants`, data)
        .then((res)=>{console.log(res); alert("Data Added succesfully")})
        .catch((err)=>{console.log(err); alert('Data not Found')})
    }
    return (

        <div className='merchantsignup'>
            <div className='merchantsign'>
                <h2>Merchant Data</h2>
                <hr />
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter the Name' required />
                    <label htmlFor="">GST_Number</label>
                    <input type="text" value={gst_number} onChange={(e)=>{setgst_number(e.target.value)}} placeholder='Enter the GST_Number' required />
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter the Email' required />
                    <label htmlFor="">Phone no</label>
                    <input type="text" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder='Enter the Phone' required />
                    <label htmlFor="">Password</label>
                    <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter the Password' required />
                </form>
                <div className='signupbtn'>
                    <button onClick={addMerchant}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default MerchantSignup