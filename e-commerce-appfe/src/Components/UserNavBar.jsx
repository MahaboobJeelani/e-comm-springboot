import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import SingleProduct from './SingleProduct';

const UserNavBar = () => {

  let [item, setitem] = useState([])

  let nav = useNavigate();

  useEffect((e) => {
    axios.get(`http://localhost:8080/products`)
      .then((res) => {
        // console.log(res.data.body);
        setitem(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  let searchBybrand = (brand) => {
    axios.get(`http://localhost:8080/products/find-by-brand/${brand}`)
      .then((res) => {
        // console.log(res.data.body);
        setitem(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let searchByCategory = (category) => {
    axios.get(`http://localhost:8080/products/find-by-category/${category}`)
      .then((res) => {
        console.log(res.data.body);
        setitem(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let singleProduct = (id) => {
    nav(`/userhomepage/singleproduct/${id}`)
  }


  return (
    <header>
      <nav className='headermenu'>

        <div className='logo'>
          <a href="#">
            <h1>Shopping<span>Cart</span></h1>
          </a>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/userhomepage/updateuser">Edit Account</Dropdown.Item>
              <Dropdown.Item href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>

      <div className='disp'>
        <div className="product">

          {item.map((x) => {

            return (
              <div className="search" key={x.id} >

                <div className="brandcategory">
                  <button onClick={() => { searchBybrand(x.brand) }}>By Brand</button>
                  <button onClick={() => { searchByCategory(x.category) }}>By Category</button>
                </div>

                <div className="productview" onClick={()=>singleProduct(x.id)}>
                  <div className="image">
                    <img src={x.image_url} alt={`${x.name}`} />
                  </div>

                  <div className="desc" style={{ cursor: 'pointer' }}>
                    <h4 id='name'>{x.name} || {x.brand}</h4>
                    <span id='cost'><b>₹ </b>{x.cost}</span>
                    <br />
                    <div id='description'><span >{x.description}</span></div>
                  </div>

                </div>

              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default UserNavBar
