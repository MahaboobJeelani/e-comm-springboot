import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Styles/MerchantNavBar.css'
const MerchantNavbar = () => {
  return (
    <nav className='headermenu'>

      <div className='logo'>
        <a href="/merchanthomepage/productview">
          <h1>Shopping<span>Cart</span></h1>
        </a>
      </div>

      <div className='viewproducts'>
        <Link to="/merchanthomepage/productview">View Products</Link>
        <Link to="/merchanthomepage/addproducts">Add Produts</Link>
      </div>

      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <AccountCircleIcon/> Account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/merchanthomepage/updatemerchant">Edit Account</Dropdown.Item>
            <Dropdown.Item href="/">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      
    </nav>
  )
}

export default MerchantNavbar
