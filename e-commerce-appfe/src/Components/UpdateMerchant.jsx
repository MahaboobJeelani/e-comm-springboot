import axios from 'axios'
import React, { useEffect, useState } from 'react'
// CSS is already imported into this components check the className in tag and findout if you want to identify whcih style is applyed

const UpdateMerchant = () => {
  let [name, setname] = useState("")
  let [gst_number, setgst_number] = useState("")
  let [email, setemail] = useState("")
  let [phone, setphone] = useState("")
  let [password, setpassword] = useState("")
  let [id, setid] = useState("")

  let data = { name, email, gst_number, phone, password }
  let merchant = JSON.parse(localStorage.getItem("Merchant"))

  useEffect(() => {
    setname(merchant.name)
    setgst_number(merchant.gst_number)
    setemail(merchant.email)
    setphone(merchant.phone)
    setpassword(merchant.password)
    setid(merchant.id)
  }, [])

  const updateMerchant = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8080/merchants`, data)
      .then((res) => { console.log(res); alert("Data Updated succesfully") })
      .catch((err) => { console.log(err); alert('Data not Found') })
  }

  return (
    <div className='merchantsignup'>
      <div className='merchantsign'>
        <h1>Merchant Data</h1>
        <hr />
        <form action="">
          <label htmlFor="">ID</label>
          <input type="text" value={id} onChange={(e) => { setname(e.target.value) }} required />

          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder='Enter the Name' required />
          <label htmlFor="">GST_Number</label>
          <input type="text" value={gst_number} onChange={(e) => { setgst_number(e.target.value) }} placeholder='Enter the GST_Number' required />
          <label htmlFor="">Email</label>
          <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='Enter the Email' required />
          <label htmlFor="">Phone no</label>
          <input type="text" value={phone} onChange={(e) => { setphone(e.target.value) }} placeholder='Enter the Phone' required />
          <label htmlFor="">Password</label>
          <input type="text" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter the Password' required />
        </form>
        
        <div className='signupbtn'>
          <button onClick={updateMerchant}>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default UpdateMerchant
